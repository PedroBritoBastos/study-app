// services
import { createSubject } from "@/src/services/subjectService";

// hooks
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useCreateSubjectModal() {
  // states do titulo e conteudo
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // router
  const router = useRouter();

  // faz a validação dos campos do modal
  function validateFields(title: string, content: string) {
    if (title === "" || content === "") return false;
    return true;
  }

  // envia os dados para a api
  async function submitData(closeModal: () => void) {
    // se a validação falhar, não envia os dados e interrompe a função
    if (!validateFields(title, content)) return;

    // criando o objeto para enviar para a api
    const subjectData = {
      title,
      content,
    };

    // usa o service de criar novo conteúdo
    try {
      await createSubject(subjectData);
      router.refresh();
      closeModal();
    } catch (error) {
      return { error: "Ocorreu um erro ao criar conteúdo." };
    }
  }

  return { submitData, title, setTitle, content, setContent };
}
