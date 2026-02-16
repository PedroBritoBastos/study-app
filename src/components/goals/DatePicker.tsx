"use client"

import { Stack, Text, Flex, Input } from "@chakra-ui/react";

import { styles } from "@/styles/datePicker/datePicker.styles";
import { useDatePicker } from "@/src/hooks/goalClient/useDatePicker";

interface Props {
  goalId: string;
  updateDeadlineState: (goalId: string, newDeadline: string) => void;
}

export function DatePicker({
  goalId,
  updateDeadlineState
}: Props) {

  const {
    deadline,
    handleDateChange
  } = useDatePicker({
    goalId,
    updateDeadlineState
  });

  return (
    <Stack {...styles.container}>
      <Text {...styles.text}>Terminar até:</Text>
      <Flex {...styles.calendarContainer}>
        <Input
          {...styles.dateInput}
          type="date"
          value={deadline}
          onChange={handleDateChange}
        />
      </Flex>
    </Stack>
  );
}
