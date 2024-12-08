"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { themes } from "@/utils/Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme === "dark" ? themes.dark : themes.light);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.name === "light" ? themes.dark : themes.light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
