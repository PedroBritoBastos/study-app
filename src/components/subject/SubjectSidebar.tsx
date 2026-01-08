"use client";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Button
} from "@chakra-ui/react";
import { X } from "lucide-react";

// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext";
import { useDeleteSubject } from "@/src/hooks/useDeleteSubject";
import { useRouter } from "next/navigation";

export function SubjectSidebar() {
  const { deleteSubject } = useDeleteSubject();
  const router = useRouter();
  const {
    open,
    selectedSubject,
    closeSubjectSidebar,
  } = useSubjectContext();

  if (!selectedSubject) return null;

  async function handleClick() {
    await deleteSubject(selectedSubject.id);
    router.refresh();
    closeSubjectSidebar();
  }

  return (
    <Box
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
    >
      {/* Header */}
      <Flex direction="column" gap={1} mb={6}>
        <Flex align="center" justify="space-between">
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="purple.700"
          >
            {selectedSubject.title}
          </Text>

          <IconButton
            aria-label="Fechar"
            size="sm"
            variant="ghost"
            onClick={closeSubjectSidebar}
          >
            <X size={18} />
          </IconButton>
        </Flex>

        {/* Data */}
        <Text fontSize="xs" color="gray.500">
          Criado em {selectedSubject.currentDate}
        </Text>
      </Flex>

      {/* Conteúdo */}
      <Text
        fontSize="sm"
        color="gray.600"
        lineHeight="tall"
        whiteSpace="pre-wrap"
      >
        {selectedSubject.content}
      </Text>

      <Button onClick={handleClick}>
        Deletar
      </Button>
    </Box>
  );
}

