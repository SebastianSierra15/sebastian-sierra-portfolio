"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function deviceType() {
  if (window.matchMedia("(pointer: coarse)").matches) return window.innerWidth < 768 ? "mobile" : "tablet";
  return "desktop";
}

function referrerHost() {
  try { return document.referrer ? new URL(document.referrer).hostname.slice(0, 120) : "direct"; } catch { return "unknown"; }
}

export default function AnalyticsTracker() {
  useEffect(() => {
    const startedAt = performance.now();
    const metadata = { device: deviceType(), referrer: referrerHost(), viewport: `${window.innerWidth}x${window.innerHeight}` };
    void trackEvent({ name: "page_view", metadata });
    const sessionKey = "sebastian-portfolio-session-started";
    if (!sessionStorage.getItem(sessionKey)) { sessionStorage.setItem(sessionKey, "1"); void trackEvent({ name: "session_start", metadata }); }

    const trackedSections = new Set<string>();
    const sectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        const id = element.dataset.analyticsSection || element.id;
        if (!id || trackedSections.has(id)) continue;
        trackedSections.add(id);
        void trackEvent({ name: "section_view", metadata: { section: id } });
      }
    }, { threshold: 0.35 });
    document.querySelectorAll<HTMLElement>("main > section[id], [data-analytics-section]").forEach((element) => sectionObserver.observe(element));

    const trackedDepths = new Set<number>();
    const reportDepth = () => {
      const maximum = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const depth = Math.min(100, Math.floor((window.scrollY / maximum) * 100));
      for (const threshold of [25, 50, 75, 90, 100]) if (depth >= threshold && !trackedDepths.has(threshold)) { trackedDepths.add(threshold); void trackEvent({ name: "scroll_depth", metadata: { depth: threshold } }); }
    };
    window.addEventListener("scroll", reportDepth, { passive: true });

    const projectObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const projectSlug = (entry.target as HTMLElement).dataset.analyticsProject;
        if (projectSlug) void trackEvent({ name: "project_view", projectSlug, metadata: { device: deviceType() } });
        projectObserver.unobserve(entry.target);
      }
    }, { threshold: 0.4 });
    document.querySelectorAll<HTMLElement>("[data-analytics-project]").forEach((element) => projectObserver.observe(element));

    const click = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      const project = target.closest<HTMLElement>("[data-analytics-project]")?.dataset.analyticsProject;
      if (target.hasAttribute("download") || href.toLowerCase().includes("cv")) void trackEvent({ name: "cv_download", metadata: { target: href.slice(0, 160) } });
      else if (href === "/quote" || href.startsWith("mailto:") || href.includes("wa.me") || href.includes("whatsapp")) void trackEvent({ name: "contact_click", metadata: { target: href.slice(0, 160) } });
      else if (project && /^https?:\/\//.test(href)) void trackEvent({ name: "project_cta", projectSlug: project, metadata: { target: "live" } });
      else if (/^https?:\/\//.test(href) && !href.includes(window.location.hostname)) void trackEvent({ name: "external_link_click", metadata: { target: href.slice(0, 160) } });
    };
    document.addEventListener("click", click);

    let ended = false;
    const finish = () => { if (ended) return; ended = true; void trackEvent({ name: "time_on_page", metadata: { seconds: Math.round((performance.now() - startedAt) / 1000) } }); };
    window.addEventListener("pagehide", finish, { once: true });
    const visibility = () => { if (document.visibilityState === "hidden") finish(); };
    document.addEventListener("visibilitychange", visibility);

    const observers: PerformanceObserver[] = [];
    const observe = (type: string, handler: (entry: PerformanceEntry) => void) => { try { const observer = new PerformanceObserver((list) => list.getEntries().forEach(handler)); observer.observe({ type, buffered: true } as PerformanceObserverInit); observers.push(observer); } catch { /* optional browser API */ } };
    observe("largest-contentful-paint", (entry) => void trackEvent({ name: "web_vital", metadata: { name: "LCP", value: Math.round(entry.startTime) } }));
    observe("layout-shift", (entry) => { const value = (entry as PerformanceEntry & { value?: number }).value; if (typeof value === "number") void trackEvent({ name: "web_vital", metadata: { name: "CLS", value: Number(value.toFixed(4)) } }); });
    let maxInp = 0;
    let inpTimer: number | undefined;
    observe("event", (entry) => {
      const duration = (entry as PerformanceEntry & { duration: number }).duration;
      if (duration <= maxInp) return;
      maxInp = duration;
      window.clearTimeout(inpTimer);
      inpTimer = window.setTimeout(() => void trackEvent({ name: "web_vital", metadata: { name: "INP", value: Math.round(maxInp) } }), 1200);
    });

    return () => { sectionObserver.disconnect(); projectObserver.disconnect(); observers.forEach((observer) => observer.disconnect()); window.clearTimeout(inpTimer); window.removeEventListener("scroll", reportDepth); document.removeEventListener("click", click); window.removeEventListener("pagehide", finish); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return null;
}
