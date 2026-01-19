import { useContext } from "react";
import { daySidebarContext } from "../context/DaySidebarContext";

export function useDaySidebarContext() {
  const context = useContext(daySidebarContext);
  return context;
}
