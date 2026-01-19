import { Button, Image } from "@chakra-ui/react";

import { NavbarOptionProps } from "@/src/types/Navbar";

import Link from "next/link";

export function NavbarOption({ image, text, index, active, setActive, url }: NavbarOptionProps) {
  return (
    <>
      <Link href={url}>
        <Button
          bg={active === index ? "purple.500" : "transparent"}
          _hover={{ bg: "purple.500" }}
          display="flex"
          justifyContent="flex-start"
          gap={3}
          onClick={() => setActive(index)}
          w={"100%"}
        >
          <Image src={image} boxSize="20px" />
          {text}
        </Button>
      </Link>
    </>

  );
}

