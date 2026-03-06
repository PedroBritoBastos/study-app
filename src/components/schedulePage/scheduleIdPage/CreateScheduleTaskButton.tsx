import { Dialog, Button, Portal, Field, Input, Flex } from "@chakra-ui/react"

export function CreateScheduleTaskButton() {
   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <Button>
               criar
            </Button>
         </Dialog.Trigger>
         <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
               <Dialog.Content>
                  <Dialog.Header>
                     <Dialog.Title>Nova tarefa</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                     <Field.Root>
                        <Field.Label>Nome da tarefa</Field.Label>
                        <Input type="text" mb={6} />
                     </Field.Root>
                     <Field.Root>
                        <Field.Label>{"Horário (opcional)"}</Field.Label>
                        <Input type="time" mb={6} w={"fit-content"} />
                     </Field.Root>
                     <Flex gap={3} justifyContent={"flex-end"}>
                        <Dialog.ActionTrigger asChild>
                           <Button variant={"outline"}>
                              Cancelar
                           </Button>
                        </Dialog.ActionTrigger>
                        <Button colorPalette={"purple"}>
                           Salvar
                        </Button>
                     </Flex>
                  </Dialog.Body>
               </Dialog.Content>
            </Dialog.Positioner>
         </Portal>
      </Dialog.Root>
   )
}