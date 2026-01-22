import { createContext, Dispatch, JSX, ReactNode, SetStateAction } from "react";

// hooks
import { useDateSidebar } from "../hooks/useDateSidebar";

type daySidebarContexttype = {
  sidebarHook: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    setReviews: Dispatch<SetStateAction<(JSX.Element | null)[]>>;
    reviews: (JSX.Element | null)[];
    selectedDay: Date;
    setSelectedDay: Dispatch<SetStateAction<Date>>;
    reviewsDescriptions: [];
    setReviewsDescriptions: Dispatch<SetStateAction<[]>>;
  };
};

const initialValue = {
  sidebarHook: {
    isOpen: false,
    open: () => { },
    close: () => { },
    setReviews: () => { },
    reviews: [], selectedDay: {},
    setSelectedDay: () => { },
    reviewsDescriptions: [],
    setReviewsDescriptions: []
  }
};

export const daySidebarContext = createContext<daySidebarContexttype>(initialValue);

type daySidebarContextProviderProps = {
  children: ReactNode;
}

export function DaySidebarContextProvider({ children }: daySidebarContextProviderProps) {

  // pega o estado da sidebar
  const sidebarHook = useDateSidebar();

  return <daySidebarContext.Provider value={{ sidebarHook }}>
    {children}
  </daySidebarContext.Provider>
}