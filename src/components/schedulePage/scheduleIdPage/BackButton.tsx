"use client"

import { Button } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  return <Button onClick={handleGoBack}>
    Voltar
  </Button>
}