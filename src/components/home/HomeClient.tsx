"use client";

import { styles } from "@/src/styles/home/home.styles";
import { Flex, Text, Grid } from "@chakra-ui/react";

// components
import { SubjectSidebar } from "../sidebar/SubjectSidebar";
import { Subject } from "@/components/subject/Subject";
import { Button as CreateButton } from "../button/Button";
import { CreateSubjectModal } from "../modal/CreateSubjectModal";
import { DeleteSubjectModal } from "../modal/DeleteSubjectModal";
import { ReviewsAccordion } from "./ReviewsAccordion";
import { Plus } from "lucide-react";

// types
import { SubjectType } from "@/src/types/subject";

// hooks
import { useSidebar } from "@/src/hooks/useSidebar";
import { useModal } from "@/src/hooks/useModal";
import { useState } from "react";

type Props = {
  subjects: SubjectType[];
}

export function HomeClient({ subjects }: Props) {

  // states da sidebar e modal
  const sidebarHook = useSidebar();
  const createModalHook = useModal();
  const deleteModalHook = useModal();

  // state de materia selecionada
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>({ id: "", title: "", content: "", currentDate: "" });

  return <Flex {...styles.container}>
    {/* header e botao criar */}
    <Flex {...styles.header.container}>
      <Text {...styles.header.title}>
        Conteúdos
      </Text>

      {/* botao de criar novo conteudo */}
      <CreateButton name="Criar" handleClick={createModalHook.openModal} variant="base">
        <Plus />
      </CreateButton>

      {/* Accordion com as revisões do dia */}
      <ReviewsAccordion subjects={subjects} />
    </Flex>


    {/* grid de conteudos */}
    <Grid {...styles.grid}>
      {subjects.map((subject) => <Subject key={subject.id} subject={subject} openSidebar={sidebarHook.openSidebar} setSelectedSubject={setSelectedSubject} />)}
    </Grid>

    {/* sidebar */}
    {sidebarHook.isSidebarOpen && <SubjectSidebar selectedSubject={selectedSubject} closeSidebar={sidebarHook.closeSidebar} openDeleteModal={deleteModalHook.openModal} />}

    {/* modal de criar */}
    {createModalHook.isModalOpen && <CreateSubjectModal closeModal={createModalHook.closeModal} />}

    {/* modal de deletar */}
    {deleteModalHook.isModalOpen && <DeleteSubjectModal closeSidebar={sidebarHook.closeSidebar} closeModal={deleteModalHook.closeModal} subjectId={selectedSubject.id} />}

  </Flex>
}