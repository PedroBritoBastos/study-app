"use client"

import { IconButton } from "@chakra-ui/react"
import { Trash } from "lucide-react"

import { deleteScheduleTask } from "@/src/services/scheduleService"
import { useRouter } from "next/navigation"

interface Props {
   isTaskChecked: boolean;
   scheduleId: string;
   taskId: string;
}

export function DeleteButton({
   isTaskChecked,
   scheduleId,
   taskId
}: Props) {
   const router = useRouter();

   const handleDeleteTask = async () => {
      try {
         const response = await deleteScheduleTask(scheduleId, taskId);
         router.refresh();
      } catch (error) {
         console.log("Error: " + error)
      }
   }

   return (
      <IconButton
         size={"sm"}
         bg={isTaskChecked ? "gray.100" : "white"}
         color={"purple.700"}
         boxShadow={"md"}
         _hover={{ bg: "purple.600", color: "white" }}
         onClick={handleDeleteTask}
      >
         <Trash />
      </IconButton>
   )
}