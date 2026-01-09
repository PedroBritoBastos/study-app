import { useState } from "react";

export function useModal() {
  const [open, setOpen] = useState<boolean>(false); // state aberto / fechado
  const [titleValid, setTitleValid] = useState<boolean>(false); // state verifica se o titulo esta preenchido
  const [contentValid, setContentValid] = useState<boolean>(false); // state verifica se a descricao esta preenchida

  // atualiza o estado do modal
  function updateModalState(): void {
    setOpen(!open);
  }

  // verifica se o titulo esta preenchido
  function verifyIfTitleIsValid(title: string): void {
    title ? setTitleValid(false) : setTitleValid(true);
  }

  // verifica se a descricao esta preenchida
  function verifyIfContentIsValid(content: string): void {
    content ? setContentValid(false) : setContentValid(true);
  }

  function isTitleValid(): boolean {
    return titleValid;
  }

  function isContentValid(): boolean {
    return contentValid;
  }

  function refreshVerifications(): void {
    setTitleValid(false);
    setContentValid(false);
  }

  return {
    open,
    updateModalState,
    verifyIfTitleIsValid,
    verifyIfContentIsValid,
    isTitleValid,
    isContentValid,
    refreshVerifications,
  };
}
