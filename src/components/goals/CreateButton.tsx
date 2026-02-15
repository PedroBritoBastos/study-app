"use client"

import { Card, Text, Field, Input, Button, Flex } from "@chakra-ui/react";

import { styles } from "@/styles/goals/createButton.styles";
import { Plus } from "lucide-react";

import { create } from "@/src/services/goalService";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateButton() {
  const [createMode, setCreateMode] = useState(false);
  const [goalTitle, setGoalTitle] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const router = useRouter();

  async function handleCreate() {
    try {
      const response = await create(goalTitle, deadline);
      setGoalTitle("");
      router.refresh();
      setCreateMode(false);
      setDeadline(new Date());
    } catch (error) {
      console.log(error.message)
    }
  }

  function handleCancel(e) {
    e.stopPropagation();
    setCreateMode(false);
    setDeadline(new Date());
  }

  return <Card.Root {...styles.cardRoot} {...(createMode && styles.createMode)} onClick={() => setCreateMode(true)} >
    {createMode ? <>
      <Field.Root>
        <Field.Label {...styles.createLabel}>Título</Field.Label>
        <Input {...styles.input}
          type="text"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
        />

        <Field.Label {...styles.createLabel}>Prazo</Field.Label>
        <Input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </Field.Root>
      <Flex {...styles.createModeButtonContainer}>
        <Button {...styles.createModeCancelButton} onClick={handleCancel}>Cancelar</Button>
        <Button {...styles.createModeAddButton} onClick={handleCreate}>Adicionar</Button>
      </Flex>
    </> : <>
      < Plus {...styles.icon} />
      < Text {...styles.text}> Criar nova meta</Text >
    </>
    }
  </Card.Root >
}