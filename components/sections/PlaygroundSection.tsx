"use client";

import { useState } from "react";

type EvidenceId = "interfaces" | "sistemas" | "flujos";

type Evidence = {
    id: EvidenceId;
    kicker: string;
    title: string;
    description: string;
    projects: string[];
    steps: string[];
    accent: string;
};

const EVIDENCE: Evidence[] = [
    {
        id: "interfaces",
        kicker: "Frontend",
        title: "Interfaces que se entienden.",
        description: "Jerarquía visual, responsive y componentes reutilizables para que cada pantalla ayude a avanzar.",
        projects: ["Fudia", "Habitta", "Turismo App"],
        steps: ["Estructura", "Componentes", "Responsive"],
        accent: "#f97316",
    },
    {
        id: "sistemas",
        kicker: "Full stack",
        title: "Datos que cuentan una historia.",
        description: "Conecto la interfaz con APIs, lógica de negocio y persistencia para que las decisiones sean visibles.",
        projects: ["Simulador", "Invehin", "Sistema Estanco"],
        steps: ["Interfaz", "API", "Persistencia"],
        accent: "#2563eb",
    },
    {
        id: "flujos",
        kicker: "Flujos y datos",
        title: "Menos fricción en el trabajo.",
        description: "Identifico tareas repetibles y las convierto en procesos claros, medibles y fáciles de mantener.",
        projects: ["Fudia", "Invehin", "Sistema Estanco"],
        steps: ["Entrada", "Regla", "Resultado"],
        accent: "#16a34a",
    },
];

function EvidenceDiagram({ evidence }: { evidence: Evidence }) {
    return (
        <div className="evidence-diagram" style={{ "--evidence-accent": evidence.accent } as React.CSSProperties}>
            <div className="evidence-diagram-grid" aria-hidden="true" />
            <div className="evidence-route" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
            <div className="evidence-route-labels">
                {evidence.steps.map((step, index) => (
                    <div key={step}>
                        <small>0{index + 1}</small>
                        <strong>{step}</strong>
                    </div>
                ))}
            </div>
            <div className="evidence-signal" aria-hidden="true">
                <span>{evidence.id === "interfaces" ? "UI" : evidence.id === "sistemas" ? "API" : "FLOW"}</span>
            </div>
        </div>
    );
}

export default function PlaygroundSection() {
    const [activeId, setActiveId] = useState<EvidenceId>("interfaces");
    const activeEvidence = EVIDENCE.find((item) => item.id === activeId) ?? EVIDENCE[0];

    return (
        <section id="playground" className="evidence-section" aria-labelledby="evidence-title">
            <div className="evidence-inner">
                <div className="evidence-heading">
                    <span className="evidence-kicker">— Cómo trabajo</span>
                    <h2 id="evidence-title">Decisiones que sí aparecen en mis proyectos.</h2>
                    <p>
                        Una vista rápida de los problemas que suelo resolver y de la forma en que conecto diseño,
                        código y producto.
                    </p>
                </div>

                <div className="evidence-layout">
                    <div className="evidence-tabs" role="tablist" aria-label="Áreas de trabajo">
                        {EVIDENCE.map((evidence) => (
                            <button
                                key={evidence.id}
                                type="button"
                                role="tab"
                                aria-selected={activeId === evidence.id}
                                className={activeId === evidence.id ? "is-active" : ""}
                                style={{ "--evidence-accent": evidence.accent } as React.CSSProperties}
                                onClick={() => setActiveId(evidence.id)}
                            >
                                <span>{evidence.kicker}</span>
                                <strong>{evidence.title}</strong>
                            </button>
                        ))}
                    </div>

                    <article key={activeEvidence.id} className="evidence-panel" role="tabpanel">
                        <EvidenceDiagram evidence={activeEvidence} />
                        <div className="evidence-panel-copy">
                            <span className="evidence-panel-kicker">{activeEvidence.kicker}</span>
                            <h3>{activeEvidence.title}</h3>
                            <p>{activeEvidence.description}</p>
                            <div className="evidence-projects" aria-label="Proyectos relacionados">
                                {activeEvidence.projects.map((project) => <span key={project}>{project}</span>)}
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <style jsx global>{`
                .evidence-section {
                    position: relative;
                    overflow: hidden;
                    padding: 148px 24px;
                    background: #f7f7f8;
                    color: #111827;
                    font-family: var(--font-inter), Inter, sans-serif;
                }

                .evidence-inner {
                    width: min(1120px, 100%);
                    margin: 0 auto;
                }

                .evidence-heading {
                    max-width: 760px;
                    margin-bottom: 54px;
                }

                .evidence-kicker,
                .evidence-panel-kicker {
                    display: block;
                    margin-bottom: 18px;
                    color: #ea580c;
                    font-size: 12px;
                    font-weight: 850;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .evidence-heading h2 {
                    max-width: 720px;
                    margin: 0 0 18px;
                    font-family: var(--font-display), sans-serif;
                    font-size: clamp(38px, 5vw, 68px);
                    line-height: 0.98;
                    letter-spacing: -0.055em;
                }

                .evidence-heading p {
                    max-width: 610px;
                    margin: 0;
                    color: #68766f;
                    font-size: 18px;
                    line-height: 1.6;
                }

                .evidence-layout {
                    display: grid;
                    grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
                    gap: 18px;
                    align-items: stretch;
                }

                .evidence-tabs {
                    display: grid;
                    gap: 10px;
                }

                .evidence-tabs button {
                    position: relative;
                    min-height: 118px;
                    padding: 22px 24px;
                    border: 1px solid rgba(15, 23, 42, 0.1);
                    border-radius: 14px;
                    background: rgba(255,255,255,0.76);
                    color: #172033;
                    text-align: left;
                    cursor: pointer;
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
                }

                .evidence-tabs button:before {
                    content: "";
                    position: absolute;
                    inset: 0 auto 0 0;
                    width: 4px;
                    border-radius: 14px 0 0 14px;
                    background: var(--evidence-accent);
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }

                .evidence-tabs button:hover,
                .evidence-tabs button.is-active {
                    transform: translateX(4px);
                    border-color: color-mix(in srgb, var(--evidence-accent) 38%, rgba(15, 23, 42, 0.1));
                    background: #ffffff;
                    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
                }

                .evidence-tabs button.is-active:before {
                    opacity: 1;
                }

                .evidence-tabs span {
                    display: block;
                    margin-bottom: 12px;
                    color: var(--evidence-accent);
                    font-size: 11px;
                    font-weight: 850;
                    letter-spacing: 0.13em;
                    text-transform: uppercase;
                }

                .evidence-tabs strong {
                    display: block;
                    max-width: 210px;
                    font-family: var(--font-display), sans-serif;
                    font-size: 20px;
                    line-height: 1.08;
                    letter-spacing: -0.035em;
                }

                .evidence-panel {
                    display: grid;
                    grid-template-columns: minmax(260px, 0.95fr) minmax(250px, 1.05fr);
                    min-height: 390px;
                    overflow: hidden;
                    border: 1px solid rgba(15, 23, 42, 0.1);
                    border-radius: 18px;
                    background: #ffffff;
                    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
                    animation: evidence-panel-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
                }

                @keyframes evidence-panel-in {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .evidence-diagram {
                    position: relative;
                    min-height: 390px;
                    overflow: hidden;
                    background: #111827;
                }

                .evidence-diagram-grid {
                    position: absolute;
                    inset: 0;
                    opacity: 0.32;
                    background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
                    background-size: 36px 36px;
                }

                .evidence-route {
                    position: absolute;
                    left: 12%;
                    right: 12%;
                    top: 48%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    align-items: center;
                }

                .evidence-route:before {
                    content: "";
                    position: absolute;
                    left: 12%;
                    right: 12%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--evidence-accent), transparent);
                }

                .evidence-route span {
                    position: relative;
                    z-index: 1;
                    justify-self: center;
                    width: 18px;
                    height: 18px;
                    border: 4px solid #111827;
                    border-radius: 50%;
                    background: var(--evidence-accent);
                    box-shadow: 0 0 0 7px color-mix(in srgb, var(--evidence-accent) 18%, transparent);
                    animation: evidence-pulse 2.4s ease-in-out infinite;
                }

                .evidence-route span:nth-child(2) { animation-delay: 0.25s; }
                .evidence-route span:nth-child(3) { animation-delay: 0.5s; }

                .evidence-route-labels {
                    position: absolute;
                    left: 12%;
                    right: 12%;
                    top: calc(48% + 34px);
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    text-align: center;
                }

                .evidence-route-labels div {
                    display: grid;
                    gap: 5px;
                }

                .evidence-route-labels small {
                    color: rgba(255,255,255,0.42);
                    font: 700 10px/1 var(--font-mono), monospace;
                }

                .evidence-route-labels strong {
                    color: rgba(255,255,255,0.86);
                    font-size: 12px;
                }

                .evidence-signal {
                    position: absolute;
                    top: 28px;
                    right: 28px;
                    display: grid;
                    place-items: center;
                    width: 58px;
                    height: 58px;
                    border: 1px solid color-mix(in srgb, var(--evidence-accent) 42%, transparent);
                    border-radius: 16px;
                    color: var(--evidence-accent);
                    background: color-mix(in srgb, var(--evidence-accent) 12%, transparent);
                    font: 800 11px/1 var(--font-mono), monospace;
                    letter-spacing: 0.08em;
                }

                .evidence-panel-copy {
                    align-self: center;
                    padding: 42px;
                }

                .evidence-panel-copy h3 {
                    margin: 0 0 18px;
                    font-family: var(--font-display), sans-serif;
                    font-size: clamp(28px, 3vw, 42px);
                    line-height: 1;
                    letter-spacing: -0.045em;
                }

                .evidence-panel-copy p {
                    margin: 0;
                    color: #68766f;
                    font-size: 16px;
                    line-height: 1.65;
                }

                .evidence-projects {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 28px;
                }

                .evidence-projects span {
                    padding: 8px 11px;
                    border: 1px solid rgba(15, 23, 42, 0.1);
                    border-radius: 999px;
                    color: #53635c;
                    background: #f7f7f8;
                    font-size: 12px;
                    font-weight: 800;
                }

                @keyframes evidence-pulse {
                    0%, 100% { transform: scale(0.88); opacity: 0.74; }
                    50% { transform: scale(1.12); opacity: 1; }
                }

                @media (max-width: 820px) {
                    .evidence-section { padding: 110px 18px; }
                    .evidence-layout { grid-template-columns: 1fr; }
                    .evidence-tabs { grid-template-columns: repeat(3, 1fr); }
                    .evidence-tabs button { min-height: 112px; padding: 18px; }
                    .evidence-tabs button:hover,
                    .evidence-tabs button.is-active { transform: translateY(-3px); }
                    .evidence-tabs strong { font-size: 16px; }
                }

                @media (max-width: 620px) {
                    .evidence-heading h2 { font-size: 42px; }
                    .evidence-heading p { font-size: 16px; }
                    .evidence-tabs { grid-template-columns: 1fr; }
                    .evidence-tabs button { min-height: auto; }
                    .evidence-panel { grid-template-columns: 1fr; }
                    .evidence-diagram { min-height: 300px; }
                    .evidence-panel-copy { padding: 30px 24px; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .evidence-tabs button,
                    .evidence-route span,
                    .evidence-panel { transition: none; animation: none; }
                }
            `}</style>
        </section>
    );
}
