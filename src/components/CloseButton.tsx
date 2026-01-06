import { Button, Image } from "@chakra-ui/react";

import { ButtonProps } from "../types/Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function CloseButton() {
  const { updateModalState } = useContext(ModalContext);

  return (
    <Button onClick={updateModalState} d="flex" bg="transparent">
      <Image src="/delete-icon.png" />
    </Button>
  )
}