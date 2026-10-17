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
    { title: "Interfaces", emoji: "✦", description: "Sistemas visuales claros y con intención", color: "#52b788" },
    { title: "Productos", emoji: "▣", description: "Ideas que se convierten en experiencias reales", color: "#2563eb" },
    { title: "Aprendizaje", emoji: "↗", description: "Explorar nuevas herramientas y enfoques", color: "#d97706" },
  ],
  beyondTheCode: "Cuando no estoy construyendo productos, sigo explorando cómo hacer que la tecnología sea más clara, útil y agradable de usar.",
  philosophy: "El mejor software combina una base técnica sólida con una experiencia que se siente obvia para quien la usa.",
  experience: [
    { role: "Full-Stack Developer", period: "2022 - Presente", description: "Construcción de interfaces, aplicaciones web, sistemas internos y automatizaciones con foco en producto." },
    { role: "Frontend Developer", period: "Proyectos académicos y personales", description: "Diseño y desarrollo de experiencias responsive, dashboards y componentes reutilizables." },
  ],
};

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
  { name: "Next.js", level: 92, years: "3+ yrs", tag: "Fudia", projects: ["Fudia", "Simulador"], color: "#111827", category: "Web", role: "Aplicaciones React full-stack", hero: true, cell: "next", badge: "core", trend: [56, 64, 72, 81, 88, 92] },
  { name: "React", level: 90, years: "4+ yrs", tag: "Fudia", projects: ["Fudia", "Habitta"], color: "#61DAFB", category: "Web", role: "Interfaces y sistemas de componentes", hero: true, cell: "neural", badge: "core", trend: [58, 67, 76, 83, 87, 90] },
  { name: "TypeScript", level: 88, years: "3+ yrs", tag: "Simulador", projects: ["Simulador", "Habitta"], color: "#3178C6", category: "Web", role: "Código de producto mantenible", hero: true, cell: "ts", badge: "core", trend: [48, 61, 72, 80, 85, 88] },
  { name: "Java", level: 82, years: "2+ yrs", tag: "Invehin", projects: ["Invehin"], color: "#E76F00", category: "Web", role: "JSP, Servlets y backend empresarial", hero: true, cell: "chip", badge: "shipping", trend: [42, 53, 64, 70, 77, 82] },
  { name: "Node.js", level: 84, years: "3+ yrs", tag: "Sistema Estanco", projects: ["Sistema Estanco", "Fudia"], color: "#339933", category: "Infra", role: "APIs e integraciones", hero: true, cell: "rag", badge: "shipping", trend: [50, 60, 68, 75, 80, 84] },
  { name: "HTML / CSS", level: 94, years: "5+ yrs", tag: "Habitta", projects: ["Habitta", "Turismo App"], color: "#E44D26", category: "Web", role: "Interfaces responsive y accesibles", trend: [68, 75, 82, 87, 91, 94] },
  { name: "MySQL", level: 80, years: "2+ yrs", tag: "Invehin", projects: ["Invehin"], color: "#00758F", category: "Infra", role: "Modelado y persistencia relacional" },
  { name: "Appwrite", level: 78, years: "1+ yr", tag: "Fudia", projects: ["Fudia"], color: "#FD366E", category: "Infra", role: "Backend como servicio" },
  { name: "Tailwind CSS", level: 86, years: "3+ yrs", tag: "Turismo App", projects: ["Turismo App", "Habitta"], color: "#06B6D4", category: "Web", role: "Sistemas visuales rápidos" },
  { name: "Git", level: 90, years: "4+ yrs", tag: "Todos", projects: ["Fudia", "Invehin", "Habitta"], color: "#F05032", category: "DesignOps", role: "Colaboración y control de cambios" },
  { name: "Python", level: 72, years: "1+ yr", tag: "Prometeon Mailer", projects: ["Prometeon Mailer"], color: "#3776AB", category: "Infra", role: "Automatización y herramientas internas" },
  { name: "SEO", level: 78, years: "2+ yrs", tag: "Turismo App", projects: ["Turismo App", "Habitta"], color: "#52B788", category: "DesignOps", role: "Contenido técnico y descubribilidad" },
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
    id: "invehin", name: "Invehin", tagline: "Gestión de inventario y ventas", type: "Enterprise Web App", description: "Sistema administrativo para organizar productos, ventas y reportes con una base Java tradicional.",
    caseStudy: "Invehin reúne inventario, ventas y persistencia en un flujo pensado para operación interna. El proyecto permitió trabajar con Java, JSP, Servlets, JDBC y MySQL, conectando una interfaz clara con una arquitectura robusta y fácil de explicar.",
    stack: ["Java", "JSP", "Servlets", "MySQL", "Tomcat", "JDBC"], color: "#E76F00", liveUrl: "#", githubUrl: "https://github.com/SebastianSierra15/Invehin", imageUrl: projectImage,
  },
  {
    id: "habitta", name: "Habitta", tagline: "Experiencia digital para vivienda", type: "Product Website", description: "Interfaz orientada a presentar información inmobiliaria con claridad, confianza y una navegación cómoda.",
    caseStudy: "Habitta se enfoca en convertir información habitacional en una experiencia fácil de recorrer. La prioridad fue organizar contenido, jerarquía y llamadas a la acción para que cada pantalla ayude a comparar y decidir.",
    stack: ["React", "TypeScript", "Responsive UI", "SEO", "Design Systems"], color: "#E76F8C", liveUrl: "#", githubUrl: "#", imageUrl: projectImage,
  },
  {
    id: "sistema-estanco", name: "Sistema Estanco", tagline: "Operación y control administrativo", type: "Full-Stack Web App", description: "Aplicación para centralizar operación, datos y control de un negocio con una arquitectura full stack.",
    caseStudy: "El sistema separa la experiencia de usuario, la lógica de negocio y la persistencia para mantener una base evolutiva. El foco está en dar visibilidad a la operación sin sacrificar trazabilidad.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Docker"], color: "#52B788", liveUrl: "#", githubUrl: "https://github.com/SebastianSierra15/sistema-estanco", imageUrl: projectImage,
  },
  {
    id: "turismo-app", name: "Turismo App", tagline: "Descubrir rutas y experiencias", type: "Frontend Web App", description: "Frontend web para presentar rutas, experiencias y contenido turístico de forma visual y fácil de explorar.",
    caseStudy: "Turismo App trabaja la presentación del contenido como parte central del producto: navegación directa, diseño responsive y una estructura preparada para crecer hacia más rutas y experiencias.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"], color: "#2563EB", liveUrl: "https://turismo-app-five-black.vercel.app", githubUrl: "https://github.com/SebastianSierra15/turismo-app", imageUrl: projectImage, useIframe: false,
  },
  {
    id: "prometeon-mailer", name: "Prometeon Mailer", tagline: "Automatización para envíos operativos", type: "Automation Tool", description: "Herramienta para preparar, validar y ejecutar envíos con un flujo más controlado y repetible.",
    caseStudy: "Prometeon Mailer convierte un proceso manual en una herramienta operativa con validaciones, procesamiento y una interfaz directa para reducir errores repetibles.",
    stack: ["Python", "Streamlit", "Pandas", "SMTP", "Automatización"], color: "#D97706", liveUrl: "https://prometeon-mailer.streamlit.app", githubUrl: "https://github.com/SebastianSierra15/Prometeon-mailer", imageUrl: projectImage, useIframe: false,
  },
];

export const appProjects: Project[] = [
  {
    id: "fudia", name: "Fudia", tagline: "Ecosistema multiproyecto", type: "Product Ecosystem App", description: "Un conjunto de productos y superficies digitales que deben sentirse como un mismo sistema.",
    caseStudy: "Fudia reúne varios proyectos en paralelo. El reto está en sostener una experiencia coherente mientras cada producto resuelve una necesidad distinta. El trabajo combina interfaces, arquitectura modular, integración de servicios y decisiones de producto.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Appwrite", "UI Systems"], color: "#52B788", liveUrl: "#", githubUrl: "#", imageUrl: projectImage,
  },
  {
    id: "souls-in-xtinction", name: "Souls in Xtinction", tagline: "Experiencia companion para un universo de juego", type: "Game Companion App", description: "Una experiencia complementaria para organizar progreso, contenido y decisiones alrededor de un universo de juego.",
    caseStudy: "Souls in Xtinction explora cómo una interfaz puede acompañar un universo narrativo sin perder claridad. La propuesta trabaja progreso, guías y contenido con componentes preparados para evolucionar junto al juego.",
    stack: ["React", "TypeScript", "Design Systems", "Responsive UI"], color: "#8B5CF6", liveUrl: "#", githubUrl: "#", imageUrl: projectImage,
  },
  {
    id: "simulador", name: "Simulador", tagline: "Procesos y decisiones visibles", type: "Interactive Web App", description: "Dashboard para modelar escenarios, comparar estados y entender resultados de forma visual.",
    caseStudy: "Simulador convierte procesos complejos en una vista de control que permite comparar escenarios y entender resultados. El proyecto pone el foco en jerarquía de datos, estados y una narrativa de decisión fácil de seguir.",
    stack: ["Next.js", "TypeScript", "Charts", "APIs", "UX de datos"], color: "#2563EB", liveUrl: "#", githubUrl: "#", imageUrl: projectImage,
  },
];

export const allProjects: Project[] = [...appProjects, ...websiteProjects];
