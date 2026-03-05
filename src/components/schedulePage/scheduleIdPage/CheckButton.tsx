"use client"

import { Checkbox } from "@chakra-ui/react"

export function CheckButton() {
   return (
      <Checkbox.Root variant={"solid"} colorPalette={"purple"} bg={"gray.300"} size={"lg"}>
         <Checkbox.HiddenInput />
         <Checkbox.Control />
      </Checkbox.Root>
   )
}