# Despliegue del portfolio

El portfolio se publica en `https://sierra.prometeondev.com` desde la VPS
personal mediante Docker Compose y Caddy.

## Despliegue automático

El workflow `.github/workflows/deploy-portfolio.yml` se ejecuta únicamente
cuando cambia la rama `main` de este repositorio. También puede iniciarse
manualmente con `workflow_dispatch`.

El workflow:

1. empaqueta el commit exacto que disparó la ejecución;
2. lo copia a `/opt/backups/portfolio/`;
3. conserva un backup de la versión anterior;
4. reconstruye solamente `portfolio-web`;
5. espera el health check del contenedor;
6. valida `robots.txt` por HTTPS.

La configuración requiere estos secretos del repositorio en GitHub:

- `PORTFOLIO_DEPLOY_SSH_KEY`
- `PORTFOLIO_VPS_KNOWN_HOSTS`
- `PORTFOLIO_VPS_HOST`
- `PORTFOLIO_VPS_USER`

Los valores privados no se guardan en el repositorio.

## Rollback

Cada despliegue guarda la fuente anterior en:

```text
/opt/backups/portfolio/previous-<sha>.tar.gz
```

Si una reconstrucción falla, el workflow intenta restaurar automáticamente la
fuente anterior y volver a levantar `portfolio-web`. Los archivos de entorno y
la configuración de Caddy permanecen fuera del repositorio de la aplicación.
