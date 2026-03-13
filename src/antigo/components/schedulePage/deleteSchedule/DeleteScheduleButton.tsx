"use client"

import { IconButton, Dialog, Portal, Button, Flex, Text } from "@chakra-ui/react"
import { Trash2 } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteSchedule } from "@/src/antigo/services/scheduleService";

const styles = {
   container: {
      bg: "white",
      width: "fit-content",
      rounded: "full",
      color: "purple.800",
      boxShadow: "md",
      _hover: {
         bg: "purple.600",
         color: "white"
      }
   }
}

interface Props {
   scheduleDate: string;
   scheduleId: string;
   quantityOfTasks: number;
}

export function DeleteScheduleButton({ scheduleDate, quantityOfTasks, scheduleId }: Props) {
   const [present, setPresent] = useState(false);

   const router = useRouter();

   const handleOpenDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setPresent(true);
   }

   const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setPresent(false);
   }

   const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!scheduleId) return;

      try {
         const response = await deleteSchedule(scheduleId);
         router.refresh();
         setPresent(false);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <Dialog.Root open={present}>
         <IconButton {...styles.container} size={"md"} onClick={handleOpenDialog}>
            <Trash2 />
         </IconButton>
         <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
               <Dialog.Content>
                  <Dialog.Header justifyContent={"center"}>
                     <Dialog.Title>Excluir cronograma?</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                     <Text textAlign={"center"} my={1}>{`Cronograma do dia ${scheduleDate}`}</Text>
                     <Text textAlign={"center"} my={5}>{`Serão excluídas: ${quantityOfTasks} tarefas`}</Text>
                     <Flex justifyContent={"flex-end"} gap={3}>
                        <Button variant={"outline"} size={"sm"} onClick={handleCancel}>Cancelar</Button>
                        <Button colorPalette={"purple"} size={"sm"} onClick={handleDelete}>Excluir</Button>
                     </Flex>
                  </Dialog.Body>
               </Dialog.Content>
            </Dialog.Positioner>
         </Portal>
      </Dialog.Root>

   )
}

