# Sebastián Sierra · Portfolio

Portafolio personal de Sebastián Sierra, construido con Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis y Three.js. La experiencia toma como referencia técnica la arquitectura abierta de [Naeem Sabir](https://github.com/naeemsabir1/naeem-portfolio), publicada bajo MIT, pero el contenido, la identidad, los enlaces y los datos de este proyecto pertenecen a Sebastián.

## Qué incluye

- Hero interactivo con escenas WebGL y transiciones de scroll.
- Navegación glassmorphism, audio opcional y cursor contextual.
- Stack técnico en formato bento con filtros y playgrounds.
- Proyectos de Fudia, Souls in Xtinction, Simulador, Invehin, Habitta y herramientas secundarias.
- Modales y casos de estudio para proyectos.
- Playground de interfaces y visualizaciones ligeras.
- Página de contacto y descarga del CV.
- Endpoint opcional de analítica en `POST /api/analytics/events`.
- Chat preparado para Groq, pero desactivado de forma segura si no existe `GROQ_API_KEY`.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm run build
```

## Variables opcionales

Copia `.env.example` a `.env.local` si necesitas activar integraciones futuras:

```env
GROQ_API_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

La landing funciona sin estas variables. El esquema de analítica para Supabase está en [`supabase/schema.sql`](./supabase/schema.sql).

## Arquitectura

- `app/`: App Router, metadata, páginas y Route Handlers.
- `components/`: navegación, hero, stack, proyectos, playgrounds y contacto.
- `data/content.ts`: perfil, tecnologías y proyectos centralizados.
- `lib/`: analítica, audio, conocimiento del asistente y utilidades.
- `public/`: foto, CV, mockups provisionales y secuencia visual del hero.

## Estado de publicación

El código se mantiene en un repositorio público de GitHub. No hay despliegue configurado en Cloudflare, Vercel, Netlify ni GitHub Pages; el siguiente paso de publicación web se decidirá después de validar la landing y reemplazar los mockups provisionales por capturas definitivas.

## Licencia y atribución

La implementación base reutiliza componentes y patrones del repositorio MIT de [naeemsabir1/naeem-portfolio](https://github.com/naeemsabir1/naeem-portfolio). La personalización de contenido, datos, assets propios y cambios de Sebastián se distribuyen como parte de este repositorio público.
