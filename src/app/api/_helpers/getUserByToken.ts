import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) throw new Error("Não existe secret.");

    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}
