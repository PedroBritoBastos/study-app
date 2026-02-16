"use client"

import { Card, Text, Field, Input, Button, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

import { styles } from "@/styles/goals/createButton.styles";
import { useCreateButton } from "@/src/hooks/goalClient/useCreateButton";

export function CreateButton() {

  const {
    createMode,
    setCreateMode,
    goalTitle,
    setGoalTitle,
    deadline,
    setDeadline,
    handleCreate,
    handleCancel,
  } = useCreateButton();

  return (
    <Card.Root
      {...styles.cardRoot}
      {...(createMode && styles.createMode)}
      onClick={() => setCreateMode(true)}
    >
      {createMode ? (
        <>
          <Field.Root>
            <Field.Label {...styles.createLabel}>Título</Field.Label>
            <Input
              {...styles.input}
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
            <Button
              {...styles.createModeCancelButton}
              onClick={handleCancel}
            >
              Cancelar
            </Button>

            <Button
              {...styles.createModeAddButton}
              onClick={handleCreate}
            >
              Adicionar
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Plus {...styles.icon} />
          <Text {...styles.text}> Criar nova meta</Text>
        </>
      )}
    </Card.Root>
  );
}
