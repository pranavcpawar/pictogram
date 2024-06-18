import "server-only";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type SessionPayload = {
  id: string;
  username: string;
  expiresAt: Date;
};

const secret = process.env.JWT_SECRET!;
const key = Buffer.from(new TextEncoder().encode(secret)).toString("hex");

export async function encrypt(payload: SessionPayload) {
  return jwt.sign(payload, key, { algorithm: "HS256", expiresIn: "12h" })
};

export async function decrypt(session: string) {
  try {
    const payload = jwt.verify(session, key, { algorithms: ["HS256"] }) as SessionPayload;

    return payload;
  } catch (error) {
    return null;
  };
};

export async function createNewSession(id: string, username: string) {
  const payload = { id, username, expiresAt: new Date(Date.now() + 60 * 60 * 12 * 1000) };
  const session = await encrypt(payload);

  cookies().set("session", session, { secure: true, sameSite: "strict", httpOnly: true, expires: payload.expiresAt });
};

export async function verifySession() {
  const session = cookies().get("session")?.value??"";
  const payload = await decrypt(session);

  if (payload) return { id: payload.id, username: payload.username };

  return null;
};

export async function deleteSession(token: string) {
  cookies().delete(token);
};