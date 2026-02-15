"use client"

import { Stack, Text, Icon, Flex, Input } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import { getDeadline } from "@/src/services/goalService";
import { formatDate } from "@/src/utilities/dateUtils";

import { styles } from "@/styles/datePicker/datePicker.styles";

export function DatePicker({ goalId }: { goalId: string }) {

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
  }, []);

  return (
    <Stack {...styles.container}>
      <Text {...styles.text}>Terminar até:</Text>
      <Flex {...styles.calendarContainer}>
        <Input {...styles.dateInput} type="date" value={deadline} />
      </Flex>
    </Stack>
  )


}