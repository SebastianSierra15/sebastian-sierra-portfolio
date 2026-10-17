"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Download, Github, Linkedin, Mail, Moon, MousePointer2, Play, Sun, X } from "lucide-react";
import { profile, process, projects, proofPoints, services, stackGroups, type Project } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { useTheme, type Theme } from "@/components/theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const label = theme === "system" ? "Auto" : theme === "light" ? "Claro" : "Oscuro";
  return <button className="theme-toggle" onClick={() => setTheme(nextTheme)} aria-label={`Tema actual: ${label}. Cambiar tema`} type="button">
    {theme === "dark" ? <Moon size={15} /> : theme === "light" ? <Sun size={15} /> : <span className="theme-system-dot" />}<span>{label}</span>
  </button>;
}

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-avatar"><Image src={profile.photo} alt="" width={42} height={42} /></span><span><strong>{profile.shortName}</strong><small>FULL STACK · FRONTEND</small></span></a>;
}

function Header() {
  const links = [["Proyectos", "proyectos"], ["Stack", "stack"], ["Laboratorio", "laboratorio"], ["Proceso", "proceso"]];
  return <header className="site-header"><Brand /><nav className="site-nav" aria-label="Navegación principal">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="header-actions"><ThemeToggle /><a className="header-cv" href={profile.cv} download onClick={() => trackEvent({ name: "cv_download" })}>Ver CV <Download size={15} /></a></div></header>;
}

function Hero() {
  return <section id="inicio" className="hero section-shell"><div className="hero-copy reveal"><p className="eyebrow">DESARROLLO · DISEÑO · PRODUCTO</p><h1>Construyo interfaces claras <em>y productos completos.</em></h1><p className="hero-lede">Soy Sebastián Sierra, desarrollador full stack. Diseño y construyo aplicaciones web modernas, escalables y centradas en las personas, desde la idea hasta el producto.</p><div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver mis proyectos <ArrowDownRight size={17} /></a><a className="button button-secondary" href={profile.cv} download onClick={() => trackEvent({ name: "cv_download" })}>Descargar CV <Download size={16} /></a></div><div className="hero-stats" aria-label="Resumen de experiencia"><div><strong>+3</strong><span>Años construyendo</span></div><div><strong>10+</strong><span>Proyectos y sistemas</span></div><div><strong>100%</strong><span>Compromiso con el detalle</span></div></div></div><div className="hero-visual reveal reveal-delay" aria-label="Perfil y forma de trabajo"><div className="hero-grid" /><div className="availability"><span /> Abierto a oportunidades <ArrowUpRight size={14} /></div><div className="portrait-frame"><Image src={profile.photo} alt="Sebastián Sierra" width={640} height={820} priority /></div><div className="plan-card"><span className="plan-label">ENFOQUE</span><strong>Producto que<br />se entiende.</strong><div className="plan-line"><i /><span /><span /><span /></div><small>idea → interfaz → sistema</small></div><div className="code-card"><span>{`{ producto: "útil" }`}</span><b>01</b><p>Diseño + código<br />+ personas</p><i /></div><div className="impact-card"><strong>▥</strong><span>Interfaces que inspiran.<br />Productos que funcionan.</span><ArrowUpRight size={14} /></div></div><div className="capability-strip reveal">{proofPoints.map((point, index) => <div className="capability" key={point.value}><span className="capability-icon">{["⌘", "◇", "◎", "▥"][index]}</span><span><strong>{point.value}</strong><small>{point.label}</small><em>{point.detail}</em></span></div>)}</div></section>;
}

function SectionHeading({ kicker, title, accent, body }: { kicker: string; title: string; accent?: string; body?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{kicker}</p><h2>{title} {accent && <em>{accent}</em>}</h2></div>{body && <p>{body}</p>}</div>;
}

function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual tone-${project.tone}`}><div className="visual-window"><div className="window-bar"><span /><span /><span /><small>{project.name.toLowerCase().replaceAll(" ", "-")}.app</small></div><div className="visual-body"><aside><b /><i /><i /><i /><i /></aside><main><div className="visual-title"><strong>{project.name}</strong><span>•••</span></div><div className="visual-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="visual-row"><span /><span /><span /></div><div className="visual-row short"><span /><span /><span /></div></main></div></div><div className="project-visual-orbit">{project.category.toUpperCase()}</div></div>;
}

function ProjectsSection({ onOpen }: { onOpen: (project: Project) => void }) {
  const featured = projects.slice(0, 5);
  return <section id="proyectos" className="section-shell projects-section"><SectionHeading kicker="PROYECTOS DESTACADOS" title="Trabajo que genera" accent="impacto." body="Una selección de proyectos donde combino diseño, desarrollo y visión de producto." /><div className="projects-grid">{featured.map((project, index) => <article className={`project-card project-card-${index + 1} reveal`} key={project.slug}><ProjectVisual project={project} /><div className="project-content"><div className="project-meta"><span>{String(index + 1).padStart(2, "0")} / 05</span><span>{project.status}</span></div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><button className="text-button" type="button" onClick={() => { onOpen(project); void trackEvent({ name: "project_view", projectSlug: project.slug }); }}>Ver caso de estudio <ChevronRight size={16} /></button></div></article>)}</div></section>;
}

function StackSection() {
  const [active, setActive] = useState(stackGroups[0].id);
  const activeGroup = stackGroups.find(group => group.id === active) ?? stackGroups[0];
  return <section id="stack" className="section-shell stack-section"><SectionHeading kicker="MI STACK" title="Tecnologías para construir" accent="sin límites." body="No es una lista infinita: es la forma en que conecto experiencia de usuario, backend, datos y entrega." /><div className="stack-explorer"><div className="stack-tabs" role="tablist" aria-label="Áreas técnicas">{stackGroups.map(group => <button key={group.id} className={active === group.id ? "active" : ""} type="button" role="tab" aria-selected={active === group.id} onClick={() => setActive(group.id)}><span>{group.kicker}</span><strong>{group.title}</strong></button>)}</div><div className="stack-panel"><div className="stack-panel-head"><span>0{stackGroups.findIndex(group => group.id === active) + 1}</span><div><p className="eyebrow">ÁREA DE TRABAJO</p><h3>{activeGroup.title}</h3></div><MousePointer2 size={20} /></div><div className="skill-cloud">{activeGroup.items.map((item, index) => <span key={item} style={{ "--delay": `${index * 70}ms` } as CSSProperties}><Check size={14} />{item}</span>)}</div><div className="stack-note"><span>▥</span><p>La herramienta importa menos que la decisión: elegir la tecnología que mantiene el producto claro, rápido y sostenible.</p></div></div></div></section>;
}

function InterfaceLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let raf = 0;
    const resize = () => { const ratio = window.devicePixelRatio || 1; const rect = canvas.getBoundingClientRect(); canvas.width = rect.width * ratio; canvas.height = rect.height * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); };
    const draw = () => { const rect = canvas.getBoundingClientRect(); const w = rect.width; const h = rect.height; context.clearRect(0, 0, w, h); context.fillStyle = "rgba(114,230,209,.035)"; context.fillRect(0, 0, w, h); const points = Array.from({ length: 22 }, (_, i) => ({ x: (w / 22) * i + Math.sin(frame * 0.012 + i) * 16, y: h / 2 + Math.cos(frame * 0.017 + i * 0.8) * (h * 0.28) })); points.forEach((point, i) => { const next = points[(i + 1) % points.length]; context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(next.x, next.y); context.strokeStyle = `rgba(114,230,209,${0.12 + (i % 3) * 0.06})`; context.stroke(); context.beginPath(); context.arc(point.x, point.y, 2 + (i % 3), 0, Math.PI * 2); context.fillStyle = i % 5 === 0 ? "#FFC66D" : "#72E6D1"; context.fill(); }); frame += 1; raf = window.requestAnimationFrame(draw); };
    resize(); draw(); window.addEventListener("resize", resize); return () => { window.cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  const experiments = [{ title: "Signal garden", detail: "Una red de puntos que responde al tiempo y a la atención." }, { title: "Data pulse", detail: "Visualización mínima para pensar en estados y movimiento." }, { title: "Interface motion", detail: "Pequeños sistemas que hacen visible lo que normalmente permanece oculto." }];
  return <section id="laboratorio" className="section-shell lab-section"><SectionHeading kicker="LABORATORIO DE INTERFACES" title="También construyo" accent="para explorar." body="Un espacio pequeño para probar ideas de interacción, datos y movimiento sin perder el hilo del producto." /><div className="lab-layout"><div className="lab-canvas-wrap"><canvas ref={canvasRef} aria-label="Visualización animada de nodos y conexiones" /><div className="lab-canvas-label"><span>CANVAS / 001</span><strong>{experiments[active].title}</strong></div></div><div className="lab-list">{experiments.map((item, index) => <button className={active === index ? "active" : ""} key={item.title} type="button" onClick={() => setActive(index)}><span>0{index + 1}</span><strong>{item.title}</strong><p>{item.detail}</p><ChevronRight size={18} /></button>)}<div className="lab-foot"><Play size={14} /> El movimiento debe aclarar la experiencia, no competir con ella.</div></div></div></section>;
}

function ProcessSection() {
  const [active, setActive] = useState(2);
  return <section id="proceso" className="section-shell process-section"><SectionHeading kicker="PROCESO DE TRABAJO" title="De una idea borrosa" accent="a una entrega clara." body="Trabajo en ciclos cortos, con decisiones visibles y espacio para ajustar lo que realmente importa." /><div className="process-track">{process.map((item, index) => <button className={active === index ? "active" : ""} key={item.number} type="button" onClick={() => setActive(index)}><span className="process-number">{item.number}</span><span className="process-dot" /><strong>{item.title}</strong>{active === index && <p>{item.detail}</p>}</button>)}</div></section>;
}

function ContactSection() {
  return <section id="contacto" className="contact-section"><div className="contact-inner section-shell"><div><p className="eyebrow">¿TIENES UN PRODUCTO EN MENTE?</p><h2>Hagamos que la idea<br /><em>funcione de verdad.</em></h2><p>Estoy disponible para colaborar en productos web, interfaces frontend y sistemas full stack con intención.</p></div><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`} onClick={() => trackEvent({ name: "contact_click", metadata: { channel: "email" } })}>Escribirme <Mail size={16} /></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => trackEvent({ name: "external_link_click", metadata: { destination: "linkedin" } })}>LinkedIn <Linkedin size={16} /></a><a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer" onClick={() => trackEvent({ name: "external_link_click", metadata: { destination: "github" } })}>GitHub <Github size={16} /></a></div></div></section>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; }; }, [onClose]);
  return <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.currentTarget === event.target) onClose(); }}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="icon-button modal-close" type="button" onClick={onClose} aria-label="Cerrar caso"><X size={20} /></button><ProjectVisual project={project} /><div className="modal-content"><p className="eyebrow">{project.eyebrow}</p><h2 id="project-modal-title">{project.name}</h2><p className="modal-summary">{project.summary}</p><div className="modal-columns"><div><span className="modal-label">PROBLEMA</span><p>{project.problem}</p></div><div><span className="modal-label">SOLUCIÓN</span><p>{project.solution}</p></div></div><div className="modal-footer"><span>{project.role}</span><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>{project.links?.repo && <a className="text-button" href={project.links.repo} target="_blank" rel="noreferrer" onClick={() => trackEvent({ name: "project_cta", projectSlug: project.slug, metadata: { destination: "repo" } })}>Ver código <Github size={15} /></a>}{project.links?.demo && <a className="text-button" href={project.links.demo} target="_blank" rel="noreferrer" onClick={() => trackEvent({ name: "project_cta", projectSlug: project.slug, metadata: { destination: "demo" } })}>Ver demo <ArrowUpRight size={15} /></a>}</div></div></div></div>;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => { void trackEvent({ name: "page_view" }); const nodes = document.querySelectorAll<HTMLElement>(".reveal"); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.1 }); nodes.forEach(node => observer.observe(node)); return () => observer.disconnect(); }, []);
  return <><Header /><main><Hero /><ProjectsSection onOpen={setSelectedProject} /><StackSection /><InterfaceLab /><section className="section-shell services-section"><SectionHeading kicker="QUÉ PUEDO CONSTRUIR" title="Tecnología que se vuelve" accent="experiencia." /><div className="services-grid">{services.map((service, index) => <div className="service-item" key={service}><span>0{index + 1}</span><strong>{service}</strong><ArrowUpRight size={17} /></div>)}</div></section><ProcessSection /><ContactSection /></main><footer className="site-footer section-shell"><Brand /><span>Diseñado y construido con intención.</span><a href="#inicio">Volver arriba <ArrowUpRight size={14} /></a></footer>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</>;
}
