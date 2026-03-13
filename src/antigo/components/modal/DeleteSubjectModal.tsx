// styles
import { styles } from "@/src/antigo/styles/modal/deleteSubjectModal.styles";

// components
import { Flex, Text } from "@chakra-ui/react"
import { ModalContainer } from "./ModalContainer"
import { Button } from "../button/Button"
import { Trash2 } from "lucide-react"

// hooks
import { useDeleteSubjectModal } from "@/src/antigo/hooks/deleteSubjectModal/useDeleteSubjectModal";

type Props = {
  closeSidebar: () => void;
  closeModal: () => void;
  subjectId: string;
}

export function DeleteSubjectModal({ closeSidebar, closeModal, subjectId }: Props) {
  // hook
  const deleteSubjectModalHook = useDeleteSubjectModal();

  return <ModalContainer>
    <Text {...styles.title}>Tem certeza que quer excluir esse conteúdo?</Text>
    <Flex {...styles.buttonsContainer}>
      <Button name="Cancelar" variant="base" handleClick={() => closeModal()} />
      <Button name="Excluir" variant="delete" handleClick={() => deleteSubjectModalHook.handleDeleteSubject(subjectId, closeSidebar, closeModal)} >
        <Trash2 />
      </Button>
    </Flex>
  </ModalContainer>
}