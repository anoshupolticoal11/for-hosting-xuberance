import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE = "xuberance_session";
const SESSION_SECRET = process.env.SESSION_SECRET || "default_super_secret_session_key_longer_than_32_chars";

export interface SessionData {
  id: string;
  username: string;
  role: "admin" | "member";
}

export function encryptSession(data: SessionData): string {
  const payload = JSON.stringify(data);
  const signature = crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
  return Buffer.from(payload).toString("base64") + "." + signature;
}

export function decryptSession(cookieVal: string): SessionData | null {
  try {
    const [base64Payload, signature] = cookieVal.split(".");
    if (!base64Payload || !signature) return null;
    const payload = Buffer.from(base64Payload, "base64").toString("utf8");
    const expectedSignature = crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
    if (signature === expectedSignature) {
      return JSON.parse(payload);
    }
  } catch (e) {
  }
  return null;
}

export async function getSession(): Promise<SessionData | null> {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(SESSION_COOKIE);
    if (!cookie) return null;
    return decryptSession(cookie.value);
  } catch (e) {
    return null;
  }
}

export async function setSession(data: SessionData) {
  const cookieStore = await cookies();
  const sessionToken = encryptSession(data);
  cookieStore.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
