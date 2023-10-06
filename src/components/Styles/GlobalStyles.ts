"use client";
import { colors } from "@/theme/colors";
import { css } from "@emotion/react";

const globalCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  input,
  textarea {
    margin: 0;
    padding: 0;
  }

  input,
  textarea {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

export default globalCss;
