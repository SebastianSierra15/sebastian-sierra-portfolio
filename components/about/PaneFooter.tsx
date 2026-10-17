"use client";
// Pane D — Footer chip. Available · Colombia · Reply within 2 hours.

import { useReducedMotion } from "framer-motion";

export default function PaneFooter() {
  const reduceMotion = useReducedMotion();
  return (
    <div style={{
      padding: "12px 18px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontFamily: "var(--font-mono), monospace",
      fontSize: 11,
      gap: 10,
    }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
          <span style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "#fb923c", opacity: 0.55,
            animation: reduceMotion ? "none" : "presenceRipple 1.8s ease-out infinite",
          }} />
          <span style={{
            position: "relative", width: 8, height: 8, borderRadius: "50%",
            background: "#fb923c",
          }} />
        </span>
        <span style={{ color: "rgba(255,255,255,0.85)" }}>Available</span>
        <span style={{ color: "rgba(255,255,255,0.30)" }}>·</span>
        <span style={{ color: "rgba(255,255,255,0.55)" }}>Colombia, COT</span>
      </span>
      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, letterSpacing: "0.02em" }}>
        replies in <span style={{ color: "rgba(255,255,255,0.85)", fontVariantNumeric: "tabular-nums" }}>~2h</span>
      </span>
    </div>
  );
}
