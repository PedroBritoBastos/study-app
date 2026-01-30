import { Button as ChakraButton } from "@chakra-ui/react";
import { styles } from "../../styles/button/button.styles";

type Props = {
  children?: React.ReactNode;
  name: string;
  handleClick: () => void;
  variant?: "base" | "delete";
}

export function Button({ children, name, handleClick, variant }: Props) {
  return <ChakraButton {...styles.button} {...styles.variants[variant || "base"]}
    onClick={() => handleClick()}>
    {children}
    {name}
  </ChakraButton>
}