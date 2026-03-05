"use client"

import { IconButton } from "@chakra-ui/react"
import { Trash } from "lucide-react"

interface Props {
   isTaskChecked: boolean;
}

export function DeleteButton({ isTaskChecked }: Props) {
   return (
      <IconButton size={"sm"} bg={isTaskChecked ? "gray.100" : "white"} color={"purple.700"} boxShadow={"md"} _hover={{ bg: "purple.600", color: "white" }}>
         <Trash />
      </IconButton>
   )
}