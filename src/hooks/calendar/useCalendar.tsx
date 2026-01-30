import { useState } from "react";

// types
import { DayType } from "@/src/types/calendar";

export function useCalendar() {
  // estado armazenando a data atual
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // estado armazenando o conteudo selecionado
  const [selectedDay, setSelectedDay] = useState<DayType>({ day: new Date(), reviews: [] });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthString = currentDate.toLocaleDateString("pt-BR", {
    month: "long",
  });

  // vai para o proximo mes
  function handleNextMonth() {
    setCurrentDate(prev =>
      new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }

  // vai para o mes anterior
  function handlePrevMonth() {
    setCurrentDate(prev =>
      new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }

  // atualiza o state do dia selecionado
  function selectDay(day: DayType) {
    setSelectedDay(day);
  }

  // retorna o dia selecionado
  function getSelectedDay(): DayType {
    return selectedDay;
  }

  return {
    year,
    month,
    monthString,
    handleNextMonth,
    handlePrevMonth,
    selectDay,
    getSelectedDay
  };
}
