"use client";
import React, { FC } from "react";
import client from "@/libs/client";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";

type ProviderProps = React.ComponentPropsWithoutRef<"div">;

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  );
};

export default Provider;
