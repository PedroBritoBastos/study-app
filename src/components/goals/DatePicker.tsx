"use client"

import { useState } from "react"
import { DatePicker as DatePickerReact, registerLocale, setDefaultLocale } from "react-datepicker"
import { Stack, Text, Icon, Flex } from "@chakra-ui/react";
import { Calendar } from "lucide-react";
import { ptBR } from 'date-fns/locale/pt-BR';

import { styles } from "@/styles/datePicker/datePicker.styles";

registerLocale('pt-br', ptBR);

import "react-datepicker/dist/react-datepicker.css";

export function DatePicker() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <Stack {...styles.container}>
      <Text {...styles.text}>Terminar até:</Text>
      <Flex {...styles.calendarContainer}>
        <Icon size="sm">
          <Calendar />
        </Icon>
        <DatePickerReact selected={startDate} onChange={(date) => setStartDate(date)} locale={"pt-br"} dateFormat="dd/MM/yyyy" />
      </Flex>
    </Stack>
  )


}