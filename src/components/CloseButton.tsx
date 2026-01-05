import { Button, Image } from "@chakra-ui/react";

import { ButtonProps } from "../types/Button";

export function CloseButton({ handleClick }: ButtonProps) {

  return (
    <Button onClick={handleClick} d="flex" bg="transparent">
      <Image src="/delete-icon.png" />
    </Button>
  )
}