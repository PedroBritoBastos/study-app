"use client"

import { Card, Stack, Progress, Text, Span, Flex, Icon } from "@chakra-ui/react"
import { Task } from "./Task";

import { styles } from "@/styles/goals/goal.styles";
import { CircleCheckBig, Ellipsis, Calendar } from "lucide-react";

import { GoalType } from "@/src/types/goal";
import { useState, useEffect } from "react";

import { getTasks } from "@/src/services/taskService";

interface Props {
  goal: GoalType;
  selectGoal: (goal: GoalType) => void;
  openSidebar: () => void;
  checkedTask: { taskId: string, isChecked: boolean };
  updateCheckedTask: (taskId: string, isChecked: boolean) => void;
  refresh: { taskId: string, action: string };
}

export function Goal({ goal, selectGoal, openSidebar, checkedTask, refresh }: Props) {

  // state que guarda as tasks que sao exibidas
  const [tasks, setTasks] = useState(goal.tasks);

  // toda vez que checkedTask mudar, deve fazer fetch para pegar as tasks atualizadas
  useEffect(() => {

    async function fetchTasks() {
      const response = await getTasks(goal.id);
      setTasks(response);
    }
    fetchTasks();

    console.log("componente GOAL re-renderizado")

  }, [checkedTask, refresh])

  function handleClick() {
    selectGoal(goal);
    openSidebar();
  }

  const allTasks = tasks.length;
  const checkedTasks = tasks.filter((task) => task.isChecked).length;

  // tarefas visiveis
  const visibleTasks = tasks.slice(0, 3);
  const remainingTasks = tasks.length - 3;

  return <Card.Root  {...styles.cardRoot} onClick={handleClick}>
    <Card.Header {...styles.cardHeader}>
      <Text {...styles.goalTitle} {...((checkedTasks / allTasks) === 1 && styles.goalTitleCompleted)}>{goal.title || "Meta"}</Text>
      <Icon {...((checkedTasks / allTasks) === 1 && styles.goalTitleCompleted)}>
        {(checkedTasks / allTasks) === 1 ? <CircleCheckBig /> : <Ellipsis />}
      </Icon>
    </Card.Header>

    {/* Prazo */}
    <Flex {...styles.deadline.container}>
      <Icon size="sm">
        <Calendar />
      </Icon>
      2 dias restantes
    </Flex>

    {/* stack de tasks */}
    <Stack {...styles.tasksStack}>

      {/* apenas as 3 primeiras tasks */}
      {visibleTasks.map((task) => (
        <Task key={task.id} task={task} isChecked={task.isChecked} />
      ))}

      {/* quantidade de tasks restantes quando houver mais de 3 tasks */}
      {tasks.length > 3 && (
        <Text fontSize="sm" color="gray.500">
          ..mais {remainingTasks}
        </Text>
      )}
    </Stack>

    {/* Barra de progresso e indicação das tarefas feitas */}
    <Flex {...styles.progressContainer} >
      <Progress.Root  {...styles.progressBar.progressRoot} value={(checkedTasks / allTasks) * 100} size={"lg"}>
        <Progress.Track {...styles.progressBar.progressTrack} >
          <Progress.Range  {...styles.progressBar.range} {...((checkedTasks / allTasks) === 1 && styles.progressBar.completed)}>
            {Math.round((checkedTasks / allTasks) * 100) || 0}%
          </Progress.Range>
        </Progress.Track>
      </Progress.Root>

      <Text {...styles.completedTasks} {...((checkedTasks / allTasks) === 1 && styles.completedAllTasks)}><Span {...styles.completedTasksSpan}>{checkedTasks}</Span> / {allTasks}</Text>
    </Flex>

  </Card.Root>
}