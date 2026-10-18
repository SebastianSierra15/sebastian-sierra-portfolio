export const analyticsEventNames = [
  "page_view",
  "session_start",
  "section_view",
  "scroll_depth",
  "project_view",
  "project_cta",
  "cv_download",
  "contact_click",
  "external_link_click",
  "time_on_page",
  "web_vital",
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  path: string;
  sessionId?: string;
  projectSlug?: string;
  metadata?: Record<string, string | number | boolean>;
  occurredAt: string;
};

export function isAnalyticsEvent(value: unknown): value is AnalyticsEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as Record<string, unknown>;
  if (typeof event.name !== "string" || !analyticsEventNames.includes(event.name as AnalyticsEventName)) return false;
  if (typeof event.path !== "string" || event.path.length > 240 || typeof event.occurredAt !== "string") return false;
  if (event.sessionId !== undefined && (typeof event.sessionId !== "string" || event.sessionId.length > 80)) return false;
  if (event.projectSlug !== undefined && (typeof event.projectSlug !== "string" || event.projectSlug.length > 120)) return false;
  return event.metadata === undefined || (typeof event.metadata === "object" && event.metadata !== null);
}

export function getSessionId() {
  if (typeof window === "undefined") return undefined;
  const key = "sebastian-portfolio-session";
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.sessionStorage.setItem(key, id);
  return id;
}

export async function trackEvent(event: Omit<AnalyticsEvent, "occurredAt" | "path" | "sessionId"> & { path?: string }) {
  if (typeof window === "undefined") return;
  const payload: AnalyticsEvent = { ...event, path: event.path ?? window.location.pathname, sessionId: getSessionId(), occurredAt: new Date().toISOString() };
  try {
    await fetch("/api/analytics/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true });
  } catch {
    // Analytics must never interrupt the portfolio experience.
  }
}
