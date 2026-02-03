import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function createPasswordHash(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  return hash;
}
