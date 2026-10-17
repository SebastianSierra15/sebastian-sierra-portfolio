# Sebastián Sierra Portfolio

Portafolio personal de Sebastián Sierra construido con Next.js, TypeScript y Tailwind CSS. La experiencia presenta proyectos full stack, foco frontend, stack técnico, laboratorio de interfaces y formas de contacto.

## Stack

- Next.js 16 con App Router
- React 19 y TypeScript
- Tailwind CSS 4
- Lucide React
- Canvas API para el laboratorio visual
- Endpoint opcional de analítica preparado para Supabase

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación se abre en `http://localhost:3000`.

## Comandos

```bash
npm run lint
npm run build
npm run start
```

## Analítica opcional

La landing envía eventos a `POST /api/analytics/events`. Sin variables de entorno, los eventos se validan pero no se persisten, por lo que la experiencia funciona normalmente.

Para conectar Supabase, crea las variables locales:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu-clave-solo-servidor
```

Después ejecuta [`supabase/schema.sql`](./supabase/schema.sql) en el editor SQL de Supabase. La clave de servicio nunca debe exponerse como variable `NEXT_PUBLIC_` ni enviarse al navegador.

## Assets

- Foto: `public/assets/sebastian-sierra.jpg`
- CV: `public/CV-SebastianSierra.pdf`

Los visuales de proyectos son componentes provisionales y pueden sustituirse por screenshots definitivas sin cambiar el modelo de datos.

## Despliegue futuro

La primera entrega no configura despliegue. Cloudflare Workers queda como destino futuro; antes de publicarlo se validará el adaptador recomendado para la versión de Next.js utilizada.
