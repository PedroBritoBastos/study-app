import { Center, Heading, Button, Flex, Stack, Presence } from "@chakra-ui/react"

// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext"

// modal que vai ser disparado antes de deletar uma matéria
export function ConfirmModal() {
  const { getConfirmModalState } = useSubjectContext();

  return (
    <Presence present={getConfirmModalState()}>
      <Center w={"fit-content"} h={100} pos={"absolute"} p={20} bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        top="30%"
        left="45%"
        transform="translate(-50%, -50%)"
      >
        <Stack>
          <Heading color={"purple.700"}>Tem certeza que quer excluir este conteúdo?</Heading>
          <Flex justify={"center"} gap={8} mt={5}>
            <Button bg={"purple.400"} _hover={{ bg: "purple.300" }}>Cancelar</Button>
            <Button bg={"red.500"} _hover={{ bg: "red.400" }}>Excluir</Button>
          </Flex>
        </Stack>
      </Center>
    </Presence>
  )
}