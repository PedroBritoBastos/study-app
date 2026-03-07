import { IconButton } from "@chakra-ui/react"
import { Trash2 } from "lucide-react"

const styles = {
   container: {
      bg: "white",
      width: "fit-content",
      rounded: "full",
      color: "purple.800",
      boxShadow: "md",
      _hover: {
         bg: "gray.100"
      }
   }
}

export function DeleteScheduleButton() {
   return (
      <IconButton {...styles.container} size={"md"}>
         <Trash2 />
      </IconButton>
   )
}