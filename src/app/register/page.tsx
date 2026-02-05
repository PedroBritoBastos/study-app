"use client"

// styles
import { styles } from "@/styles/register/registerPage.styles";

import { Stack, Heading, Text, Fieldset, Button, Flex } from "@chakra-ui/react";
import { Input } from "@/src/components/form/Input";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return <Stack {...styles.container}>
    <Fieldset.Root {...styles.fieldset}>
      <Heading {...styles.heading}>Cadastro</Heading>

      <Text>Usuário</Text>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Text>Senha</Text>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Text>Confirmação de senha</Text>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </Fieldset.Root>

    <Flex {...styles.buttons}>
      <Button {...styles.submitButton}>Cadastrar</Button>
      <Button {...styles.registerButton} onClick={(e) => router.push("/login")}>Fazer Login</Button>
    </Flex>
  </Stack>
}