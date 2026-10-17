"use client";
// Live availability chip. Uses Colombia time without making the first render time-dependent.

type Status = { color: string; label: string };

export default function PresenceChip({ dark = true }: { dark?: boolean }) {
  const status: Status = { color: "#2d8a5b", label: "Disponible" };

  const fg = dark ? "rgba(255,255,255,0.85)" : "#0f172a";
  const bg = dark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.05)";
  const bd = dark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.08)";

  return (
    <a
      href="mailto:sebsirra13@gmail.com?subject=Hi%20Sebastián%2C%20saw%20your%20portfolio"
      title={`${status.label} en Colombia · escribir por correo`}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "5px 10px 5px 8px",
        borderRadius: 100,
        background: bg,
        border: `1px solid ${bd}`,
        textDecoration: "none",
        fontFamily: "var(--font-mono), monospace",
        fontSize: 11,
        fontWeight: 500,
        color: fg,
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: status.color, opacity: 0.55,
          animation: "presenceRipple 1.8s ease-out infinite",
        }} />
        <span style={{
          position: "relative", width: 8, height: 8, borderRadius: "50%",
          background: status.color, boxShadow: `0 0 6px ${status.color}`,
        }} />
      </span>
      <span style={{ color: fg }}>{status.label}</span>
    </a>
  );
}
