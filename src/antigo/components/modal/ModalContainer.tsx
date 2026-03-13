// styles
import { styles } from "../../styles/modal/modalContainer.styles"

// components
import { Box } from "@chakra-ui/react"

export function ModalContainer({ children }: { children: React.ReactNode }) {
  return <Box {...styles.container}>
    {children}
  </Box>
}