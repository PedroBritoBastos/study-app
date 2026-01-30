// types
import { DayType } from "@/src/types/calendar";

export function useDay() {

  // lida com a ação do clique do componente dia
  function handleSelectDay(openSidebar: () => void, selectDay: (day: DayType) => void, day: DayType): void {
    selectDay(day);
    openSidebar();
  }

  return { handleSelectDay }
}