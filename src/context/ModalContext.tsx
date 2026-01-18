import {
  createContext,
} from "react";

import { ModalContextType } from "../types/Modal";
import { ModalContextProviderProps } from "../types/Modal";

import { useModal } from "../hooks/useModal";

// context
export const ModalContext = createContext<ModalContextType | null>(null);

// provider
export function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const { open, updateModalState, verifyIfTitleIsValid, verifyIfContentIsValid, isTitleValid, isContentValid, refreshVerifications } = useModal();

  return (
    <ModalContext.Provider value={{ open, updateModalState, verifyIfTitleIsValid, verifyIfContentIsValid, isTitleValid, isContentValid, refreshVerifications }}>
      {children}
    </ModalContext.Provider>
  );
}



