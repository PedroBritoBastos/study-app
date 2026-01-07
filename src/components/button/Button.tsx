import { Button as ChakraButton, Image } from "@chakra-ui/react";
import { useModalContext } from "../../hooks/useModalContext";

export function Button() {
  // pegando a função para abrir o modal do context
  const { updateModalState } = useModalContext();

  return (
    <ChakraButton bgColor="purple.400" px={8} py={4} d="flex" alignItems="center" onClick={updateModalState}>
      <Image src="/add-icon.png" alt="Adicionar" />
      Adicionar
    </ChakraButton>
  )
}