import { IconButton, Dialog, Portal, Button, Flex, Text } from "@chakra-ui/react"
import { Trash2 } from "lucide-react"

const styles = {
   container: {
      bg: "white",
      width: "fit-content",
      rounded: "full",
      color: "purple.800",
      boxShadow: "md",
      _hover: {
         bg: "purple.600",
         color: "white"
      }
   }
}

interface Props {
   scheduleDate: string;
   quantityOfTasks: number;
}

export function DeleteScheduleButton({ scheduleDate, quantityOfTasks }: Props) {
   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <IconButton {...styles.container} size={"md"} onMouseEnter={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
               <Trash2 />
            </IconButton>
         </Dialog.Trigger>
         <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
               <Dialog.Content>
                  <Dialog.Header justifyContent={"center"}>
                     <Dialog.Title>Excluir cronograma?</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                     <Text textAlign={"center"} my={1}>{`Cronograma do dia ${scheduleDate}`}</Text>
                     <Text textAlign={"center"} my={5}>{`Serão excluídas: ${quantityOfTasks} tarefas`}</Text>
                     <Flex justifyContent={"flex-end"} gap={3}>
                        <Dialog.ActionTrigger asChild>
                           <Button variant={"outline"} size={"sm"}>Cancelar</Button>
                        </Dialog.ActionTrigger>
                        <Button colorPalette={"purple"} size={"sm"}>Excluir</Button>
                     </Flex>
                  </Dialog.Body>
               </Dialog.Content>
            </Dialog.Positioner>
         </Portal>
      </Dialog.Root>

   )
}