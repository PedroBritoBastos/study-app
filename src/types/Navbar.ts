import { Dispatch, SetStateAction } from "react";

export type NavbarOptionProps = {
  image: string;
  text: string;
};

export type NavbarContextType = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};
