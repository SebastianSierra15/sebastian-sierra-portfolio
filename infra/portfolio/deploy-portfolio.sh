#!/usr/bin/env bash

set -Eeuo pipefail

readonly REPOSITORY="SebastianSierra15/sebastian-sierra-portfolio"
readonly BRANCH="main"
readonly APP_DIR="/opt/apps/portfolio"
readonly INFRA_DIR="/opt/infra/portfolio"
readonly BACKUP_DIR="/opt/backups/portfolio"
readonly COMPOSE_FILE="${INFRA_DIR}/docker-compose.production.yml"
readonly STATE_FILE="${INFRA_DIR}/deployed-sha"
readonly LOCK_FILE="${INFRA_DIR}/deploy.lock"

mkdir -p "${BACKUP_DIR}"
exec 9>"${LOCK_FILE}"
flock -n 9 || exit 0

archive=""
staging_dir=""
previous_backup=""

cleanup() {
  rm -f "${archive:-}"
  rm -rf "${staging_dir:-}"
}

rollback() {
  if [[ -n "${previous_backup}" && -s "${previous_backup}" ]]; then
    echo "Deployment failed; restoring previous portfolio source..."
    mkdir -p "${APP_DIR}"
    find "${APP_DIR}" -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +
    tar -xzf "${previous_backup}" -C "${APP_DIR}"
    docker compose -f "${COMPOSE_FILE}" up -d --build portfolio-web || true
  fi
}

trap cleanup EXIT
trap rollback ERR

remote_sha="$(curl --fail --silent --show-error --max-time 20 \
  -H 'Accept: application/vnd.github+json' \
  "https://api.github.com/repos/${REPOSITORY}/commits/${BRANCH}" | jq -er '.sha')"

if [[ -f "${STATE_FILE}" ]] && [[ "$(cat "${STATE_FILE}")" == "${remote_sha}" ]]; then
  exit 0
fi

echo "New portfolio commit detected: ${remote_sha}"
archive="$(mktemp "${BACKUP_DIR}/incoming.XXXXXX.tar.gz")"
staging_dir="$(mktemp -d "${BACKUP_DIR}/staging.XXXXXX")"
previous_backup="${BACKUP_DIR}/previous-${remote_sha}.tar.gz"

curl --fail --silent --show-error --location --max-time 120 \
  "https://codeload.github.com/${REPOSITORY}/tar.gz/${remote_sha}" \
  --output "${archive}"

tar -czf "${previous_backup}" -C "${APP_DIR}" .
tar --strip-components=1 -xzf "${archive}" -C "${staging_dir}"

find "${APP_DIR}" -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +
cp -a "${staging_dir}"/. "${APP_DIR}"/
staging_dir=""

docker compose -f "${COMPOSE_FILE}" up -d --build --remove-orphans portfolio-web

for attempt in $(seq 1 30); do
  health="$(docker inspect -f '{{.State.Health.Status}}' portfolio-portfolio-web-1 2>/dev/null || true)"
  if [[ "${health}" == "healthy" ]]; then
    break
  fi
  if [[ "${attempt}" == "30" ]]; then
    echo "Portfolio health check did not become healthy" >&2
    exit 1
  fi
  sleep 2
done

curl --fail --silent --show-error --max-time 20 \
  "https://sierra.prometeondev.com/robots.txt" >/dev/null

printf '%s\n' "${remote_sha}" > "${STATE_FILE}.tmp"
mv "${STATE_FILE}.tmp" "${STATE_FILE}"
trap - ERR
echo "Portfolio deployed: ${remote_sha}"
