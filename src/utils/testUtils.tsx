import React, { ReactElement } from "react";
import theme from "@/theme";
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

  return render(
    <ThemeProvider theme={theme}>
      <Wrapper>{ui}</Wrapper>
    </ThemeProvider>,
    renderOptions
  );
};

export { customRender as render };
