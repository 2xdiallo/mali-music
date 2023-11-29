import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu_toggle, setMneu_toggle] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const menuToggle = () => setMneu_toggle(!menu_toggle);

  return (
    <SidebarContext.Provider
      value={{ isOpen, toggle, menuToggle, menu_toggle }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
