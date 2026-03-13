import { Button, Text, Dialog } from "@chakra-ui/react";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export function SaveScheduleWarning({
  open,
  handleClose
}: Props) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title textAlign={"center"} width={"100%"}>Nenhuma tarefa criada</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Text textAlign={"center"}>
              Por favor, crie pelo menos uma tarefa para salvar o cronograma.
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="outline" size="sm" onClick={handleClose}>Ok</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}