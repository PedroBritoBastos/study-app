"use client"

import { IconButton } from "@chakra-ui/react"
import { Trash } from "lucide-react"

export function DeleteButton() {
   return (
      <IconButton size={"sm"} bg={"white"} color={"purple.700"} boxShadow={"md"} _hover={{ bg: "purple.600", color: "white" }}>
         <Trash />
      </IconButton>
   )
}