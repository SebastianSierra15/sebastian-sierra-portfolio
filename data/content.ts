export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  description: string;
  caseStudy: string;
  stack: string[];
  color: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  useIframe?: boolean;
  logoSrc?: string;
}

export interface ExperienceEntry {
  id: string;
  code: string;
  company: string;
  period: string;
  start: number;
  end: number;
  status: "current" | "completed";
  context: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: string;
  url?: string;
  links?: { label: string; url: string }[];
  logoSrc?: string;
}

export const aboutData = {
  name: "Sebastian Sierra",
  title: "Full-Stack Developer con foco en Frontend",
  location: "Colombia · Remoto",
  githubUrl: "https://github.com/SebastianSierra15",
  email: "sebsirra13@gmail.com",
  university: "Desarrollo de productos digitales",
  bio: "Construyo interfaces modernas y productos completos con React, Next.js, TypeScript, Java, Node y bases de datos.",
  bioExtended: "Me interesa que el software se entienda, responda rápido y resuelva problemas reales. Combino criterio visual, arquitectura full-stack y una curiosidad constante por las herramientas que hacen mejor el proceso de construir.",
  techArsenal: [
    { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "TypeScript", icon: "🔷" },
    { name: "Java", icon: "☕" }, { name: "Node.js", icon: "⬢" }, { name: "MySQL", icon: "◈" },
  ],
  interests: [
    { title: "Interfaces", emoji: "✦", description: "Sistemas visuales claros y con intención", color: "#fb923c" },
    { title: "Productos", emoji: "▣", description: "Ideas que se convierten en experiencias reales", color: "#f97316" },
    { title: "Aprendizaje", emoji: "↗", description: "Explorar nuevas herramientas y enfoques", color: "#c2410c" },
  ],
  beyondTheCode: "Cuando no estoy construyendo productos, sigo explorando cómo hacer que la tecnología sea más clara, útil y agradable de usar.",
  philosophy: "El mejor software combina una base técnica sólida con una experiencia que se siente obvia para quien la usa.",
  experience: [
    { role: "Full-Stack Developer", period: "Diciembre 2025 - Actualidad", description: "Desarrollo de Souls In Xtinction, su simulador web, herramientas internas y automatizaciones técnicas." },
    { role: "Full-Stack Developer", period: "2025 - Actualidad", description: "Colaboración en el diseño y desarrollo de PrometeonDev junto con el equipo." },
    { role: "Full-Stack Developer Freelance", period: "2024 - 2026", description: "Construcción de Habitta y Fudia, con plataformas web, app mobile, paneles administrativos e integraciones con IA." },
  ],
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "habitta",
    code: "E-01",
    company: "Habitta",
    period: "Septiembre 2024 - Abril 2025",
    start: 2024.7,
    end: 2025.35,
    status: "completed",
    context: "Prestación de servicios",
    role: "Full stack developer freelance",
    summary: "Desarrollo de una plataforma inmobiliaria con herramientas para explorar propiedades, gestionar información y sostener una operación digital clara.",
    highlights: ["Autenticación y gestión administrativa", "Filtros, mapas y carga de imágenes", "Integración con AWS S3"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "AWS S3"],
    accent: "#ec4899",
    url: "https://habitta.prometeondev.com",
  },
  {
    id: "prometeondev",
    code: "E-02",
    company: "PrometeonDev",
    period: "2025 - Actualidad",
    start: 2025,
    end: 2026.8,
    status: "current",
    context: "Emprendimiento colaborativo",
    role: "Diseño y desarrollo frontend / full stack",
    summary: "Participo en gran parte del diseño y desarrollo de PrometeonDev, la empresa y equipo con el que construimos productos digitales en conjunto.",
    highlights: ["Diseño de interfaces y dirección visual", "Desarrollo del sitio y productos web", "Colaboración técnica con el equipo"],
    stack: ["Next.js", "React", "TypeScript", "UI Systems", "SEO"],
    accent: "#f97316",
    url: "https://prometeondev.com",
    logoSrc: "/assets/experience/prometeondev.ico",
  },
  {
    id: "souls-in-xtinction",
    code: "E-04",
    company: "Souls In Xtinction",
    period: "Diciembre 2025 - Actualidad",
    start: 2025.95,
    end: 2026.8,
    status: "current",
    context: "Prestación de servicios",
    role: "Full stack developer",
    summary: "Sigo construyendo la plataforma principal, el simulador y herramientas internas para un ecosistema digital de cartas, torneos, productos, noticias y perfiles públicos.",
    highlights: ["Plataforma principal y perfiles públicos", "Simulador web y herramientas internas", "Despliegues VPS, monitoreo y automatización"],
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "VPS"],
    accent: "#8b5cf6",
    url: "https://soulsinxtinction.com",
    links: [
      { label: "Souls In Xtinction", url: "https://soulsinxtinction.com" },
      { label: "Simulador", url: "https://simulador.soulsinxtinction.com" },
    ],
    logoSrc: "/assets/experience/soulsinxtinction.ico",
  },
  {
    id: "fudia",
    code: "E-03",
    company: "Fudia",
    period: "Febrero 2026 - Septiembre 2026",
    start: 2026.1,
    end: 2026.72,
    status: "completed",
    context: "Prestación de servicios",
    role: "Full stack developer freelance",
    summary: "Desarrollo de una aplicación de nutrición con IA, junto con su landing, panel administrativo y portal web.",
    highlights: ["App mobile con React Native y Expo", "Seguimiento y análisis nutricional", "OpenAI API, Sentry y Appwrite"],
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "OpenAI API"],
    accent: "#52b788",
    url: "https://fudia.app",
    logoSrc: "/assets/experience/fudia.png",
  },
];

export type SkillCategory = "Web" | "AI & GenAI" | "Mobile" | "Infra" | "DesignOps";
export type SkillCell = "rag" | "phone" | "next" | "neural" | "ts" | "chip";
export type SkillBadge = "new" | "core" | "shipping";

export interface Skill {
  name: string;
  level: number;
  years: string;
  tag: string;
  projects?: string[];
  color: string;
  category: SkillCategory;
  role: string;
  hero?: boolean;
  cell?: SkillCell;
  badge?: SkillBadge;
  trend?: number[];
}

export const SKILLS: Skill[] = [
  { name: "Next.js", level: 92, years: "3+ años", tag: "Fudia", projects: ["Fudia", "Simulador"], color: "#111827", category: "Web", role: "Aplicaciones React full-stack", hero: true, cell: "next", badge: "core", trend: [56, 64, 72, 81, 88, 92] },
  { name: "React", level: 90, years: "4+ años", tag: "Fudia", projects: ["Fudia", "Habitta"], color: "#61DAFB", category: "Web", role: "Interfaces y sistemas de componentes", hero: true, cell: "neural", badge: "core", trend: [58, 67, 76, 83, 87, 90] },
  { name: "TypeScript", level: 88, years: "3+ años", tag: "Simulador", projects: ["Simulador", "Habitta"], color: "#3178C6", category: "Web", role: "Código de producto mantenible", hero: true, cell: "ts", badge: "core", trend: [48, 61, 72, 80, 85, 88] },
  { name: "Java", level: 82, years: "2+ años", tag: "Invehin", projects: ["Invehin"], color: "#E76F00", category: "Web", role: "JSP, Servlets y backend empresarial", hero: true, cell: "chip", badge: "shipping", trend: [42, 53, 64, 70, 77, 82] },
  { name: "Node.js", level: 84, years: "3+ años", tag: "Sistema Estanco", projects: ["Sistema Estanco", "Fudia"], color: "#339933", category: "Infra", role: "APIs e integraciones", hero: true, cell: "rag", badge: "shipping", trend: [50, 60, 68, 75, 80, 84] },
  { name: "HTML / CSS", level: 94, years: "5+ años", tag: "Habitta", projects: ["Habitta", "AmaTuris"], color: "#E44D26", category: "Web", role: "Interfaces responsive y accesibles", trend: [68, 75, 82, 87, 91, 94] },
  { name: "MySQL", level: 80, years: "2+ años", tag: "Invehin", projects: ["Invehin"], color: "#00758F", category: "Infra", role: "Modelado y persistencia relacional" },
  { name: "Appwrite", level: 78, years: "1+ año", tag: "Fudia", projects: ["Fudia"], color: "#FD366E", category: "Infra", role: "Backend como servicio" },
  { name: "Tailwind CSS", level: 86, years: "3+ años", tag: "AmaTuris", projects: ["AmaTuris", "Habitta"], color: "#06B6D4", category: "Web", role: "Sistemas visuales rápidos" },
  { name: "Git", level: 90, years: "4+ años", tag: "Todos", projects: ["Fudia", "Invehin", "Habitta"], color: "#F05032", category: "DesignOps", role: "Colaboración y control de cambios" },
  { name: "Python", level: 72, years: "1+ año", tag: "Automatización", projects: [], color: "#3776AB", category: "Infra", role: "Automatización y herramientas internas" },
  { name: "SEO", level: 78, years: "2+ años", tag: "AmaTuris", projects: ["AmaTuris", "Habitta"], color: "#52B788", category: "DesignOps", role: "Contenido técnico y descubribilidad" },
  { name: "Flutter", level: 68, years: "1+ año", tag: "Fudia", projects: ["Fudia"], color: "#027DFD", category: "Mobile", role: "Interfaces móviles multiplataforma" },
  { name: "Dart", level: 64, years: "1+ año", tag: "Fudia", projects: ["Fudia"], color: "#0175C2", category: "Mobile", role: "Lógica de aplicaciones móviles" },
  { name: "React Native", level: 80, years: "1+ año", tag: "Fudia", projects: ["Fudia"], color: "#61DAFB", category: "Mobile", role: "Aplicaciones móviles multiplataforma" },
  { name: "Expo", level: 76, years: "1+ año", tag: "Fudia", projects: ["Fudia"], color: "#111827", category: "Mobile", role: "Tooling y distribución móvil" },
  { name: "OpenAI", level: 68, years: "1+ año", tag: "IA aplicada", projects: ["Fudia", "Simulador"], color: "#10A37F", category: "AI & GenAI", role: "Integraciones y experiencias con IA" },
  { name: "OpenClow", level: 58, years: "En práctica", tag: "IA aplicada", projects: [], color: "#7C3AED", category: "AI & GenAI", role: "Flujos y agentes con IA" },
  { name: "RAG", level: 62, years: "En práctica", tag: "IA aplicada", projects: ["Fudia"], color: "#7C3AED", category: "AI & GenAI", role: "Búsqueda contextual y conocimiento" },
  { name: "Gemini", level: 62, years: "En práctica", tag: "IA aplicada", projects: [], color: "#4285F4", category: "AI & GenAI", role: "Modelos multimodales y asistentes" },
  { name: "Groq", level: 62, years: "En práctica", tag: "Portfolio", projects: ["Portfolio"], color: "#F97316", category: "AI & GenAI", role: "Inferencia rápida para experiencias conversacionales" },
  { name: "Vite", level: 78, years: "2+ años", tag: "UdlaVerso", projects: ["UdlaVerso", "Simulador"], color: "#646CFF", category: "Web", role: "Tooling para aplicaciones frontend" },
  { name: "FastAPI", level: 70, years: "En práctica", tag: "AmaTuris", projects: ["AmaTuris"], color: "#009688", category: "Infra", role: "APIs backend en Python" },
  { name: "PostgreSQL", level: 68, years: "En práctica", tag: "AmaTuris", projects: ["AmaTuris"], color: "#4169E1", category: "Infra", role: "Persistencia relacional" },
  { name: "Fuseki", level: 58, years: "En práctica", tag: "AmaTuris", projects: ["AmaTuris"], color: "#7C3AED", category: "Infra", role: "Datos semánticos y consultas RDF" },
  { name: "Zod", level: 62, years: "En práctica", tag: "AmaTuris", projects: ["AmaTuris"], color: "#3068B7", category: "Web", role: "Validación de datos y contratos" },
  { name: "Spring Boot", level: 70, years: "2+ años", tag: "UdlaVerso", projects: ["UdlaVerso"], color: "#6DB33F", category: "Infra", role: "APIs backend empresariales" },
  { name: "AWS S3", level: 70, years: "En práctica", tag: "Habitta", projects: ["Habitta"], color: "#FF9900", category: "Infra", role: "Almacenamiento de imágenes" },
  { name: "Prisma", level: 72, years: "1+ año", tag: "Souls In Xtinction", projects: ["Souls In Xtinction"], color: "#2D3748", category: "Infra", role: "Acceso tipado a datos" },
  { name: "Colyseus", level: 64, years: "En práctica", tag: "Simulador", projects: ["Simulador"], color: "#2563EB", category: "Infra", role: "Estado sincronizado en tiempo real" },
  { name: "MongoDB", level: 64, years: "En práctica", tag: "Simulador", projects: ["Simulador"], color: "#47A248", category: "Infra", role: "Persistencia documental" },
  { name: "Sentry", level: 58, years: "En práctica", tag: "Fudia", projects: ["Fudia"], color: "#362D59", category: "DesignOps", role: "Monitoreo y diagnóstico de errores" },
  { name: "Docker", level: 68, years: "En práctica", tag: "Portfolio", projects: ["Portfolio"], color: "#2496ED", category: "Infra", role: "Despliegues reproducibles" },
];

export const MARQUEE_TECH = ["React", "Next.js", "TypeScript", "Java", "Node.js", "MySQL", "Appwrite", "Tailwind CSS", "Git", "Python", "JSP", "Servlets", "REST APIs", "Responsive UI", "SEO", "Design Systems", "Docker", "Figma", "Supabase", "Cloudflare"];

export const canvasConfig = {
  home: { folderPath: "/Frames", frameCount: 300 },
  websites: { folderPath: "/Frames", frameCount: 300 },
  apps: { folderPath: "/Frames", frameCount: 300 },
};

const projectImage = "/assets/project-placeholder.svg";

export const websiteProjects: Project[] = [
  {
    id: "habitta", name: "Habitta", tagline: "Plataforma digital para vivienda", type: "Product Website", description: "Plataforma inmobiliaria para explorar y administrar propiedades y proyectos, con filtros, mapas, galerías e información de contacto.",
    caseStudy: "Habitta conecta la experiencia pública de exploración inmobiliaria con herramientas privadas de gestión. El proyecto contempla autenticación, administración de propiedades y proyectos, filtros de búsqueda, ubicación en mapas, carga de imágenes a AWS S3 y formularios para convertir el interés en solicitudes de contacto.",
    stack: ["Next.js", "React", "TypeScript", "MySQL", "AWS S3"], color: "#E76F8C", liveUrl: "https://habitta.prometeondev.com", githubUrl: "#", imageUrl: projectImage,
  },
  {
    id: "prometeondev", name: "PrometeonDev", tagline: "Diseño y desarrollo de productos digitales", type: "Sitio web colaborativo", description: "Sitio web y ecosistema digital de la empresa donde colaboro, con una identidad visual y una experiencia que ayudé a diseñar y desarrollar.",
    caseStudy: "PrometeonDev es un trabajo colaborativo con amigos y una parte importante de mi experiencia profesional. Mi participación incluye decisiones de diseño, construcción de interfaces y desarrollo frontend para comunicar mejor los servicios y productos del equipo.",
    stack: ["Next.js", "React", "TypeScript", "UI Systems", "SEO"], color: "#f97316", liveUrl: "https://prometeondev.com", githubUrl: "#", imageUrl: projectImage, useIframe: false,
  },
  {
    id: "amaturis", name: "AmaTuris", tagline: "Turismo sostenible en Caquetá", type: "Proyecto universitario educativo", description: "Plataforma universitaria para explorar destinos, planes y experiencias de turismo sostenible en Caquetá.",
    caseStudy: "AmaTuris es un proyecto universitario de carácter educativo enfocado en conectar viajeros con destinos, planes y servicios turísticos de Caquetá. La plataforma permite explorar sitios y experiencias, consultar actividades e itinerarios, registrarse, guardar favoritos y crear o gestionar reservas. También contempla perfiles para turistas, agencias, prestadores, operadores y administración, con mapas, paneles operativos y un chatbot. Su arquitectura combina Next.js, TypeScript, FastAPI, PostgreSQL y Fuseki para unir la operación de reservas con un modelo semántico de destinos y experiencias.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Fuseki", "Zod"], color: "#2563EB", liveUrl: "https://amaturis.prometeondev.com", githubUrl: "https://github.com/SebastianSierra15/turismo-app", imageUrl: projectImage,
  },
  {
    id: "udlaverso", name: "UdlaVerso", tagline: "Innovación educativa con realidad aumentada", type: "Proyecto universitario educativo", description: "Portal académico de la Universidad de la Amazonia para publicar y explorar proyectos de realidad aumentada e innovación educativa.",
    caseStudy: "UdlaVerso es un portal universitario pensado para acercar la realidad aumentada y las experiencias inmersivas a la comunidad académica. Reúne un catálogo de proyectos, noticias, categorías, preguntas frecuentes y reseñas, junto con autenticación y un panel administrativo para gestionar contenidos. El trabajo conecta una SPA en React y TypeScript con una API en Spring Boot, seguridad con JWT y persistencia en MySQL, dejando una base para publicar y consultar proyectos educativos de la Universidad de la Amazonia.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Spring Boot", "MySQL"], color: "#2D6A4F", liveUrl: "https://udlaverso.prometeondev.com", githubUrl: "https://github.com/SebastianSierra15/udlaverso-frontend", imageUrl: projectImage,
  },
];

export const appProjects: Project[] = [
  {
    id: "fudia", name: "Fudia", tagline: "Seguimiento nutricional con IA", type: "App móvil", description: "Aplicación para registrar comidas por foto, texto o voz, analizar su información nutricional y seguir metas, historial y progreso diario.",
    caseStudy: "Fudia combina una app móvil con landing, portal web y superficies administrativas sobre un mismo sistema. El flujo permite capturar una comida por imagen, texto o audio, recibir un análisis nutricional asistido por IA, registrar el resultado y consultar metas, historial y métricas desde un dashboard. La arquitectura integra React Native, Expo, Next.js, Appwrite y funciones serverless.",
    stack: ["React Native", "Expo", "Next.js", "Appwrite", "OpenAI API", "UI Systems"], color: "#52B788", liveUrl: "https://fudia.app", githubUrl: "#", imageUrl: projectImage, logoSrc: "/assets/experience/fudia.png",
  },
  {
    id: "souls-in-xtinction", name: "Souls in Xtinction", tagline: "Plataforma digital para un TCG colombiano", type: "Juego de cartas coleccionables", description: "Plataforma para descubrir cartas y productos, construir mazos, consultar reglas, seguir torneos, noticias, perfiles y la comunidad del juego.",
    caseStudy: "Souls in Xtinction reúne el sitio público y las herramientas que sostienen el ecosistema del juego: catálogo y bóveda de cartas, creación y laboratorio de mazos, guía para aprender a jugar, torneos, noticias, tiendas, productos, perfiles de jugadores y pase de batalla. El trabajo consiste en convertir un universo de cartas y contenido en una experiencia navegable para jugadores y administradores.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "NextAuth"], color: "#8B5CF6", liveUrl: "https://soulsinxtinction.com", githubUrl: "#", imageUrl: projectImage,
  },
  {
    id: "simulador", name: "Simulador", tagline: "Mesa web para partidas del TCG", type: "Simulador web del juego", description: "Mesa digital para jugar partidas de Souls In Xtinction en salas en tiempo real, mover cartas entre zonas, consultar mazos y conversar durante la partida.",
    caseStudy: "El simulador lleva la mesa de Souls In Xtinction al navegador. Permite crear o unirse a salas, seleccionar mazos, mover cartas entre mano, mazos, campo, cementerio, limbo y otras zonas, mantener el estado sincronizado entre jugadores y usar chat de sala. El servidor valida las acciones principales y protege la información privada de cada jugador mediante React, TypeScript, Colyseus y contratos compartidos.",
    stack: ["React", "TypeScript", "Vite", "Colyseus", "MongoDB"], color: "#2563EB", liveUrl: "https://simulador.soulsinxtinction.com", githubUrl: "#", imageUrl: projectImage, useIframe: false, logoSrc: "/assets/experience/soulsinxtinction.ico",
  },
];

export const allProjects: Project[] = [...appProjects, ...websiteProjects];
