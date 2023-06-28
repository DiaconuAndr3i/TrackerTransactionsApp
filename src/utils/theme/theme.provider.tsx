import React, { createContext, useMemo } from "react";
import { Theme } from "./theme";

export const ThemeContext = createContext({
  theme: Theme,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useMemo(
    () => ({
      theme: Theme,
    }),
    []
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
