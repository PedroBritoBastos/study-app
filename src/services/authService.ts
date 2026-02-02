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
      throw new Error(errorData.error || "Login failed");
    }

    const data = await response.json();
    const { token } = data;

    // Save token to localStorage
    localStorage.setItem("token", token);

    // Decode token to get user
    const decoded = jwt.decode(token) as { id: string; username: string };

    return decoded;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
