"use client"

import { Center, Heading, Button, Flex, Stack, Presence } from "@chakra-ui/react"

// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext"
import { useDeleteSubject } from "@/src/hooks/useDeleteSubject";
import { useRouter } from "next/navigation";

// modal que vai ser disparado antes de deletar uma matéria
export function ConfirmModal() {
  const { closeConfirmModal, getConfirmModalState, selectedSubject, closeSubjectSidebar } = useSubjectContext();
  const { deleteSubject } = useDeleteSubject();
  const router = useRouter();

  const handleCancel = () => closeConfirmModal();

  async function handleDelete() {
    await deleteSubject(selectedSubject.id);
    closeConfirmModal();
    closeSubjectSidebar();
    router.refresh();
  }

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
            <Button bg={"purple.400"} _hover={{ bg: "purple.300" }} onClick={handleCancel}>Cancelar</Button>
            <Button bg={"red.500"} _hover={{ bg: "red.400" }} onClick={handleDelete}>Excluir</Button>
          </Flex>
        </Stack>
      </Center>
    </Presence>
  )
}