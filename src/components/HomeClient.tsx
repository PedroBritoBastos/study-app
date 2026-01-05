'use client';

import { Flex, Text, Presence, Box } from "@chakra-ui/react";
import { Modal } from "./Modal";
import { Button as CreateButton } from "./Button";
import { useModal } from "../hooks/useModal";

export function HomeClient() {
  const { open, updateModalState } = useModal();

  return (
    <Box>
      <Flex align="center" mb={8} gap={6}>
        <Text
          fontSize="3xl"
          fontWeight="medium"
          color="purple.800"
        >
          Conteúdos
        </Text>

        <CreateButton handleClick={updateModalState} />
      </Flex>

      <Presence present={open}>
        <Modal handleClick={updateModalState} />
      </Presence>
    </Box>
  );
}
