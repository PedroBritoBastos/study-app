"use client";

// styles
import { styles } from "@/styles/login/loginPage.styles";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../services/authService";

// components
import { Input } from "@/src/components/form/Input";
import { Stack, Heading, Span, Button, Flex, Text } from "@chakra-ui/react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(username, password);
      // Redirect to home page on successful login
      router.push("/");
      router.refresh();
    } catch (error) {
      setError(error.message);
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

        {/* mensagem de erro, se houver */}
        {error && <Text color="red.400" textAlign="center" mb={3}>{error}</Text>}

        <Flex {...styles.submitButtonContainer}>
          <Button {...styles.submitButton} onClick={handleSubmit}>Enviar</Button>
          <Button {...styles.registerButton}>Registrar</Button>
        </Flex>

      </form>
    </Stack>
  );
}
