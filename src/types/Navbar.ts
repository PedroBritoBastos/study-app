import { Dispatch, SetStateAction } from "react";

export type NavbarOptionProps = {
  image: string;
  text: string;
  index: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  url: string;
};

export type NavbarContextType = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};
