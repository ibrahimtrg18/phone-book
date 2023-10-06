"use client";
import React, { FC } from "react";
import { Appbar, Container } from "@/components";
import { AppContextProvider } from "@/contexts/AppContext";
import client from "@/libs/client";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { Global, ThemeProvider } from "@emotion/react";

import globalCss from "./Styles/GlobalStyles";

type ProviderProps = React.ComponentPropsWithoutRef<"div">;

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={globalCss} />
        <AppContextProvider>
          <Appbar />
          <Container>{children}</Container>
        </AppContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Provider;
