import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
export async function getTokenAuth() {
  const session = await getServerSession(authOptions);
  return (session as any)?.accessToken || null;
}
