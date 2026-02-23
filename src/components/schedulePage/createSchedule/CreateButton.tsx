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
  const [tasks, setTasks] = useState<{ name: string, endTime: string }[]>([]); // lista de tarefas
  const [taskName, setTaskName] = useState(""); // nome da tarefa a ser criada
  const [taskEndTime, setTaskEndTime] = useState(""); // horário de término da tarefa a ser criada

  const handleAddTask = () => {
    const task = {
      name: taskName,
      endTime: taskEndTime
    }

    const tasklist = [...tasks, task];
    setTasks(tasklist);
    setTaskName("");
    setTaskEndTime("");
  }

  const handleClose = () => {
    setTasks([]);
    setTaskName("");
    setTaskEndTime("");
    setScheduleDate("");
  }

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
                <CloseButton
                  size="sm"
                  onClick={handleClose}
                />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body>
              <Field.Root mb={5}>
                <Field.Label>Data</Field.Label>
                <Input
                  type="date"
                  w={"fit-content"}
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                />
              </Field.Root>

              <Flex mb={5} alignItems={"center"} justifyContent={"space-between"} gap={4}>
                <Field.Root flex={3}>
                  <Field.Label>Criar tarefa</Field.Label>
                  <Input
                    type="text"
                    placeholder="nome da tarefa"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </Field.Root>

                <Field.Root width={"fit-content"} flex={1}>
                  <Field.Label>{"Horário (opcional)"}</Field.Label>
                  <Input
                    type="time"
                    value={taskEndTime}
                    onChange={(e) => setTaskEndTime(e.target.value)}
                  />
                </Field.Root>
              </Flex>

              {/* Botão para adicionar tarefas */}
              <Button
                bg={"purple.600"}
                _hover={{ bg: "purple.500" }}
                size="sm"
                mb={5}
                onClick={handleAddTask}
              >
                Adicionar tarefa
              </Button>

              {/* tarefas adicionadas */}
              <Stack h={"300px"} bg={"gray.200"} borderRadius={"md"} p={3} overflowY={"auto"}>
                {tasks.map((task, index) => (
                  <Task key={index} name={task.name} endTime={task.endTime} />
                ))}
              </Stack>
            </Dialog.Body>

          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root >
  )
}