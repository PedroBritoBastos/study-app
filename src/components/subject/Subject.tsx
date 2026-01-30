import { Card, Box, Text, Flex } from "@chakra-ui/react";

import { styles } from "@/styles/subject/subject.styles";
import { Calendar1 } from "lucide-react";
import { Tooltip } from "../ui/tooltip";

// utils
import { formatDate } from "@/utilities/dateUtils";

// types
import { SubjectType } from "@/src/types/subject";
import { Dispatch, SetStateAction } from "react";

type Props = {
  subject: SubjectType;
  openSidebar: () => void;
  setSelectedSubject: Dispatch<SetStateAction<SubjectType>>;
}

export function Subject({ subject, openSidebar, setSelectedSubject }: Props) {

  // abre a sidebar e atualiza a materia selecionada
  function handleClick() {
    openSidebar();
    setSelectedSubject(subject);
  }

  return <Card.Root {...styles.card.root} onClick={handleClick}>
    <Card.Body {...styles.card.body}>
      <Box {...styles.header.container}>
        <Text {...styles.header.title}>
          {subject.title}
        </Text>
      </Box>

      {/* data */}
      <Flex {...styles.date.container}>
        <Calendar1 />
        <Tooltip content={`Criado em ${formatDate(subject.currentDate)}`} showArrow contentProps={{ css: { "--tooltip-bg": "colors.purple.700", "padding": "2" } }}>
          <Text {...styles.date.text}>
            {formatDate(subject.currentDate)}
          </Text>
        </Tooltip>
      </Flex>

      {/* conteudo */}
      <Text {...styles.content.text}>
        {subject.content}
      </Text>
    </Card.Body>
  </Card.Root>
}