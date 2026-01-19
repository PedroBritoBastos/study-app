import { createContext, ReactNode, useState } from "react";

// hooks
import { useDateSidebar } from "../hooks/useDateSidebar";

type daySidebarContexttype = {
  sidebarHook: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
};


const initialValue = { sidebarHook: { isOpen: false, open: () => null, close: () => null } };
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