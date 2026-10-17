"use client";

import { motion } from "framer-motion";

type HeroSystemMapProps = {
  lane: {
    label: string;
    metric: string;
    short: string;
  };
  reducedMotion: boolean;
};

const SYSTEM_NODES = [
  { className: "hero-system-node-one", title: "Frontend", detail: "Interfaces" },
  { className: "hero-system-node-two", title: "APIs", detail: "Integraciones" },
  { className: "hero-system-node-three", title: "Datos", detail: "Automatización" },
  { className: "hero-system-node-four", title: "UX", detail: "Experiencia" },
];

export default function HeroSystemMap({ lane, reducedMotion }: HeroSystemMapProps) {
  return (
    <div className="hero-system-map" aria-label={`Mapa de trabajo: ${lane.label}`}>
      <div className="hero-system-map-grid" aria-hidden="true" />
      <div
        className="hero-system-orbit hero-system-orbit-one"
        aria-hidden="true"
        data-static={reducedMotion ? "true" : undefined}
      />
      <div
        className="hero-system-orbit hero-system-orbit-two"
        aria-hidden="true"
        data-static={reducedMotion ? "true" : undefined}
      />

      <div className="hero-system-connection hero-system-connection-one" aria-hidden="true" />
      <div className="hero-system-connection hero-system-connection-two" aria-hidden="true" />
      <div className="hero-system-connection hero-system-connection-three" aria-hidden="true" />
      <div className="hero-system-connection hero-system-connection-four" aria-hidden="true" />

      <div
        className="hero-system-core"
        data-static={reducedMotion ? "true" : undefined}
      >
        <div className="hero-system-core-inner">
          <span className="hero-system-core-kicker">Construcción activa</span>
          <strong>{lane.label}</strong>
          <span>{lane.short}</span>
          <small>{lane.metric}</small>
        </div>
      </div>

      {SYSTEM_NODES.map((node, index) => (
        <motion.div
          className={`hero-system-node ${node.className}`}
          key={node.title}
          data-static={reducedMotion ? "true" : undefined}
          animate={reducedMotion ? undefined : { y: [0, index % 2 ? 5 : -5, 0] }}
          transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
        >
          <span className="hero-system-node-dot" aria-hidden="true" />
          <span className="hero-system-node-copy">
            <strong>{node.title}</strong>
            <small>{node.detail}</small>
          </span>
        </motion.div>
      ))}

      <div className="hero-system-footer" aria-hidden="true">
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
      </div>

      <style jsx global>{`
        .hero-system-map {
          position: relative;
          width: min(100%, 620px);
          min-height: 470px;
          overflow: hidden;
          border: 1px solid rgba(36, 21, 15, 0.1);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.86), rgba(255,247,239,0.74)),
            radial-gradient(circle at 50% 45%, rgba(249,115,22,0.18), transparent 42%);
          box-shadow: 0 28px 70px rgba(36, 21, 15, 0.12);
          isolation: isolate;
        }

        .hero-system-map-grid {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image:
            linear-gradient(rgba(194,65,12,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .hero-system-orbit {
          position: absolute;
          left: 50%;
          top: 47%;
          width: 72%;
          aspect-ratio: 1.8;
          border: 1px solid rgba(249,115,22,0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(-18deg);
          transform-origin: center;
          pointer-events: none;
          animation: heroSystemOrbitOne 28s linear infinite;
        }

        .hero-system-orbit[data-static="true"],
        .hero-system-core[data-static="true"],
        .hero-system-node[data-static="true"] {
          animation: none;
        }

        @keyframes heroSystemOrbitOne {
          from { transform: translate(-50%, -50%) rotate(-18deg); }
          to { transform: translate(-50%, -50%) rotate(342deg); }
        }

        .hero-system-orbit:after {
          content: "";
          position: absolute;
          top: -4px;
          left: 21%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 0 6px rgba(249,115,22,0.12);
        }

        .hero-system-orbit-two {
          width: 62%;
          aspect-ratio: 1.45;
          border-color: rgba(251,191,36,0.42);
          transform: translate(-50%, -50%) rotate(34deg);
          animation-name: heroSystemOrbitTwo;
          animation-duration: 22s;
        }

        @keyframes heroSystemOrbitTwo {
          from { transform: translate(-50%, -50%) rotate(34deg); }
          to { transform: translate(-50%, -50%) rotate(-326deg); }
        }

        .hero-system-orbit-two:after {
          top: auto;
          left: auto;
          right: 15%;
          bottom: -4px;
          background: #fbbf24;
        }

        .hero-system-core {
          position: absolute;
          left: 50%;
          top: 47%;
          z-index: 3;
          width: 198px;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 28%, #fb923c, #ea580c 55%, #9a3412 100%);
          box-shadow: 0 22px 52px rgba(194,65,12,0.28), inset 0 1px 0 rgba(255,255,255,0.42);
          transform: translate(-50%, -50%);
          animation: heroSystemCoreFloat 5.5s ease-in-out infinite;
        }

        @keyframes heroSystemCoreFloat {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, calc(-50% - 8px)); }
        }

        .hero-system-core:before,
        .hero-system-core:after {
          content: "";
          position: absolute;
          inset: -14px;
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 50%;
        }

        .hero-system-core:after {
          inset: -28px;
          border-color: rgba(251,191,36,0.14);
        }

        .hero-system-core-inner {
          position: relative;
          z-index: 1;
          width: 74%;
          text-align: center;
          color: #fffaf5;
        }

        .hero-system-core-inner span,
        .hero-system-core-inner small {
          display: block;
        }

        .hero-system-core-kicker {
          margin-bottom: 8px;
          color: rgba(255,250,245,0.72);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-system-core strong {
          display: block;
          font-family: var(--font-display), Plus Jakarta Sans, sans-serif;
          font-size: 18px;
          line-height: 1.08;
        }

        .hero-system-core-inner > span:not(.hero-system-core-kicker) {
          margin-top: 7px;
          color: rgba(255,250,245,0.86);
          font-size: 11px;
          font-weight: 700;
        }

        .hero-system-core small {
          margin-top: 14px;
          color: #ffdfab;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
        }

        .hero-system-node {
          position: absolute;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-width: 122px;
          padding: 10px 12px;
          border: 1px solid rgba(36,21,15,0.1);
          border-radius: 12px;
          background: rgba(255,255,255,0.82);
          box-shadow: 0 12px 26px rgba(36,21,15,0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .hero-system-node-one { left: 8%; top: 19%; }
        .hero-system-node-two { right: 7%; top: 25%; }
        .hero-system-node-three { left: 7%; bottom: 22%; }
        .hero-system-node-four { right: 8%; bottom: 18%; }

        .hero-system-node-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 0 5px rgba(249,115,22,0.12);
        }

        .hero-system-node-copy strong,
        .hero-system-node-copy small {
          display: block;
        }

        .hero-system-node-copy strong {
          color: #24150f;
          font-size: 12px;
          line-height: 1.1;
        }

        .hero-system-node-copy small {
          margin-top: 4px;
          color: #8b7569;
          font-size: 10px;
          font-weight: 700;
        }

        .hero-system-connection {
          position: absolute;
          z-index: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(249,115,22,0.05), rgba(249,115,22,0.5), rgba(249,115,22,0.05));
          transform-origin: left center;
        }

        .hero-system-connection-one { left: 25%; top: 31%; width: 25%; transform: rotate(18deg); }
        .hero-system-connection-two { left: 51%; top: 32%; width: 24%; transform: rotate(-17deg); }
        .hero-system-connection-three { left: 26%; top: 68%; width: 24%; transform: rotate(-18deg); }
        .hero-system-connection-four { left: 51%; top: 66%; width: 24%; transform: rotate(18deg); }

        .hero-system-footer {
          position: absolute;
          left: 50%;
          bottom: 18px;
          z-index: 4;
          display: flex;
          gap: 7px;
          width: max-content;
          max-width: calc(100% - 32px);
          padding: 7px;
          border: 1px solid rgba(36,21,15,0.08);
          border-radius: 999px;
          background: rgba(255,255,255,0.72);
          transform: translateX(-50%);
          box-shadow: 0 8px 20px rgba(36,21,15,0.07);
        }

        .hero-system-footer span {
          padding: 4px 8px;
          border-radius: 999px;
          color: #9a3412;
          background: rgba(249,115,22,0.08);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .hero-system-map {
            min-height: 300px;
            border-radius: 20px;
          }

          .hero-system-core {
            width: 132px;
          }

          .hero-system-core strong {
            font-size: 13px;
          }

          .hero-system-core-kicker {
            margin-bottom: 5px;
            font-size: 7px;
          }

          .hero-system-core-inner > span:not(.hero-system-core-kicker),
          .hero-system-core small {
            font-size: 8px;
          }

          .hero-system-node {
            min-width: 0;
            padding: 7px 8px;
            gap: 6px;
            border-radius: 9px;
          }

          .hero-system-node-one { left: 4%; top: 14%; }
          .hero-system-node-two { right: 4%; top: 20%; }
          .hero-system-node-three { left: 4%; bottom: 20%; }
          .hero-system-node-four { right: 4%; bottom: 14%; }

          .hero-system-node-dot {
            width: 6px;
            height: 6px;
            box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
          }

          .hero-system-node-copy strong { font-size: 9px; }
          .hero-system-node-copy small { margin-top: 2px; font-size: 8px; }
          .hero-system-footer { bottom: 10px; gap: 3px; padding: 4px; }
          .hero-system-footer span { padding: 3px 5px; font-size: 8px; }
        }
      `}</style>
    </div>
  );
}

