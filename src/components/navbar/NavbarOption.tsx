import { Button, Image } from "@chakra-ui/react";

import { NavbarOptionProps } from "@/src/types/Navbar";

export function NavbarOption({ image, text }: NavbarOptionProps) {
  return (
    <Button
      bg="transparent"
      _hover={{ bg: "purple.500" }}
      display="flex"
      justifyContent="flex-start"
      gap={3}
    >
      <Image src={image} boxSize="20px" />
      {text}
    </Button>
  );
}
