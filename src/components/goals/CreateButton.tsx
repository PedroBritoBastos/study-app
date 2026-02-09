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

  const router = useRouter();

  async function handleCreate() {
    try {
      const response = await create(goalTitle);
      setGoalTitle("");
      router.refresh();
      setCreateMode(false);
    } catch (error) {
      console.log(error.message)
    }
  }

  function handleCancel(e) {
    e.stopPropagation();
    setCreateMode(false)
  }

  return <Card.Root {...styles.cardRoot} {...(createMode && styles.createMode)} onClick={() => setCreateMode(true)} >
    {createMode ? <>
      <Field.Root>
        <Field.Label {...styles.createLabel}>Nome da meta</Field.Label>
        <Input type="text" value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} />
      </Field.Root>
      <Flex {...styles.createModeButtonContainer}>
        <Button {...styles.createModeAddButton} onClick={handleCreate}>Adicionar</Button>
        <Button {...styles.createModeCancelButton} onClick={handleCancel}>Cancelar</Button>
      </Flex>
    </> : <>
      < Plus {...styles.icon} />
      < Text {...styles.text}> Criar nova meta</Text >
    </>}
  </Card.Root >
}