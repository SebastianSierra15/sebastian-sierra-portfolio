export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelUrl) {
    return `${vercelUrl.startsWith("http") ? vercelUrl : `https://${vercelUrl}`}`.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}
