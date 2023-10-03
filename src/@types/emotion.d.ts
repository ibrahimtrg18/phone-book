import theme from "@/theme";

type LibTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}
