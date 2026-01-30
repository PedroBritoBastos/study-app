// services
import { deleteSubject } from "@/services/subjectService";

// hooks
import { useRouter } from "next/navigation";

export function useDeleteSubjectModal() {
  // router
  const router = useRouter();

  // exclui um conteudo pelo id e fecha o modal
  async function handleDeleteSubject(
    subjectId: string,
    closeSidebar: () => void,
    closeModal: () => void,
  ) {
    // usa o service para deletar o conteudo
    try {
      await deleteSubject(subjectId);
      router.refresh();
      closeSidebar();
      closeModal();
    } catch (error) {
      return { error: "Erro ao deletar conteúdo" };
    }

    return { message: "Conteúdo deletado com sucesso" };
  }

  return { handleDeleteSubject };
}
