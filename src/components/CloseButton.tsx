import { Button, Image } from "@chakra-ui/react";
import { useModalContext } from "../hooks/useModalContext";

export function CloseButton() {
  const { updateModalState } = useModalContext();

  return (
    <Button onClick={updateModalState} d="flex" bg="transparent">
      <Image src="/delete-icon.png" />
    </Button>
  )
}