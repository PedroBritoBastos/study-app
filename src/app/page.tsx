import { Navbar } from "@/components/ui/navbar/Navbar"
import { HomeClient } from "../antigo/components/home/HomeClient"
import { Flex } from "@chakra-ui/react"

import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/login");
  return <>
    <Flex flex={1} w={"100%"}>
      <Navbar />
      <HomeClient subjects={[]} />
    </Flex>
  </>
}
