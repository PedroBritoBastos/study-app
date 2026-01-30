import { styles } from "@/src/styles/sidebar/subjectSidebar.styles";

// components
import { SidebarContainer } from "./SidebarContainer";
import { Flex, Icon, Text, Stack } from "@chakra-ui/react";
import { Button } from "../button/Button";


// types
import { SubjectType } from "@/src/types/subject";
import { Calendar1 } from "lucide-react";

// utils
import { formatDate } from "@/src/utilities/dateUtils";

type Props = {
  selectedSubject: SubjectType;
  closeSidebar: () => void;
  openDeleteModal: () => void;
}

export function SubjectSidebar({ selectedSubject, closeSidebar, openDeleteModal }: Props) {
  return (
    <SidebarContainer closeSidebar={closeSidebar} header={selectedSubject.title}>
      <Stack {...styles.container}>
        <Stack>
          {/* data de criacao */}
          <Flex {...styles.dateContainer}>
            <Icon>
              <Calendar1 />
            </Icon>
            <Text>
              Criado em {formatDate(selectedSubject.currentDate)}
            </Text>
          </Flex>

          {/* conteudo da materia */}
          <Text {...styles.description.title}>Descricao</Text>
          <Text {...styles.description.content}>{selectedSubject.content}</Text>
        </Stack>

        <Stack>
          {/* botão para abrir modal de exclusão de conteúdo */}
          <Button name="excluir" variant="delete" handleClick={openDeleteModal} />
        </Stack>
      </Stack>
    </SidebarContainer>
  );
}