import { Dispatch, SetStateAction, ReactNode } from "react";

export type ModalContextType = {
  open: boolean;
  updateModalState: Dispatch<SetStateAction<boolean>>;
  verifyIfTitleIsValid: (title: string) => void;
  verifyIfContentIsValid: (content: string) => void;
  isTitleValid: () => boolean;
  isContentValid: () => boolean;
  refreshVerifications: () => void;
};

export type ModalContextProviderProps = {
  children: ReactNode;
};
