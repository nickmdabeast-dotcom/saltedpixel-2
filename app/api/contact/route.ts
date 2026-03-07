import { NextResponse } from "next/server";

// Simple in-memory rate limiter: 5 requests per IP per minute
const rateLimiter = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimiter.get(ip);
  if (!entry || now > entry.reset) {
    rateLimiter.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

function sanitize(str: string, maxLength = 500): string {
  return str.replace(/[<>"'`]/g, "").trim().substring(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s\-().+]{7,20}$/.test(phone);
}

export async function POST(req: Request) {
  try {
    // Rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute or call us directly." },
        { status: 429 }
      );
    }

    // Parse body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request format." }, { status: 400 });
    }

    const { name, phone, email, address, message } = body as Record<string, string>;

    // Required field validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    // Format validation
    const cleanPhone = sanitize(phone, 20);
    if (!isValidPhone(cleanPhone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const cleanEmail = sanitize(email, 254);
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const submission = {
      name: sanitize(name, 100),
      phone: cleanPhone,
      email: cleanEmail,
      address: address ? sanitize(address, 200) : "",
      message: message ? sanitize(message, 2000) : "",
      timestamp: new Date().toISOString(),
      ip,
    };

    // Log the submission (Vercel logs / future Resend integration)
    console.log("[contact-form]", JSON.stringify(submission));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact-form] Error:", err);
    return NextResponse.json(
      { error: "Server error. Please call us directly at (512) 000-0000." },
      { status: 500 }
    );
  }
}
