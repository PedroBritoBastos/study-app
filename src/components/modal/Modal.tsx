'use client'

import {
  Fieldset,
  Field,
  Input,
  Textarea,
  Flex,
  Button,
  Presence
} from "@chakra-ui/react";
import { CloseButton } from "../button/CloseButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useModalContext } from "../../hooks/useModalContext";
import { useCreateSubject } from "../../hooks/useCreateSubject";

export function Modal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { open, updateModalState } = useModalContext();
  const { createSubject } = useCreateSubject();
  const router = useRouter();

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    if (!title || !content) return;

    const subjectData = { title, content };
    await createSubject(subjectData);

    // limpa os campos
    setTitle("");
    setContent("");

    // atualiza pagina
    router.refresh();
    updateModalState();
  }

  return (
    <Presence present={open}>
      <Fieldset.Root
        size="lg"
        w={550}
        h={600}
        ml={100}
        mt={100}
        bgColor="white"
        p={10}
        borderRadius="md"
        boxShadow="md"
        d="flex"
        flexDirection="column"
        position="absolute"
        bottom={10}
        left={40}
        zIndex={1}
      >
        <Flex align="center" justify="space-between">
          <Fieldset.Legend
            fontSize="xl"
            color="purple.700"
            fontWeight="bold"
          >
            Novo conteúdo
          </Fieldset.Legend>

          <CloseButton />
        </Flex>

        {/* Título */}
        <Field.Root gap={5}>
          <Field.Label color="gray.500">
            Conteúdo
          </Field.Label>
          <Input
            name="title"
            bg="gray.100"
            fontWeight="semibold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Field.Root>

        {/* Descrição */}
        <Field.Root
          flex={1}
          d="flex"
          flexDirection="column"
          gap={5}
        >
          <Field.Label color="gray.500">
            Descrição
          </Field.Label>
          <Textarea
            name="description"
            placeholder="Descrição"
            flex={1}
            bg="gray.100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Field.Root>

        <Button
          bgColor="purple.400"
          px={8}
          py={4}
          onClick={handleSubmit}
        >
          Criar
        </Button>
      </Fieldset.Root>
    </Presence>
  );
}
