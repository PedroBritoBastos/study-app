// styles
import { styles } from "@/styles/calendar/monthControlButton.styles"

import { Button } from "@chakra-ui/react"


type Props = {
  children: React.ReactNode;
  handleClick: () => void;
}

export function MonthControlButton({ children, handleClick }: Props) {
  return <Button {...styles.button} onClick={() => handleClick()}>{children}</Button>
}