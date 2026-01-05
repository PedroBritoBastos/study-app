import { Button as ChakraButton, Image } from "@chakra-ui/react";

export function Button({ handleClick }) {
  return (
    <ChakraButton bgColor="purple.400" px={8} py={4} d="flex" alignItems="center" onClick={handleClick}>
      <Image src="/add-icon.png" alt="Adicionar" />
      Adicionar
    </ChakraButton>
  )
}