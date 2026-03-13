"use client"

import { Flex, Text, Icon } from "@chakra-ui/react";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";
import { Clock } from "lucide-react";

import { useState } from "react";
import { formatTime } from "@/src/utilities/dateUtils";

interface Props {
   name: string;
   isChecked: boolean;
   taskId: string;
   scheduleId: string;
   executionTime?: Date | null;
}

const styles = {
   container: {
      borderRadius: "md",
      justifyContent: "space-between",
      boxShadow: "sm"
   },
   timeContainer: {
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      bg: "purple.600",
      color: "white",
      borderRadius: "md",
      flex: 1
   },
   taskContainer: {
      py: 3,
      px: 6,
      flex: 10,
      justifyContent: "space-between",
      alignItems: "center"
   },
   optionsContainer: {
      alignItems: "center",
      gap: 4
   }
}

export function Task({
   name,
   isChecked,
   taskId,
   scheduleId,
   executionTime
}: Props) {
   const [checked, setChecked] = useState<boolean>(false);

   const handleCheck = () => {
      setChecked(prev => !prev);
   }

   return (
      <Flex {...styles.container} bg={checked ? "gray.100" : "white"}>

         {/* horario */}
         <Flex {...styles.timeContainer}>
            <Icon size={"md"}>
               <Clock />
            </Icon>
            <Text>{executionTime ? formatTime(executionTime) : "--:--"}</Text>
         </Flex>

         <Flex {...styles.taskContainer}>
            {/* nome da task */}
            <Text color={checked ? "gray.400" : "gray.700"} ml={3} textDecoration={checked ? "line-through" : "none"}>{name}</Text>

            {/* options */}
            <Flex {...styles.optionsContainer}>
               <CheckButton onCheck={handleCheck} />
               <DeleteButton
                  isTaskChecked={checked}
                  scheduleId={scheduleId}
                  taskId={taskId}
               />
            </Flex>
         </Flex>

      </Flex>
   )
}