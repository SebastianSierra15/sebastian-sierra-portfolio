"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let finishing = false;
    let safetyTimer: number | undefined;
    const startedAt = performance.now();

    const finish = () => {
      if (finishing) return;
      finishing = true;

      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      const minimumDuration = new Promise<void>((resolve) => {
        const remaining = Math.max(0, 450 - (performance.now() - startedAt));
        window.setTimeout(resolve, remaining);
      });

      void Promise.race([
        Promise.all([fontsReady, minimumDuration]),
        new Promise<void>((resolve) => window.setTimeout(resolve, 700)),
      ]).then(() => {
        if (cancelled) return;

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setVisible(false));
        });
      });
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    safetyTimer = window.setTimeout(finish, 2200);

    return () => {
      cancelled = true;
      window.removeEventListener("load", finish);
      if (safetyTimer) window.clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div
      className="page-loader"
      data-loader-state={visible ? "visible" : "hidden"}
      aria-hidden={!visible}
      aria-label="Cargando portafolio"
      role="status"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "grid",
        placeItems: "center",
        background: "#fffaf6",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.55s ease",
      }}
    >
      <div className="page-loader-content">
        <div className="page-loader-mark" aria-hidden="true">
          <span>S</span>
          <span>S</span>
        </div>
        <div className="page-loader-track" aria-hidden="true">
          <span />
        </div>
        <p>Sebastián Sierra</p>
      </div>
    </div>
  );
}
