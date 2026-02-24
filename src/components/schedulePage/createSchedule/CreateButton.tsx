"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

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
import { SaveScheduleWarning } from "./SaveScheduleWarning"

import { createSchedule } from "@/src/services/scheduleService"
import { ScheduleProps } from "@/src/types/schedule"


interface Props {
  open: boolean;
  handleCloseDialog: () => void;
}

export function CreateButton({
  open,
  handleCloseDialog,
}: Props) {
  const router = useRouter();

  const [scheduleDate, setScheduleDate] = useState(""); // data do cronograma
  const [tasks, setTasks] = useState<{ name: string, endTime: string }[]>([]); // lista de tarefas
  const [taskName, setTaskName] = useState(""); // nome da tarefa a ser criada
  const [taskEndTime, setTaskEndTime] = useState(""); // horário de término da tarefa a ser criada
  const [openSaveScheduleWarning, setOpenSaveScheduleWarning] = useState(false); // abre o warning

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
    handleCloseDialog();
  }

  const handleSave = () => {

    if (tasks.length === 0) {
      setOpenSaveScheduleWarning(true);
      return;
    }

    const fetchScheduleData = async () => {
      const formattedTasks = tasks.map(task => ({
        title: task.name,
        executionTime: task.endTime ? `1970-01-01T${task.endTime}:00` : undefined
      }));


      try {
        const response: ScheduleProps = await createSchedule({
          scheduleDay: scheduleDate,
          tasks: formattedTasks
        });
        router.refresh()
        handleClose();
      } catch (error) {
        console.error("Erro ao criar cronograma:", error);
      }
    }
    fetchScheduleData();
  }

  const closeWarning = () => {
    setOpenSaveScheduleWarning(false);
  }

  return (
    <Dialog.Root size="md" placement="center" motionPreset="slide-in-bottom" open={open}>

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

              <Flex
                mb={5}
                alignItems={"center"}
                gap={2}
              >
                {/* Botão para adicionar tarefas */}
                <Button
                  bg={"purple.600"}
                  _hover={{ bg: "purple.500" }}
                  size="sm"
                  onClick={handleAddTask}
                  flex={1}
                >
                  Adicionar tarefa
                </Button>

                {/* criar cronograma */}
                <Button
                  bg={"white"}
                  _hover={{ bg: "gray.100" }}
                  color={"purple.700"}
                  size="sm"
                  flex={1}
                  boxShadow={"md"}
                  onClick={handleSave}
                >
                  Salvar
                </Button>

              </Flex>


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

      <SaveScheduleWarning
        open={openSaveScheduleWarning}
        handleClose={closeWarning}
      />
    </Dialog.Root >
  )
}