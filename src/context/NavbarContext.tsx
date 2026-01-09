import { createContext } from "react";

// types
import { NavbarContextType } from "../types/Navbar";

// hooks
import { useNavbar } from "../hooks/useNavbar";

// context
const NavbarContext = createContext<NavbarContextType | null>(null);

// provider
export function NavbarContextProvider({ children }) {
  const navbar = useNavbar();

  return <NavbarContext.Provider value={navbar}>
    {children}
  </NavbarContext.Provider >
}