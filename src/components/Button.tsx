import { Button as ChakraButton, Image } from "@chakra-ui/react";

import { ButtonProps } from "../types/Button";

export function Button({ handleClick }: ButtonProps) {
  return (
    <ChakraButton bgColor="purple.400" px={8} py={4} d="flex" alignItems="center" onClick={handleClick}>
      <Image src="/add-icon.png" alt="Adicionar" />
      Adicionar
    </ChakraButton>
  )
}