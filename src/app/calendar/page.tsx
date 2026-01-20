'use client'

import { useEffect, useState } from "react";

// components
import { Flex, Text, Grid, Button, Icon } from "@chakra-ui/react";
import { CalendarDay } from "@/src/components/calendar/CalendarDay";
import { Sidebar } from "@/src/components/calendar/Sidebar";

// utils
import { getDaysOfMonth } from "@/src/utilities/dateUtils";

// types
import { SubjectProps } from "@/src/types/Subject";

// provider
import { DaySidebarContextProvider } from "@/src/context/DaySidebarContext";

// hooks
import { useCalendar } from "@/src/hooks/useCalendar";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function CalendarPage() {
  // recuperando os estados para manter a data pressionada ativa
  const { activeDay, setActiveDay } = useCalendar();

  // subjects
  const [subjects, setSubjects] = useState<SubjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  // data atual (inicialmente null para evitar hydration error)
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  // define data SOMENTE no client
  useEffect(() => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
  }, []);

  // busca subjects
  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await fetch("/api/subjects");

        if (!response.ok) {
          throw new Error("Erro ao buscar subjects");
        }

        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSubjects();
  }, []);

  if (loading || !currentDate) {
    return <Text>Carregando...</Text>;
  }

  function handlePrevMonth() {
    setCurrentDate(prev =>
      prev ? new Date(prev.getFullYear(), prev.getMonth() - 1, 1) : prev
    );
  }

  function handleNextMonth() {
    setCurrentDate(prev =>
      prev ? new Date(prev.getFullYear(), prev.getMonth() + 1, 1) : prev
    );
  }

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const days = getDaysOfMonth(currentYear, currentMonth);

  const monthName = currentDate.toLocaleDateString("pt-BR", {
    month: "long",
  });

  const year = currentYear;
  const monthLabel = `${monthName}, ${year}`;

  const styles = {
    container: {
      flex: 1,
      maxH: "100vh",
      flexDirection: "column",
      bg: "#ecebf3ff",
    },
    buttonsContainer: {
      justify: "space-evenly",
      align: "center",
      pt: 5,
      text: {
        fontSize: "3xl",
        fontWeight: "medium",
        color: "purple.800",
        textAlign: "center",
        textTransform: "capitalize",
      },
    },
    grid: {
      flex: 1,
      templateColumns: "repeat(8, 1fr)",
      templateRows: "repeat(4, 1fr)",
      gap: 4,
      p: 8,
      minH: 0,
    },
  };

  return (
    <DaySidebarContextProvider>
      <Flex {...styles.container}>
        <Flex {...styles.buttonsContainer}>
          <Button onClick={handlePrevMonth} bg="transparent" rounded="full" _hover={{ bg: "purple.300" }}>
            <Icon size="2xl" color="purple.800" _hover={{ color: "white" }}>
              <ChevronsLeft />
            </Icon>
          </Button>

          <Text {...styles.buttonsContainer.text}>
            {monthLabel}
          </Text>

          <Button onClick={handleNextMonth} bg="transparent" rounded="full" _hover={{ bg: "purple.300" }}>
            <Icon size="2xl" color="purple.800" _hover={{ color: "white" }}>
              <ChevronsRight />
            </Icon>
          </Button>
        </Flex>

        <Grid {...styles.grid}>
          {days.map(day => (
            <CalendarDay
              key={day.toISOString()}
              date={day}
              subjects={subjects}
              activeDay={activeDay}
              setActiveDay={setActiveDay}
            />
          ))}
        </Grid>
        <Sidebar />
      </Flex>
    </DaySidebarContextProvider>
  );
}
