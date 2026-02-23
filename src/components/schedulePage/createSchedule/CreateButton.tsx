"use client"

import { useState } from "react"

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Field,
  Input,
  Stack,
  Flex
} from "@chakra-ui/react"
import { Task } from "./Task"

const styles = {

}

export function CreateButton() {

  const [scheduleDate, setScheduleDate] = useState(""); // data do cronograma
  const [tasks, setTasks] = useState([]); // lista de tarefas
  const [taskName, setTaskName] = useState(""); // nome da tarefa a ser criada
  const [taskEndTime, setTaskEndTime] = useState(""); // horário de término da tarefa a ser criada

  return (
    <Dialog.Root size="md" placement="center" motionPreset="slide-in-bottom" >
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Criar cronograma
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner >
          {/* adicionar info */}
          <Dialog.Content >
            <Dialog.Header>
              <Dialog.Title>Novo cronograma</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body>
              <Field.Root mb={5}>
                <Field.Label>Data</Field.Label>
                <Input type="date" w={"fit-content"} />
              </Field.Root>

              <Flex mb={5} alignItems={"center"} justifyContent={"space-between"} gap={4}>
                <Field.Root flex={3}>
                  <Field.Label>Criar tarefa</Field.Label>
                  <Input type="text" placeholder="nome da tarefa" />
                </Field.Root>

                <Field.Root width={"fit-content"} flex={1}>
                  <Field.Label>{"Horário (opcional)"}</Field.Label>
                  <Input type="time" />
                </Field.Root>
              </Flex>

              {/* Botão para adicionar tarefas */}
              <Button bg={"purple.600"} _hover={{ bg: "purple.500" }} size="sm" mb={5}>
                Adicionar tarefa
              </Button>

              {/* tarefas adicionadas */}
              <Stack h={"300px"} bg={"gray.200"} borderRadius={"md"} p={3} overflowY={"auto"}>
              </Stack>
            </Dialog.Body>

          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root >
  )
}