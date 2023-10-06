import React, { ReactElement } from "react";
import { AppContextProvider } from "@/contexts/AppContext";
import theme from "@/theme";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries"> & { wrapper?: React.ComponentType }
): RenderResult => {
  const {
    wrapper: Wrapper = ({ children }: { children: any }) => children,
    ...renderOptions
  } = options || {};

  const client = new ApolloClient({
    uri: "",
    cache: new InMemoryCache(),
  });

  return render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Wrapper>{ui}</Wrapper>
        </AppContextProvider>
      </ThemeProvider>
    </ApolloProvider>,
    renderOptions
  );
};

export { customRender as render };
