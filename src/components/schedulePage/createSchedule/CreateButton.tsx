"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Field,
  Input,
  Stack,
  Flex,
  Span
} from "@chakra-ui/react"
import { Task } from "./Task"
import { SaveScheduleWarning } from "./SaveScheduleWarning"

import { createSchedule } from "@/src/services/scheduleService"
import { ScheduleProps } from "@/src/types/schedule"
import { formatDateForInput } from "@/src/utilities/dateUtils"

interface Props {
  open: boolean;
  handleCloseDialog: () => void;
  columnDate?: string;
}

export function CreateButton({
  open,
  handleCloseDialog,
  columnDate
}: Props) {
  const router = useRouter();

  const [scheduleDate, setScheduleDate] = useState(columnDate && formatDateForInput(columnDate)); // data do cronograma
  const [tasks, setTasks] = useState<{ name: string, endTime: string }[]>([]); // lista de tarefas
  const [taskName, setTaskName] = useState(""); // nome da tarefa a ser criada
  const [taskEndTime, setTaskEndTime] = useState(""); // horário de término da tarefa a ser criada
  const [openSaveScheduleWarning, setOpenSaveScheduleWarning] = useState(false); // abre o warning
  const [emptyTaskNameInputWarning, setEmptyTaskNameInputWarning] = useState(false);

  const handleAddTask = () => {
    if (taskName.length === 0) {
      setEmptyTaskNameInputWarning(true);
      return;
    }

    const task = {
      name: taskName,
      endTime: taskEndTime
    }

    const tasklist = [...tasks, task];
    setTasks(tasklist);

    setTaskName("");
    setTaskEndTime("");
    setEmptyTaskNameInputWarning(false);
  }

  const handleClose = () => {
    setTasks([]);
    setTaskName("");
    setTaskEndTime("");
    setScheduleDate(columnDate && formatDateForInput(columnDate));
    setEmptyTaskNameInputWarning(false);
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

  const onScheduleDateInputChange = (e) => {
    setScheduleDate(e.target.value);
    setTasks([]);
    setTaskName("");
    setTaskEndTime("");
  }

  const handleRemoveTask = (taskIndex: number): void => {
    setTasks(prev => prev.filter((_, index) => index !== taskIndex))
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
                  onChange={onScheduleDateInputChange}
                />
              </Field.Root>

              <Flex mb={5} alignItems={"center"} justifyContent={"space-between"} gap={4}>
                <Field.Root flex={3}>
                  <Field.Label
                    color={scheduleDate ? "black" : "gray.200"}
                  >
                    Criar tarefa
                    {emptyTaskNameInputWarning && <Span ml={2} fontSize={"xs"} color={"red.400"}>Nome da tarefa é obrigatório</Span>}
                  </Field.Label>
                  <Input
                    type="text"
                    placeholder="nome da tarefa"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    disabled={scheduleDate ? false : true}
                  />
                </Field.Root>

                <Field.Root width={"fit-content"} flex={1}>
                  <Field.Label
                    color={scheduleDate ? "black" : "gray.200"}
                  >{"Horário (opcional)"}</Field.Label>
                  <Input
                    type="time"
                    value={taskEndTime}
                    onChange={(e) => setTaskEndTime(e.target.value)}
                    disabled={scheduleDate ? false : true}
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
                  disabled={scheduleDate ? false : true}
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
                  disabled={scheduleDate ? false : true}
                >
                  Salvar
                </Button>

              </Flex>


              {/* tarefas adicionadas */}
              <Stack h={"300px"} bg={"gray.200"} borderRadius={"md"} p={3} overflowY={"auto"}>
                {tasks.map((task, index) => (
                  <Task
                    key={index}
                    name={task.name}
                    endTime={task.endTime}
                    taskIndex={index}
                    onRemoveTask={handleRemoveTask}
                  />
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