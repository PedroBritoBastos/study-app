import { getUserFromToken } from "../antigo/app/api/_helpers/getUserByToken";

export async function isAuthenticated(): Promise<boolean> {
  const user = await getUserFromToken();

  if (!user) return false;

  return true;
}
