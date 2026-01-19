import { useState, JSX } from "react";

export function useDateSidebar() {
  // state para monitorar o estado aberto / fechado da sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // state para atualizar os conteudos que serao mostrados de acordo com cada data
  const [reviews, setReviews] = useState<(JSX.Element | null)[]>([]);

  // abre a sidebar
  function open() {
    setIsOpen(true);
  }

  // fecha a sidebar
  function close() {
    setIsOpen(false);
  }

  return { isOpen, open, close, setReviews, reviews };
}
