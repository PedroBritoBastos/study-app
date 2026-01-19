import { useState } from "react";

export function useDateSidebar() {
  // state para monitorar o estado aberto / fechado da sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // abre a sidebar
  function open() {
    setIsOpen(true);
  }

  // fecha a sidebar
  function close() {
    setIsOpen(false);
  }

  return { isOpen, open, close };
}
