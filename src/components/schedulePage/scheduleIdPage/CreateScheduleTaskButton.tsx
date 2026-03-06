"use client"

import { Dialog, Button, Portal, Field, Input, Flex } from "@chakra-ui/react"

import { useState } from "react"
import { createScheduleTask } from "@/src/services/scheduleService"

interface Props {
   scheduleId: string;
}

export function CreateScheduleTaskButton({ scheduleId }: Props) {
   const [name, setName] = useState("");
   const [time, setTime] = useState("");

   const handleSave = async () => {
      if (name.length === 0) return;

      const data = {
         title: name,
         executionTime: time
      }

      try {
         const response = await createScheduleTask(data, scheduleId);
         console.log("sucesso: " + response)
      } catch (error) {
         console.log("erro do service: " + error);
      }
   }

   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <Button px={6} size={"sm"} colorPalette={"purple"}>
               criar
            </Button>
         </Dialog.Trigger>
         <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
               <Dialog.Content>
                  <Dialog.Header>
                     <Dialog.Title>Nova tarefa</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                     <Field.Root invalid={(name.length === 0) ? true : false}>
                        <Field.Label>Nome da tarefa</Field.Label>
                        <Field.ErrorText>Campo obrigatório</Field.ErrorText>
                        <Input
                           type="text"
                           mb={6}
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                     </Field.Root>
                     <Field.Root>
                        <Field.Label>{"Horário (opcional)"}</Field.Label>
                        <Input
                           type="time"
                           mb={6}
                           w={"fit-content"}
                           value={time}
                           onChange={(e) => setTime(e.target.value)}
                        />
                     </Field.Root>
                     <Flex gap={3} justifyContent={"flex-end"}>
                        <Dialog.ActionTrigger asChild>
                           <Button variant={"outline"}>
                              Cancelar
                           </Button>
                        </Dialog.ActionTrigger>
                        <Button colorPalette={"purple"} onClick={handleSave}>
                           Salvar
                        </Button>
                     </Flex>
                  </Dialog.Body>
               </Dialog.Content>
            </Dialog.Positioner>
         </Portal>
      </Dialog.Root>
   )
}