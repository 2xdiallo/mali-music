import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollPosition = () => {
  return useContext(ScrollContext);
};
