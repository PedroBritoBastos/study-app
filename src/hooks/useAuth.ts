import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.replace("/login");
    router.refresh();
  }

  return {
    logout,
  };
}
