import { Button, Image } from "@chakra-ui/react";
import { useModalContext } from "../../hooks/useModalContext";

export function CloseButton() {
  const { updateModalState, refreshVerifications } = useModalContext();

  function handleClick() {
    refreshVerifications();
    updateModalState();
  }

  return (
    <Button onClick={handleClick} d="flex" bg="transparent">
      <Image src="/delete-icon.png" />
    </Button>
  )
}