import jwt from "jsonwebtoken";

export async function login(username: string, password: string) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Falha no login");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function register(username: string, password: string) {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Registration failed");
    }

    const data = await response.json();
    const { user } = data;

    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}
