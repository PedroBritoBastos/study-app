"use client";

// styles
import { styles } from "@/styles/login/loginPage.styles";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../services/authService";

// components
import { Input } from "@/src/components/form/Input";
import { Stack, Heading, Span, Button, Flex } from "@chakra-ui/react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(username, password);
      console.log("Login successful:", user);
      // Redirect to home page on successful login
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error
    }
  };

  return (
    <Stack {...styles.container}>

      {/* header da pagina de login */}
      <Heading {...styles.heading}><Span {...styles.span}>Study</Span> App</Heading>

      <form onSubmit={handleSubmit}>

        {/* legenda de login */}
        <Heading {...styles.loginHeading}>Log In</Heading>

        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Flex {...styles.submitButtonContainer}>
          <Button {...styles.submitButton} onClick={handleSubmit}>Enviar</Button>
        </Flex>

      </form>
    </Stack>
  );
}
