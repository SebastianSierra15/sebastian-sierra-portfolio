export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  status: string;
  category: "frontend" | "fullstack" | "backend" | "automation";
  impact: string;
  links?: {
    repo?: string;
    demo?: string;
  };
  visual: {
    tone: string;
    label: string;
    metric: string;
  };
};

export const profile = {
  name: "Sebastian Sierra",
  title: "Full Stack Developer con foco en Frontend",
  location: "Colombia",
  email: "sebsirra13@gmail.com",
  github: "https://github.com/SebastianSierra15",
  linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-sierra-417358263/",
  cv: "/CV-SebastianSierra.pdf",
  photo: "/assets/sebastian-sierra.jpg",
  logo: "/assets/elias.jpg",
  intro:
    "Construyo interfaces modernas y productos completos con React, Next.js, TypeScript, Java, Node y bases de datos. Me interesa que el software se vea bien, responda rapido y resuelva problemas reales.",
};

export const proofPoints = [
  {
    value: "Frontend",
    label: "Experiencias pulidas",
    detail: "UI responsive, accesible, orientada a conversion y preparada para equipos reales.",
  },
  {
    value: "Full Stack",
    label: "Producto completo",
    detail: "APIs, autenticacion, bases de datos, paneles, despliegues y flujos de negocio.",
  },
  {
    value: "Negocio",
    label: "Criterio practico",
    detail: "Priorizo claridad, impacto, mantenibilidad y velocidad de entrega.",
  },
  {
    value: "IA",
    label: "Automatizacion",
    detail: "Uso herramientas modernas para acelerar investigacion, prototipado y operaciones.",
  },
];

export const featuredProjects: Project[] = [
  {
    name: "Fudia",
    eyebrow: "Ecosistema multiproyecto",
    summary:
      "Plataforma modular con varias piezas de producto alrededor de experiencia de usuario, administracion y operacion digital.",
    problem:
      "Un ecosistema con multiples frentes necesita mantener coherencia visual y tecnica sin frenar la iteracion.",
    solution:
      "Arquitectura por modulos, UI consistente y flujos pensados para que cada pieza pueda evolucionar sin romper el conjunto.",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "TypeScript", "Node", "Appwrite", "UI Systems"],
    status: "En evolucion",
    category: "fullstack",
    impact: "Producto real, multiples superficies y foco en escalabilidad.",
    visual: {
      tone: "mint",
      label: "Sistema modular",
      metric: "multi-app",
    },
  },
  {
    name: "Souls in Xtinction",
    eyebrow: "Game companion app",
    summary:
      "Experiencia complementaria para organizar progreso, contenido y decisiones alrededor de un universo de juego.",
    problem:
      "Los jugadores necesitan consultar informacion util sin perder el tono visual del proyecto.",
    solution:
      "Interfaz atmosferica, jerarquia clara y componentes preparados para expandir guias, inventarios y progreso.",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "Design Systems", "Responsive UI"],
    status: "Concepto funcional",
    category: "frontend",
    impact: "Diseño inmersivo con estructura reutilizable.",
    visual: {
      tone: "violet",
      label: "Companion UI",
      metric: "game UX",
    },
  },
  {
    name: "Simulador",
    eyebrow: "Procesos y decisiones",
    summary:
      "Dashboard para modelar escenarios, comparar estados y entender resultados de forma visual.",
    problem:
      "Los procesos complejos suelen ser dificiles de explicar cuando no existe una vista de control clara.",
    solution:
      "Panel con metricas, estados, componentes visuales y una narrativa de decision facil de seguir.",
    role: "Full Stack Developer",
    stack: ["Next.js", "TypeScript", "Charts", "APIs", "UX de datos"],
    status: "Iterativo",
    category: "fullstack",
    impact: "Traduce datos y reglas en decisiones legibles.",
    visual: {
      tone: "blue",
      label: "Decision center",
      metric: "sim",
    },
  },
  {
    name: "Invehin",
    eyebrow: "Gestion Java empresarial",
    summary:
      "Sistema de inventario y ventas construido con Java, JSP, Servlets y MySQL para flujos administrativos.",
    problem:
      "Gestionar ventas, productos y reportes exige una base robusta, clara y facil de operar.",
    solution:
      "Aplicacion web con arquitectura Java tradicional, persistencia MySQL y reportes listos para uso interno.",
    role: "Backend / Full Stack Developer",
    stack: ["Java 21", "JSP", "Servlets", "MySQL", "Tomcat", "JDBC"],
    status: "Repositorio publico",
    category: "backend",
    impact: "Solucion administrativa con base tecnica clasica.",
    links: {
      repo: "https://github.com/SebastianSierra15/Invehin",
    },
    visual: {
      tone: "amber",
      label: "Inventory ops",
      metric: "Java",
    },
  },
  {
    name: "Habitta",
    eyebrow: "Producto habitacional",
    summary:
      "Experiencia digital enfocada en presentar informacion inmobiliaria con criterio visual, confianza y claridad.",
    problem:
      "Las decisiones habitacionales dependen de informacion confiable, comparacion rapida y buena presentacion.",
    solution:
      "Landing y componentes orientados a explicar valor, destacar propiedades y reducir friccion de contacto.",
    role: "Frontend Developer",
    stack: ["Astro", "React", "TypeScript", "SEO", "Responsive Design"],
    status: "En preparacion",
    category: "frontend",
    impact: "Presentacion comercial clara para conversion.",
    visual: {
      tone: "rose",
      label: "Real estate web",
      metric: "SEO",
    },
  },
];

export const secondaryProjects: Project[] = [
  {
    name: "Sistema Estanco",
    eyebrow: "Inventario moderno",
    summary: "Aplicacion full stack con Next.js, NestJS, Prisma, PostgreSQL, MongoDB y Docker.",
    problem: "Centralizar operacion, datos y control administrativo con stack moderno.",
    solution: "Separacion frontend/backend, ORM, contenedores y base escalable.",
    role: "Full Stack Developer",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Docker"],
    status: "Repositorio publico",
    category: "fullstack",
    impact: "Arquitectura moderna para gestion interna.",
    links: { repo: "https://github.com/SebastianSierra15/sistema-estanco" },
    visual: { tone: "green", label: "Ops system", metric: "stack" },
  },
  {
    name: "Turismo App",
    eyebrow: "Frontend turistico",
    summary: "Frontend web para presentar rutas, experiencias y contenido turistico.",
    problem: "El turismo necesita una presentacion clara, visual y facil de navegar.",
    solution: "Interfaz responsive con foco en exploracion y descubrimiento.",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Responsive UI"],
    status: "Demo publica",
    category: "frontend",
    impact: "Experiencia visual publicada.",
    links: {
      repo: "https://github.com/SebastianSierra15/turismo-app",
      demo: "https://turismo-app-five-black.vercel.app",
    },
    visual: { tone: "blue", label: "Travel UI", metric: "web" },
  },
  {
    name: "Udlaverso",
    eyebrow: "Frontend universitario",
    summary: "Interfaz para una experiencia digital de comunidad universitaria.",
    problem: "El contenido academico necesita orden, navegacion directa y presentacion confiable.",
    solution: "Frontend responsive con estructura clara para explorar secciones y contenidos.",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "UI"],
    status: "Demo publica",
    category: "frontend",
    impact: "Producto frontend demostrable.",
    links: {
      repo: "https://github.com/SebastianSierra15/udlaverso-frontend",
      demo: "https://udlaverso-frontend.vercel.app",
    },
    visual: { tone: "violet", label: "Campus web", metric: "demo" },
  },
  {
    name: "Prometeon Mailer",
    eyebrow: "Automatizacion",
    summary: "Herramienta para preparar y ejecutar envios con validaciones y apoyo operativo.",
    problem: "Los procesos manuales de correo pueden consumir tiempo y generar errores repetibles.",
    solution: "Aplicacion Streamlit con procesamiento, validacion y flujo de envio mas controlado.",
    role: "Automation Developer",
    stack: ["Python", "Streamlit", "Pandas", "SMTP", "Mailboxlayer"],
    status: "Demo publica",
    category: "automation",
    impact: "Automatizacion aplicada a tareas operativas.",
    links: {
      repo: "https://github.com/SebastianSierra15/Prometeon-mailer",
      demo: "https://prometeon-mailer.streamlit.app",
    },
    visual: { tone: "amber", label: "Mailer ops", metric: "auto" },
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind", "Accesibilidad", "SEO"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Java", "JSP", "Servlets", "REST APIs", "Auth"],
  },
  {
    title: "Datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "JDBC", "Appwrite"],
  },
  {
    title: "Entrega",
    items: ["Git", "Docker", "Vercel", "Cloudflare", "QA visual", "Documentacion"],
  },
  {
    title: "Producto",
    items: ["UX", "Design systems", "Dashboards", "Automatizacion", "IA aplicada"],
  },
];

export const timeline = [
  {
    title: "Producto completo",
    detail: "He trabajado desde interfaces hasta backend, persistencia, deploys y documentacion.",
  },
  {
    title: "Frontend como diferencial",
    detail: "Mi foco principal esta en construir experiencias claras, atractivas y faciles de usar.",
  },
  {
    title: "Ejecucion con criterio",
    detail: "Me apoyo en investigacion, prototipos rapidos y validacion visual para entregar mejor.",
  },
];

export const services = [
  "Landings y sitios con SEO",
  "Dashboards y paneles internos",
  "Aplicaciones full stack",
  "Modernizacion de interfaces",
  "Automatizaciones operativas",
  "Prototipos con IA aplicada",
];

export const process = [
  {
    title: "Entender el objetivo",
    detail: "Contexto, usuarios, restricciones y resultado esperado.",
    icon: "target",
  },
  {
    title: "Diseñar la experiencia",
    detail: "Flujo, jerarquia visual, estados y copy accionable.",
    icon: "spark",
  },
  {
    title: "Construir por iteraciones",
    detail: "Componentes, datos, integraciones y mejoras progresivas.",
    icon: "layers",
  },
  {
    title: "Validar responsive",
    detail: "Desktop, mobile, accesibilidad, SEO y comportamiento real.",
    icon: "check",
  },
  {
    title: "Preparar entrega",
    detail: "Documentacion, repositorio limpio y siguientes pasos.",
    icon: "ship",
  },
];
