'use client';

import { Flex, Text, Box } from "@chakra-ui/react";

// components
import { Modal } from "../modal/Modal";
import { Button as CreateButton } from "../button/Button";
import { ReviewsList } from "./ReviewsList";

// provider
import { ModalContextProvider } from "@/src/context/ModalContext";

export function HomeClient() {

  return (
    <Box>
      <ModalContextProvider>
        <Flex align="center" mb={8} gap={6} pos={"relative"}>
          <Text
            fontSize="3xl"
            fontWeight="medium"
            color="purple.800"
          >
            Conteúdos
          </Text>
          <CreateButton />
          <ReviewsList />
        </Flex>
        <Modal />
      </ModalContextProvider>
    </Box>
  );
}

