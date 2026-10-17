"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { experienceTimeline, type ExperienceEntry } from "@/data/content";

const YEAR_START = 2023;
const YEAR_END = 2026;
const YEARS = [2023, 2024, 2025, 2026];

function getTimelinePosition(value: number) {
  return Math.max(0, Math.min(100, ((value - YEAR_START) / (YEAR_END - YEAR_START)) * 100));
}

function TimelineEntry({
  entry,
  selected,
  onSelect,
}: {
  entry: ExperienceEntry;
  selected: boolean;
  onSelect: () => void;
}) {
  const left = getTimelinePosition(entry.start);
  const end = Math.max(entry.end, entry.start + 0.12);
  const width = Math.max(3.5, getTimelinePosition(end) - left);

  return (
    <div className={`experience-row${selected ? " is-selected" : ""}`}>
      <div className="experience-row-label">
        <span>{entry.code}</span>
        <strong>{entry.company}</strong>
      </div>
      <button
        type="button"
        className="experience-bar-button"
        aria-label={`Ver experiencia en ${entry.company}`}
        aria-pressed={selected}
        onClick={onSelect}
      >
        <span
          className={`experience-bar ${entry.status === "current" ? "is-current" : ""}`}
          style={{ left: `${left}%`, width: `${width}%`, "--bar-color": entry.accent } as React.CSSProperties}
        >
          <span className="experience-bar-glow" />
          <span className="experience-bar-dot" />
        </span>
        <span className="experience-bar-tooltip">{entry.period}</span>
      </button>
      <span className="experience-row-context">{entry.context}</span>
    </div>
  );
}

function ExperienceDetails({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="experience-details" key={entry.id} aria-live="polite">
      <div className="experience-details-main">
        <div className="experience-details-kicker">
          <span className="experience-live-dot" style={{ backgroundColor: entry.accent }} />
          {entry.status === "current" ? "Experiencia actual" : "Experiencia completada"}
        </div>
        <p className="experience-details-period">{entry.period}</p>
        <h3>{entry.company}</h3>
        <p className="experience-details-role">{entry.role}</p>
        <p className="experience-details-summary">{entry.summary}</p>
        {entry.url && (
          <Link href={entry.url} target="_blank" rel="noreferrer" className="experience-details-link">
            Ver PrometeonDev <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>

      <div className="experience-details-proof">
        <p className="experience-proof-label">Lo que hice aquí</p>
        <ul>
          {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="experience-stack">
          {entry.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState("prometeondev");
  const selectedEntry = useMemo(
    () => experienceTimeline.find((entry) => entry.id === selectedId) ?? experienceTimeline[0],
    [selectedId],
  );

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-shell">
        <div className="experience-heading">
          <div>
            <p className="section-kicker">Experiencia profesional</p>
            <h2 id="experience-title">Una trayectoria entre producto, código y colaboración.</h2>
          </div>
          <p className="experience-intro">
            Selecciona una etapa para ver el contexto, el rol y la evidencia detrás del recorrido.
          </p>
        </div>

        <div className="experience-board">
          <div className="experience-board-topline">
            <span>Franja de tiempo</span>
            <strong>2023 — 2026</strong>
            <div className="experience-legend" aria-label="Leyenda de estados">
              <span><i className="legend-swatch current" /> En curso</span>
              <span><i className="legend-swatch completed" /> Completada</span>
              <span><i className="legend-today" /> Hoy</span>
            </div>
          </div>

          <div className="experience-chart" style={{ "--years": YEARS.length } as React.CSSProperties}>
            <div className="experience-axis" aria-hidden="true">
              {YEARS.map((year) => <span key={year}>{year}</span>)}
            </div>
            <div className="experience-axis-line" aria-hidden="true">
              {YEARS.map((year) => <i key={year} style={{ left: `${getTimelinePosition(year)}%` }} />)}
              <b style={{ left: `${getTimelinePosition(2026)}%` }} />
            </div>
            <div className="experience-rows">
              {experienceTimeline.map((entry) => (
                <TimelineEntry
                  key={entry.id}
                  entry={entry}
                  selected={selectedEntry.id === entry.id}
                  onSelect={() => setSelectedId(entry.id)}
                />
              ))}
            </div>
            <div className="experience-today-line" aria-hidden="true" />
          </div>

          <ExperienceDetails entry={selectedEntry} />
        </div>
      </div>

      <style jsx global>{`
        .experience-section {
          position: relative;
          overflow: hidden;
          scroll-margin-top: 112px;
          padding: 132px 24px 150px;
          background: #fffaf6;
          color: #24150f;
        }

        .experience-section:before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(rgba(249, 115, 22, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.035) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: linear-gradient(to bottom, transparent, black 16%, black 84%, transparent);
        }

        .experience-shell {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .experience-heading {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
          gap: 64px;
          align-items: end;
          margin-bottom: 42px;
        }

        .section-kicker,
        .experience-board-topline,
        .experience-details-kicker,
        .experience-proof-label {
          margin: 0;
          color: #c2410c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .experience-heading h2 {
          max-width: 760px;
          margin: 16px 0 0;
          font-family: var(--font-display), sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          letter-spacing: -0.055em;
          line-height: 0.98;
        }

        .experience-intro {
          max-width: 340px;
          margin: 0 0 4px auto;
          color: #7c6a60;
          font-size: 15px;
          line-height: 1.65;
        }

        .experience-board {
          overflow: hidden;
          border: 1px solid rgba(36, 21, 15, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 24px 70px rgba(100, 61, 32, 0.08), 0 2px 0 rgba(255, 255, 255, 0.8) inset;
        }

        .experience-board-topline {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 22px 28px 18px;
          border-bottom: 1px solid rgba(36, 21, 15, 0.08);
          color: #24150f;
        }

        .experience-board-topline strong {
          color: #8d7668;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .experience-legend {
          display: flex;
          gap: 18px;
          margin-left: auto;
          color: #7c6a60;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-transform: none;
        }

        .experience-legend span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .legend-swatch {
          display: inline-block;
          width: 18px;
          height: 7px;
          border-radius: 99px;
        }

        .legend-swatch.current { background: #22c55e; box-shadow: 0 0 10px rgba(34, 197, 94, 0.45); }
        .legend-swatch.completed { background: #aaa39d; }
        .legend-today { width: 1px; height: 14px; border-left: 1px dashed #22a267; }

        .experience-chart {
          position: relative;
          padding: 0 28px 24px;
        }

        .experience-axis {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 20px 0 12px;
          color: #59483f;
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          font-weight: 700;
        }

        .experience-axis span:not(:first-child) { text-align: center; }
        .experience-axis span:last-child { text-align: right; }

        .experience-axis-line {
          position: absolute;
          top: 50px;
          right: 28px;
          left: 28px;
          height: 1px;
          background: rgba(36, 21, 15, 0.16);
        }

        .experience-axis-line i {
          position: absolute;
          top: -6px;
          width: 1px;
          height: calc(100% + 240px);
          background: rgba(36, 21, 15, 0.08);
        }

        .experience-axis-line b,
        .experience-today-line {
          position: absolute;
          z-index: 2;
          top: -6px;
          width: 1px;
          height: calc(100% + 240px);
          border-left: 1px dashed rgba(34, 162, 103, 0.72);
        }

        .experience-rows {
          position: relative;
          z-index: 3;
          display: grid;
          gap: 4px;
          padding-top: 12px;
        }

        .experience-row {
          display: grid;
          grid-template-columns: 166px minmax(0, 1fr) 185px;
          min-height: 42px;
          align-items: center;
          border-radius: 10px;
          transition: background 220ms ease, transform 220ms ease;
        }

        .experience-row:hover,
        .experience-row.is-selected { background: rgba(249, 115, 22, 0.055); }

        .experience-row.is-selected { transform: translateX(4px); }

        .experience-row-label {
          display: flex;
          align-items: baseline;
          gap: 8px;
          min-width: 0;
          padding-left: 10px;
        }

        .experience-row-label span {
          color: #ef4444;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 800;
        }

        .experience-row-label strong {
          overflow: hidden;
          color: #5e4d43;
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .experience-bar-button {
          position: relative;
          width: 100%;
          height: 38px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .experience-bar-button:focus-visible { outline: 2px solid #f97316; outline-offset: 4px; border-radius: 4px; }

        .experience-bar-button:before {
          content: "";
          position: absolute;
          right: 0;
          left: 0;
          top: 50%;
          height: 1px;
          background: rgba(36, 21, 15, 0.06);
        }

        .experience-bar {
          position: absolute;
          top: 50%;
          height: 9px;
          min-width: 34px;
          border: 1px solid color-mix(in srgb, var(--bar-color) 60%, #ffffff);
          border-radius: 999px;
          background: color-mix(in srgb, var(--bar-color) 72%, #ffffff);
          box-shadow: 0 4px 13px color-mix(in srgb, var(--bar-color) 22%, transparent);
          transform: translateY(-50%);
          transition: height 220ms ease, filter 220ms ease;
        }

        .experience-bar-button:hover .experience-bar,
        .experience-row.is-selected .experience-bar { height: 12px; filter: saturate(1.15); }

        .experience-bar.is-current { background: linear-gradient(90deg, color-mix(in srgb, var(--bar-color) 64%, #ffffff), #22c55e); }

        .experience-bar-glow {
          position: absolute;
          inset: -7px 0;
          border-radius: inherit;
          background: var(--bar-color);
          opacity: 0.12;
          filter: blur(7px);
        }

        .experience-bar-dot {
          position: absolute;
          top: 50%;
          right: -5px;
          width: 10px;
          height: 10px;
          border: 2px solid #fffaf6;
          border-radius: 50%;
          background: var(--bar-color);
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--bar-color) 32%, transparent);
          transform: translateY(-50%);
        }

        .experience-bar.is-current .experience-bar-dot { background: #22c55e; box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.13), 0 0 13px rgba(34, 197, 94, 0.7); }

        .experience-bar-tooltip {
          position: absolute;
          right: 0;
          bottom: -1px;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 250, 246, 0.92);
          color: #8d7668;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .experience-bar-button:hover .experience-bar-tooltip,
        .experience-row.is-selected .experience-bar-tooltip { opacity: 1; transform: translateY(0); }

        .experience-row-context {
          overflow: hidden;
          padding-left: 16px;
          color: #998b82;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .experience-details {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 52px;
          padding: 34px 36px 36px;
          border-top: 1px solid rgba(36, 21, 15, 0.1);
          background: linear-gradient(135deg, rgba(255, 247, 237, 0.88), rgba(255, 255, 255, 0.84));
          animation: experience-details-in 360ms ease both;
        }

        @keyframes experience-details-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .experience-live-dot { display: inline-block; width: 8px; height: 8px; margin-right: 7px; border-radius: 50%; box-shadow: 0 0 0 5px color-mix(in srgb, currentColor 10%, transparent); }
        .experience-details-period { margin: 18px 0 4px; color: #a08d82; font-family: var(--font-mono), monospace; font-size: 12px; }
        .experience-details h3 { margin: 0; font-family: var(--font-display), sans-serif; font-size: clamp(34px, 5vw, 58px); letter-spacing: -0.055em; line-height: 0.98; }
        .experience-details-role { margin: 12px 0 0; color: #c2410c; font-size: 14px; font-weight: 800; }
        .experience-details-summary { max-width: 590px; margin: 18px 0 0; color: #735f53; font-size: 15px; line-height: 1.7; }

        .experience-details-link { display: inline-flex; gap: 8px; align-items: center; margin-top: 24px; padding: 10px 14px; border: 1px solid rgba(194, 65, 12, 0.24); border-radius: 999px; color: #a83d0f; font-size: 12px; font-weight: 800; text-decoration: none; transition: background 180ms ease, transform 180ms ease; }
        .experience-details-link:hover { background: rgba(249, 115, 22, 0.09); transform: translateY(-2px); }

        .experience-details-proof { align-self: end; padding-left: 28px; border-left: 1px solid rgba(36, 21, 15, 0.1); }
        .experience-details-proof ul { display: grid; gap: 12px; margin: 18px 0 26px; padding: 0; list-style: none; }
        .experience-details-proof li { color: #57463c; font-size: 14px; font-weight: 700; }
        .experience-details-proof li:before { content: "↗"; display: inline-block; width: 22px; color: #f97316; }
        .experience-stack { display: flex; flex-wrap: wrap; gap: 7px; }
        .experience-stack span { padding: 7px 10px; border: 1px solid rgba(36, 21, 15, 0.11); border-radius: 999px; background: rgba(255, 255, 255, 0.72); color: #78665b; font-family: var(--font-mono), monospace; font-size: 10px; font-weight: 700; }

        @media (max-width: 900px) {
          .experience-heading { grid-template-columns: 1fr; gap: 20px; }
          .experience-intro { margin: 0; }
          .experience-row { grid-template-columns: 136px minmax(0, 1fr); }
          .experience-row-context { display: none; }
          .experience-details { grid-template-columns: 1fr; gap: 28px; }
          .experience-details-proof { padding: 26px 0 0; border-top: 1px solid rgba(36, 21, 15, 0.1); border-left: 0; }
        }

        @media (max-width: 640px) {
          .experience-section { padding: 90px 16px 110px; }
          .experience-board-topline { flex-wrap: wrap; padding: 18px; }
          .experience-legend { width: 100%; margin: 4px 0 0; gap: 12px; }
          .experience-chart { overflow-x: auto; padding: 0 18px 20px; }
          .experience-axis-line { right: 18px; left: 18px; }
          .experience-axis-line i { height: calc(100% + 330px); }
          .experience-axis-line b { height: calc(100% + 330px); }
          .experience-rows { min-width: 650px; }
          .experience-axis { min-width: 650px; }
          .experience-details { padding: 28px 22px; }
          .experience-details h3 { font-size: 42px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-row,
          .experience-bar,
          .experience-bar-tooltip,
          .experience-details-link { transition: none; }
          .experience-details { animation: none; }
        }
      `}</style>
    </section>
  );
}
