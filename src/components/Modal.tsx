import { Fieldset, Stack, Field, Input, Textarea } from "@chakra-ui/react"
import { Button } from "./Button"

export function Modal() {
  return (
    <Fieldset.Root size="lg" w={550} h={600} ml={100} mt={100} bgColor="white" p={10} borderRadius="md" boxShadow="md" d="flex" flexDirection="column">
      <Stack>
        <Fieldset.Legend fontSize="xl" color="purple.700" fontWeight="bold">Novo conteúdo</Fieldset.Legend>
      </Stack>

      {/* conteudo */}
      <Field.Root gap={5}>
        <Field.Label color="gray.500" fontSize="md">Conteúdo</Field.Label>
        <Input name="title" />
      </Field.Root>

      <Field.Root flex={1} d="flex" flexDirection="column" gap={5}>
        <Field.Label color="gray.500" fontSize="md">Descrição</Field.Label>
        <Textarea name="description" placeholder="Descrição" size="sm" flex={1} />
      </Field.Root>

      <Button />
    </Fieldset.Root>
  )
}