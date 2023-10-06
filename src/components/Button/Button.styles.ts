import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  // default styles for buttons
  border-radius: 2px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  // size of the button
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          padding: 12px 16px;
          font-size: 15px;
        `;
      case "medium":
        return css`
          padding: 10px 16px;
          font-size: 14px;
        `;
      case "small":
        return css`
          padding: 8px 16px;
          font-size: 13px;
        `;
    }
  }}

  // rounded of the button
  ${({ rounded }) => {
    if (rounded) {
      return css`
        border-radius: 40px;
      `;
    }
  }}

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}

  // variant and color of the button
  ${({ theme, color = "primary", variant }) => {
    switch (variant) {
      case "contained":
        return css`
          border: 2px solid ${theme.colors[color]};
          background-color: ${theme.colors[color]};
          color: ${theme.colors.white};
        `;
      case "outlined":
        return css`
          border: 2px solid ${theme.colors[color]};
          background-color: ${theme.colors.white};
          color: ${theme.colors[color]};
        `;
      case "text":
        return css`
          border: 2px solid transparent;
          background-color: white;
          color: ${theme.colors[color]};
        `;
    }
  }}

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
