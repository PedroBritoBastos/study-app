import { useState } from "react";

export function useConfirmModal() {
  const [open, setOpen] = useState<boolean>(false);

  function openConfirmModal() {
    setOpen(true);
  }

  function closeConfirmModal() {
    setOpen(false);
  }

  function getConfirmModalState() {
    return open;
  }

  return { openConfirmModal, closeConfirmModal, getConfirmModalState };
}
