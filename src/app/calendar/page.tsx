'use client'

import { useEffect, useState } from "react";

// components
import { Flex, Text, Grid, Button } from "@chakra-ui/react";
import { CalendarDay } from "@/src/components/calendar/CalendarDay";

// utils
import { getDaysOfMonth } from "@/src/utilities/dateUtils";

// types
import { SubjectProps } from "@/src/types/Subject";

export default function CalendarPage() {
  // 🔹 todas as subjects
  const [subjects, setSubjects] = useState<SubjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Estado único controlando mês e ano
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

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

  function handlePrevMonth() {
    setCurrentDate((prev) =>
      new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }

  function handleNextMonth() {
    setCurrentDate((prev) =>
      new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const days = getDaysOfMonth(currentYear, currentMonth);

  // 🔹 Formato: "Mês, Ano"
  const monthName = currentDate.toLocaleDateString("pt-BR", {
    month: "long",
  });

  const year = currentDate.getFullYear();
  const monthLabel = `${monthName}, ${year}`;

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  const styles = {
    container: {
      flex: 1,
      minH: "100vh",
      flexDirection: "column",
      bg: "#ecebf3ff",
    },
    buttonsContainer: {
      justify: "space-evenly",
      align: "center",

      text: {
        fontSize: "3xl",
        fontWeight: "medium",
        color: "purple.800",
        textAlign: "center",
        pt: 5,
        textTransform: "capitalize",
      },
    },
    grid: {
      flex: 1,
      templateColumns: "repeat(8, 1fr)",
      gap: 4,
      p: 8,
    },
  };

  return (
    <Flex {...styles.container}>

      {/* Botões e mês */}
      <Flex {...styles.buttonsContainer}>
        <Button onClick={handlePrevMonth}>Prev</Button>

        <Text {...styles.buttonsContainer.text}>
          {monthLabel}
        </Text>

        <Button onClick={handleNextMonth}>Next</Button>
      </Flex>

      {/* Grid do calendário */}
      <Grid {...styles.grid}>
        {days.map((day) => (
          <CalendarDay
            key={day.toISOString()}
            date={day}
            subjects={subjects} // dados já disponíveis
          />
        ))}
      </Grid>
    </Flex>
  );
}
