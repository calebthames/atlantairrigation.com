import { NextResponse } from "next/server";
import { Resend } from "resend";

const SERVICE_LABELS: Record<string, string> = {
  installation: "New Irrigation Installation",
  repair: "Sprinkler Repair",
  seasonal: "Seasonal Startup or Winterization",
  other: "Not sure / Other",
};

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
};

function formatService(service: string | undefined): string {
  if (!service) return "—";
  return SERVICE_LABELS[service] ?? service;
}

function buildEmailContent(fields: Required<Pick<ContactBody, "name" | "phone">> & ContactBody) {
  const lines = [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email?.trim() || "—"}`,
    `City / Neighborhood: ${fields.city?.trim() || "—"}`,
    `Service: ${formatService(fields.service)}`,
    "",
    "Message:",
    fields.message?.trim() || "—",
  ];
  const text = lines.join("\n");
  const html = `
    <h2>New contact form submission</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>Name</strong></td><td style="padding:6px 0;">${escapeHtml(fields.name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>Phone</strong></td><td style="padding:6px 0;">${escapeHtml(fields.phone)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>Email</strong></td><td style="padding:6px 0;">${escapeHtml(fields.email?.trim() || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>City</strong></td><td style="padding:6px 0;">${escapeHtml(fields.city?.trim() || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>Service</strong></td><td style="padding:6px 0;">${escapeHtml(formatService(fields.service))}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;margin-top:16px;"><strong>Message</strong></p>
    <pre style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin:0;">${escapeHtml(fields.message?.trim() || "—")}</pre>
  `.trim();
  return { text, html };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const { text, html } = buildEmailContent({
    name,
    phone,
    email,
    city,
    service,
    message,
  });

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Atlanta Irrigation <noreply@atlantairrigation.com>",
    to: ["info@atlantairrigation.com"],
    ...(email ? { replyTo: email } : {}),
    subject: `Website contact: ${name}`,
    text,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
