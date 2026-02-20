// components
import { prisma } from "@/prisma/prisma";
import { HomeClient } from "../components/home/HomeClient";
import { Navbar } from "../components/navbar/Navbar";

// utils
import { isAuthenticated } from "../utilities/authUtils";
import { getUserFromToken } from "./api/_helpers/getUserByToken";

// actions
import { redirect } from "next/navigation";
import { Flex } from "@chakra-ui/react";

export default async function Home() {
  const auth = await isAuthenticated();

  if (!auth) redirect("/login");

  const user = await getUserFromToken();

  const subjects = await prisma.subject.findMany({
    where: { userId: user.id },
    orderBy: { currentDate: "desc" },
  });

  return <>
    <Flex flex={1} w={"100%"}>
      <Navbar />
      {auth && <HomeClient subjects={subjects} />}
    </Flex>

  </>
}
