export type Project = {
  slug: string;
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
  tone: "cyan" | "amber" | "violet" | "blue" | "rose" | "green";
  links?: { repo?: string; demo?: string };
};

export const profile = {
  name: "Sebastián Sierra",
  shortName: "Sebastián Sierra",
  title: "Full Stack Developer con foco en Frontend",
  location: "Colombia · Remoto",
  email: "sebsirra13@gmail.com",
  github: "https://github.com/SebastianSierra15",
  linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-sierra-417358263/",
  cv: "/CV-SebastianSierra.pdf",
  photo: "/assets/sebastian-sierra.jpg",
  intro:
    "Construyo interfaces modernas y productos completos con React, Next.js, TypeScript, Java, Node y bases de datos. Me interesa que el software se entienda, responda rápido y resuelva problemas reales.",
};

export const proofPoints = [
  { value: "Frontend", label: "Interfaces pulidas", detail: "UI responsive, accesible y orientada a producto." },
  { value: "Full Stack", label: "Producto completo", detail: "Desde la interfaz hasta APIs, datos y entrega." },
  { value: "Real", label: "Problemas reales", detail: "Criterio práctico para priorizar impacto y claridad." },
  { value: "IA", label: "Automatización", detail: "Herramientas modernas para investigar y construir mejor." },
];

export const projects: Project[] = [
  {
    slug: "fudia", name: "Fudia", eyebrow: "Ecosistema multiproyecto",
    summary: "Un conjunto de productos y superficies digitales que deben sentirse como un mismo sistema.",
    problem: "Un ecosistema con múltiples frentes necesita coherencia visual y técnica sin frenar la iteración.",
    solution: "Arquitectura por módulos, UI consistente y flujos pensados para que cada pieza evolucione sin romper el conjunto.",
    role: "Full Stack Developer", stack: ["React", "Next.js", "TypeScript", "Node", "Appwrite", "UI Systems"], status: "En evolución", category: "fullstack", impact: "Producto real, múltiples superficies y foco en escalabilidad.", tone: "cyan",
  },
  {
    slug: "souls-in-xtinction", name: "Souls in Xtinction", eyebrow: "Game companion app",
    summary: "Una experiencia complementaria para organizar progreso, contenido y decisiones alrededor de un universo de juego.",
    problem: "Los jugadores necesitan consultar información útil sin perder el tono visual del proyecto.",
    solution: "Interfaz atmosférica, jerarquía clara y componentes preparados para guías, inventarios y progreso.",
    role: "Frontend Developer", stack: ["React", "TypeScript", "Design Systems", "Responsive UI"], status: "Concepto funcional", category: "frontend", impact: "Diseño inmersivo con estructura reutilizable.", tone: "violet",
  },
  {
    slug: "simulador", name: "Simulador", eyebrow: "Procesos y decisiones",
    summary: "Un dashboard para modelar escenarios, comparar estados y entender resultados de forma visual.",
    problem: "Los procesos complejos son difíciles de explicar cuando no existe una vista de control clara.",
    solution: "Panel con métricas, estados y una narrativa de decisión fácil de seguir.",
    role: "Full Stack Developer", stack: ["Next.js", "TypeScript", "Charts", "APIs", "UX de datos"], status: "Iterativo", category: "fullstack", impact: "Traduce datos y reglas en decisiones legibles.", tone: "blue",
  },
  {
    slug: "invehin", name: "Invehin", eyebrow: "Gestión Java empresarial",
    summary: "Sistema de inventario y ventas construido con Java, JSP, Servlets y MySQL para flujos administrativos.",
    problem: "Gestionar ventas, productos y reportes exige una base robusta, clara y fácil de operar.",
    solution: "Aplicación web con arquitectura Java tradicional, persistencia MySQL y reportes para uso interno.",
    role: "Backend / Full Stack Developer", stack: ["Java", "JSP", "Servlets", "MySQL", "Tomcat", "JDBC"], status: "Repositorio público", category: "backend", impact: "Solución administrativa con base técnica clásica.", tone: "amber", links: { repo: "https://github.com/SebastianSierra15/Invehin" },
  },
  {
    slug: "habitta", name: "Habitta", eyebrow: "Producto habitacional",
    summary: "Experiencia digital enfocada en presentar información inmobiliaria con confianza y claridad.",
    problem: "Las decisiones habitacionales dependen de información confiable, comparación rápida y buena presentación.",
    solution: "Landing y componentes orientados a explicar valor, destacar propiedades y reducir fricción de contacto.",
    role: "Frontend Developer", stack: ["Astro", "React", "TypeScript", "SEO", "Responsive Design"], status: "En preparación", category: "frontend", impact: "Presentación comercial clara para conversión.", tone: "rose",
  },
  {
    slug: "sistema-estanco", name: "Sistema Estanco", eyebrow: "Inventario moderno",
    summary: "Aplicación full stack para operación, datos y control administrativo.",
    problem: "Centralizar operación, datos y control sin perder trazabilidad.",
    solution: "Separación frontend/backend, ORM, contenedores y base escalable.",
    role: "Full Stack Developer", stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Docker"], status: "Repositorio público", category: "fullstack", impact: "Arquitectura moderna para gestión interna.", tone: "green", links: { repo: "https://github.com/SebastianSierra15/sistema-estanco" },
  },
  {
    slug: "turismo-app", name: "Turismo App", eyebrow: "Frontend turístico",
    summary: "Frontend web para presentar rutas, experiencias y contenido turístico.",
    problem: "El turismo necesita una presentación visual y fácil de explorar.",
    solution: "Interfaz responsive con foco en descubrimiento y navegación clara.",
    role: "Frontend Developer", stack: ["Next.js", "TypeScript", "Responsive UI"], status: "Demo pública", category: "frontend", impact: "Experiencia visual publicada.", tone: "blue", links: { repo: "https://github.com/SebastianSierra15/turismo-app", demo: "https://turismo-app-five-black.vercel.app" },
  },
  {
    slug: "udlaverso", name: "Udlaverso", eyebrow: "Frontend universitario",
    summary: "Interfaz para una experiencia digital de comunidad universitaria.",
    problem: "El contenido académico necesita orden y navegación directa.",
    solution: "Frontend responsive con estructura clara para explorar contenidos.",
    role: "Frontend Developer", stack: ["Next.js", "TypeScript", "UI"], status: "Demo pública", category: "frontend", impact: "Producto frontend demostrable.", tone: "violet", links: { repo: "https://github.com/SebastianSierra15/udlaverso-frontend", demo: "https://udlaverso-frontend.vercel.app" },
  },
  {
    slug: "prometeon-mailer", name: "Prometeon Mailer", eyebrow: "Automatización",
    summary: "Herramienta para preparar y ejecutar envíos con validaciones y apoyo operativo.",
    problem: "Los procesos manuales de correo consumen tiempo y generan errores repetibles.",
    solution: "Aplicación con procesamiento, validación y flujo de envío más controlado.",
    role: "Automation Developer", stack: ["Python", "Streamlit", "Pandas", "SMTP", "Mailboxlayer"], status: "Demo pública", category: "automation", impact: "Automatización aplicada a tareas operativas.", tone: "amber", links: { repo: "https://github.com/SebastianSierra15/Prometeon-mailer", demo: "https://prometeon-mailer.streamlit.app" },
  },
];

export const stackGroups = [
  { id: "frontend", title: "Frontend", kicker: "Experiencias", items: ["React", "Next.js", "TypeScript", "Tailwind", "Accesibilidad", "SEO", "Design systems"] },
  { id: "backend", title: "Backend", kicker: "Sistemas", items: ["Node.js", "NestJS", "Java", "JSP", "Servlets", "REST APIs", "Auth"] },
  { id: "data", title: "Datos", kicker: "Persistencia", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "JDBC", "Appwrite"] },
  { id: "delivery", title: "Entrega", kicker: "Operación", items: ["Git", "Docker", "Vercel", "Cloudflare", "QA visual", "Documentación"] },
  { id: "product", title: "Producto", kicker: "Criterio", items: ["UX", "Dashboards", "Automatización", "IA aplicada", "Investigación"] },
];

export const process = [
  { number: "01", title: "Entender", detail: "Contexto, usuarios, restricciones y resultado esperado." },
  { number: "02", title: "Diseñar", detail: "Flujo, jerarquía visual, estados y copy accionable." },
  { number: "03", title: "Construir", detail: "Componentes, datos, integraciones y mejoras progresivas." },
  { number: "04", title: "Validar", detail: "Responsive, accesibilidad, SEO y comportamiento real." },
  { number: "05", title: "Entregar", detail: "Documentación, repositorio limpio y siguientes pasos." },
];

export const services = [
  "Landings y sitios con SEO",
  "Dashboards y paneles internos",
  "Aplicaciones full stack",
  "Modernización de interfaces",
  "Automatizaciones operativas",
  "Prototipos con IA aplicada",
];
