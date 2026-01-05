import { useState } from "react";

export function useModal() {
  // state de aberto / fechado do modal
  const [open, setOpen] = useState<boolean>(false);

  // atualiza o estado do modal
  function updateModalState() {
    setOpen(!open);
  }

  return { open, updateModalState };
}
