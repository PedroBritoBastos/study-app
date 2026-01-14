import { Button, Image } from "@chakra-ui/react";

import { NavbarOptionProps } from "@/src/types/Navbar";

export function NavbarOption({ image, text, index, active, setActive }: NavbarOptionProps) {

  return (
    <Button
      bg={active === index ? "purple.500" : "transparent"}
      _hover={{ bg: "purple.500" }}
      display="flex"
      justifyContent="flex-start"
      gap={3}
      onClick={() => setActive(index)}
    >
      <Image src={image} boxSize="20px" />
      {text}
    </Button>
  );
}
