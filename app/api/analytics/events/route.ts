import { NextResponse } from "next/server";
import { isAnalyticsEvent } from "@/lib/analytics";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isAnalyticsEvent(payload)) return NextResponse.json({ ok: false, error: "invalid_event" }, { status: 400 });

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceRoleKey) {
    // The first production table only allowed the original six event names.
    // Keep new telemetry flowing before its check constraint is migrated by
    // storing the semantic name in metadata and using page_view as fallback.
    const legacyEventNames = new Set(["page_view", "project_view", "project_cta", "cv_download", "contact_click", "external_link_click"]);
    const storedEventName = legacyEventNames.has(payload.name) ? payload.name : "page_view";
    const storedMetadata = legacyEventNames.has(payload.name)
      ? payload.metadata ?? {}
      : { ...(payload.metadata ?? {}), event_type: payload.name };
    const response = await fetch(`${supabaseUrl}/rest/v1/analytics_events`, {
      method: "POST",
      headers: { apikey: serviceRoleKey, Authorization: `Bearer ${serviceRoleKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ event_name: storedEventName, path: payload.path, session_id: payload.sessionId ?? null, project_slug: payload.projectSlug ?? null, metadata: storedMetadata, occurred_at: payload.occurredAt }),
    });
    if (!response.ok) return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: Boolean(supabaseUrl && serviceRoleKey) });
}
