'use client'

import { Fieldset, Field, Input, Textarea, Flex, Button } from "@chakra-ui/react"
import { CloseButton } from "./CloseButton"

import { ButtonProps } from "../types/Button"

export function Modal({ handleClick }: ButtonProps) {
  return (
    <Fieldset.Root size="lg" w={550} h={600} ml={100} mt={100} bgColor="white" p={10} borderRadius="md" boxShadow="md" d="flex" flexDirection="column" position="absolute" bottom={10} left={40}>
      <Flex align="center" justify="space-between">
        <Fieldset.Legend fontSize="xl" color="purple.700" fontWeight="bold">Novo conteúdo</Fieldset.Legend>
        <CloseButton handleClick={handleClick} />
      </Flex>

      {/* conteudo */}
      <Field.Root gap={5}>
        <Field.Label color="gray.500" fontSize="md">Conteúdo</Field.Label>
        <Input name="title" />
      </Field.Root>

      <Field.Root flex={1} d="flex" flexDirection="column" gap={5}>
        <Field.Label color="gray.500" fontSize="md">Descrição</Field.Label>
        <Textarea name="description" placeholder="Descrição" size="sm" flex={1} />
      </Field.Root>

      <Button bgColor="purple.400" px={8} py={4}>
        Criar
      </Button>

    </Fieldset.Root>
  )
}