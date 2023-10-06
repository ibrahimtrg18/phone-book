"use client";
import { createContext, useContext } from "react";
import { useFavorite } from "@/hooks/useFavorite";

export const FavoriteContext = createContext<null | ReturnType<
  typeof useFavorite
>>(null);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteContextProvider"
    );
  }

  return context;
};

export const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useFavorite();

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
