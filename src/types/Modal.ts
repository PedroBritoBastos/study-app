import { Dispatch, SetStateAction, ReactNode } from "react";

export type ModalContextType = {
  open: boolean;
  updateModalState: Dispatch<SetStateAction<boolean>>;
};

export type ModalContextProviderProps = {
  children: ReactNode;
};
