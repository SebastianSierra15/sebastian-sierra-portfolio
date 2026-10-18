# Despliegue del portfolio

El portfolio se publica en `https://sierra.prometeondev.com` desde la VPS
personal mediante Docker Compose y Caddy.

## Despliegue automático

La VPS personal ejecuta `portfolio-deploy.timer` cada dos minutos. El servicio
consulta el SHA de `main` en GitHub y despliega únicamente cuando detecta un
commit nuevo de este repositorio. No observa ni modifica los otros proyectos.

El workflow `.github/workflows/deploy-portfolio.yml` queda disponible para
ejecución manual con `workflow_dispatch`. Los runners hospedados de GitHub no
se usan actualmente porque la cuenta tiene un bloqueo de facturación; el
temporizador de la VPS mantiene activo el despliegue automático sin depender de
ese servicio.

El workflow:

1. consulta el commit exacto de `main`;
2. descarga ese commit desde GitHub;
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

Si una reconstrucción falla, el script de despliegue intenta restaurar
automáticamente la fuente anterior y volver a levantar `portfolio-web`. Los
archivos de entorno y la configuración de Caddy permanecen fuera del
repositorio de la aplicación.
