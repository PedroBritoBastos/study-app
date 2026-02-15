"use client"

import { Stack, Text, Icon, Flex, Input } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import { getDeadline, updateDeadline } from "@/src/services/goalService";

import { styles } from "@/styles/datePicker/datePicker.styles";

interface Props {
  goalId: string;
  updateDeadlineState: (goalId: string, newDeadline: string) => void;
}

export function DatePicker({
  goalId,
  updateDeadlineState
}: Props) {

  // estado que guarda a data do prazo
  const [deadline, setDeadline] = useState("");

  // faz fetch para trazer o prazo da meta quando renderiza
  useEffect(() => {
    async function fetchDeadline() {
      const response = await getDeadline(goalId);

      // converte para YYYY-MM-DD corretamente
      const isoDate = new Date(response.deadline)
        .toISOString()
        .split("T")[0];

      setDeadline(isoDate);
    }

    fetchDeadline();
  }, [goalId]);

  // atualiza o estado quando o valor do input muda
  async function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = e.target.value;
    const response = await updateDeadline(goalId, newDate);
    updateDeadlineState(goalId, newDate);
    setDeadline(newDate);
  }

  return (
    <Stack {...styles.container}>
      <Text {...styles.text}>Terminar até:</Text>
      <Flex {...styles.calendarContainer}>
        <Input {...styles.dateInput}
          type="date"
          value={deadline}
          onChange={handleDateChange}
        />
      </Flex>
    </Stack>
  )


}