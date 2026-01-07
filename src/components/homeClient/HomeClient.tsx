'use client';

import { Flex, Text, Box } from "@chakra-ui/react";
import { Modal } from "../modal/Modal";
import { Button as CreateButton } from "../button/Button";

import { ModalContextProvider } from "@/src/context/ModalContext";

export function HomeClient() {

  return (
    <Box>
      <ModalContextProvider>
        <Flex align="center" mb={8} gap={6}>
          <Text
            fontSize="3xl"
            fontWeight="medium"
            color="purple.800"
          >
            Conteúdos
          </Text>

          <CreateButton />
        </Flex>
        <Modal />
      </ModalContextProvider>
    </Box>
  );
}

