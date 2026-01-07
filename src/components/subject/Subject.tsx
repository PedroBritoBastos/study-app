"use client"
import { Card, Text, Box, Flex, Image } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

// types
import { SubjectProps } from "../../types/Subject";

// hook
import { useSubjectContext } from "@/src/hooks/useSubjectContext";

export function Subject({
  subjectName,
  subjectContent,
  createdAt,
}: SubjectProps) {

  // usa a função para abrir/fechar o componente SubjectSidebar
  // altera o state de open quando clicado
  const { updateSubjectSidebarState } = useSubjectContext();
  const handleClick = () => updateSubjectSidebarState();

  return (
    <Card.Root
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      cursor="pointer"
      onClick={handleClick}
    >
      <Card.Body p={5}>
        {/* Header / Título */}
        <Box
          pb={3}
          mb={3}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Text
            fontSize="lg"
            fontWeight="medium"
            color="purple.700"
          >
            {subjectName}
          </Text>
        </Box>

        {/* Data */}
        <Flex align="center" gap={2} mb={3}>
          <Image
            src="/createdAt.png"
            boxSize="16px"
            opacity={0.7}
          />
          <Tooltip content={`Criado em ${createdAt}`} showArrow contentProps={{ css: { "--tooltip-bg": "colors.purple.700", "padding": "2" } }}>
            <Text fontSize="sm" color="gray.500">
              {createdAt}
            </Text>
          </Tooltip>
        </Flex>

        {/* Conteúdo */}
        <Text
          fontSize="sm"
          color="gray.600"
          lineHeight="tall"
        >
          {subjectContent}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
