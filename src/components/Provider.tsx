import React, { FC } from "react";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";

type ProviderProps = React.ComponentPropsWithoutRef<"div">;

const Provider: FC<ProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
