"use client"

import { SidebarContainer } from "./SidebarContainer";
import { CreateTaskButton } from "../button/CreateTaskButton";
import { GoalSidebarTask } from "../goals/GoalSidebarTask";
import { DatePicker } from "../goals/DatePicker";
import { Trash } from "lucide-react";

import { GoalType } from "@/src/types/goal";
import { Text, Stack, Button, Icon, Progress, Span, Flex } from "@chakra-ui/react";

import { styles } from "@/styles/sidebar/goalsSidebar.styles";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { getTasks } from "@/src/services/taskService";
import { deleteGoal } from "@/src/services/goalService";

interface Props {
  closeSidebar: () => void;
  goal: GoalType;
  updateCheckedTask: (taskId: string, isChecked: boolean) => void;
  refreshGoal: (taskId: string, action: string) => void;
}

export function GoalsSidebar({ closeSidebar, goal, updateCheckedTask, refreshGoal }: Props) {
  const router = useRouter();

  // estado para guardar as tasks do goal atual
  const [goalTasks, setGoalTasks] = useState(goal.tasks);

  // estado para monitorar quando uma nova tarefa é adicionada
  const [addedTask, setAddedTask] = useState({});

  // estado para monitorar quando uma tarefa é excluída
  const [deletedTask, setDeletedTask] = useState({});

  // estado para monitorar quando uma tarefa é checada
  const [checkedTask, setCheckedTask] = useState<{
    taskId: string;
    isChecked: boolean;
  } | null>(null);

  // funcao para atualizar os estados para re-renderizar os componentes
  function handleCheckedTask(taskId: string, isChecked: boolean) {
    setCheckedTask({ taskId, isChecked });
    updateCheckedTask(taskId, isChecked); // continua propagando para GoalsClient
  }

  // atualizar o state de task deletada
  function updateDeletedTask(task) {
    setDeletedTask(task);
  }

  // atualizar o sttate de task adicionada
  function handleAddTask(task) {
    setAddedTask(task);
  }

  // toda vez que goal mudar, ou uma nova tarefa é adicionada, o componente deve re-renderizar
  useEffect(() => {
    setGoalTasks(goal.tasks);
  }, [goal])

  // quando uma tarefa for adicionada, o componente deve fazer um fetch para atualizar as tarefas
  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [addedTask]);

  // quando uma tarefa for deletada, o componente deve fazer um fetch para atualizar as tarefas 
  useEffect(() => {
    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }
    fetchTasks();
  }, [deletedTask]);

  // atualiza as tasks toda vez que uma task é checada
  useEffect(() => {
    if (!checkedTask) return;

    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setGoalTasks(response);
    }

    fetchTasks();
  }, [checkedTask]);


  // exclui a meta
  async function handleDeleteGoal() {
    const response = await deleteGoal(goal.id);
    router.refresh();
    closeSidebar();
  }

  // indicadores de tarefas concluidas e totais
  const allTasks = goalTasks.length;
  const checkedTasks = (goalTasks.filter((task) => task.isChecked)).length;

  return <SidebarContainer header={goal.title} closeSidebar={closeSidebar}>
    <Stack {...styles.container}>

      {/* prazo */}
      <DatePicker goalId={goal.id} />

      <Stack>
        {/* tasks em andamento */}
        <Text {...styles.statusText}>Em andamento</Text>

        <Stack {...styles.tasksStack}>

          {(goalTasks.filter((task) => !task.isChecked).map(
            (task) => (
              <GoalSidebarTask
                key={task.id}
                task={task}
                updateDeletedTask={updateDeletedTask}
                updateCheckedTask={handleCheckedTask}
                refreshGoal={refreshGoal}
              />
            )
          ))}

          <CreateTaskButton
            goalId={goal.id}
            updateAddedTask={handleAddTask}
            refreshGoal={refreshGoal}
          />

        </Stack>
      </Stack>

      {/* tasks concluídas */}
      <Stack>
        <Text {...styles.statusText}>Concluídas</Text>
        <Stack {...styles.tasksStack}>

          {(goalTasks.filter((task) => task.isChecked).map((task) => (
            <GoalSidebarTask
              key={task.id}
              task={task}
              updateDeletedTask={updateDeletedTask}
              updateCheckedTask={handleCheckedTask}
              refreshGoal={refreshGoal}
            />
          )))}

        </Stack>
      </Stack>

      {/* indicação do progresso */}
      <Stack {...styles.progressContainer}>
        <Text {...styles.statusText}>Progresso</Text>
        <Text {...styles.progressIndicator} {...((checkedTasks / allTasks) === 1 && styles.progressIndicatorCompleted)}>{checkedTasks} de {allTasks}</Text>

        {/* barra de progresso */}
        <Progress.Root value={(checkedTasks / allTasks) * 100}>
          <Progress.Track {...styles.progressBar.track}>
            <Progress.Range {...styles.progressBar.range} {...((checkedTasks / allTasks) === 1 && styles.progressBar.completed)}>
              {goalTasks.length > 0 && (Math.round((checkedTasks / allTasks) * 100) || 0)}%
            </Progress.Range>
          </Progress.Track>
        </Progress.Root>

        <Text {...styles.statusIndicator}>Status: <Span {...(checkedTasks / allTasks === 1 ? styles.progressIndicatorCompleted : styles.statusIndicatorInProgress)}>{(checkedTasks / allTasks === 1 ? "concluído" : "em andamento")}</Span> </Text>

      </Stack>

      {/* botão de excluir meta */}
      <Button {...styles.deleteButton} onClick={handleDeleteGoal}>
        <Icon size="sm">
          <Trash />
        </Icon>

        Excluir meta
      </Button>
    </Stack>

  </SidebarContainer>
}