import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

// hook para usar o ModalContext
export function useModalContext() {
  const context = useContext(ModalContext);
  return context;
}
