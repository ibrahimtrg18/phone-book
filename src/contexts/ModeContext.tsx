"use client";
import { createContext, useContext, useState } from "react";

export const ModeContext = createContext<null | ReturnType<typeof useMode>>(
  null
);

export const useModeContext = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("useModeContext must be used within a ModeContextProvider");
  }

  return context;
};

export const ModeContextProvider = ({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: string;
}) => {
  const value = useMode(mode);

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export const useMode = (_mode: string) => {
  const [mode, setMode] = useState(_mode);

  return { mode, setMode };
};
