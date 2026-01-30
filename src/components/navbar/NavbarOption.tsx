import { Button as ChakraButton } from "@chakra-ui/react";
import Link from "next/link";

import { styles } from "@/src/styles/navbar/navbarOption.styles";

type Props = {
  name: string;
  url: string;
  children?: React.ReactNode;
}

export function NavbarOption({ children, name, url }: Props) {
  return <>
    <Link href={url}>
      <ChakraButton  {...styles.button} >
        {children}
        {name}
      </ChakraButton>
    </Link>
  </>
}