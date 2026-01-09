"use client";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Button, Image, Stack
} from "@chakra-ui/react";
import { MoveRight, Trash2 } from "lucide-react";


// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext";
import { useDeleteSubject } from "@/src/hooks/useDeleteSubject";

export function SubjectSidebar() {
  const { deleteSubject } = useDeleteSubject();
  const {
    open,
    selectedSubject,
    closeSubjectSidebar,
    openConfirmModal
  } = useSubjectContext();

  if (!selectedSubject) return null;

  // abre o modal
  async function handleClick() {
    openConfirmModal();
  }

  return (
    <Stack
      w={{ base: "100%", md: "380px" }}
      h="100vh"
      bg="white"
      pos="fixed"
      top={0}
      right={0}
      zIndex={10}
      boxShadow="xl"
      borderLeft="1px solid"
      borderColor="gray.200"
      px={6}
      py={5}
      transform={open ? "translateX(0)" : "translateX(100%)"}
      opacity={open ? 1 : 0}
      transition="
        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.2s ease-in-out
      "
      pointerEvents={open ? "auto" : "none"}
      willChange="transform, opacity"
      justify={"space-between"}
    >
      <Box>
        {/* Header */}
        <Flex direction="column" gap={1} mb={6}>
          <Flex align="center" justify="space-between">
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              color="purple.700"
            >
              {selectedSubject.title}
            </Text>

            <IconButton
              aria-label="Fechar"
              size="lg"
              variant="ghost"
              onClick={closeSubjectSidebar}
            >
              <MoveRight size={25} />
            </IconButton>
          </Flex>

          {/* Data */}
          <Flex align={"center"} gap={1} mt={3}>
            <Image src={"/createdAt.png"} alt="created at" />
            <Text fontSize="sm" color="gray.500">
              Criado em {selectedSubject.currentDate}
            </Text>
          </Flex>

        </Flex>

        {/* Conteúdo */}
        <Text fontSize={"lg"} color={"purple.700"}>Descrição</Text>
        <Text
          fontSize="sm"
          color="gray.600"
          lineHeight="tall"
          whiteSpace="pre-wrap"
          mt={5}
        >
          {selectedSubject.content}
        </Text>
      </Box>

      <Button onClick={handleClick} w={"fit-content"} mb={5} bg={"red.500"} _hover={{ bg: "red.400" }}>
        <Trash2 />
        Excluir
      </Button>
    </Stack >
  );
}

