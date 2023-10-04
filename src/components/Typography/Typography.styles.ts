import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { TextProps, TypographyProps } from "./Typography.types";

export const Heading1 = styled.h1<TypographyProps>`
  ${({ theme }) => css(theme.typography.h1)}
`;

export const Heading2 = styled.h2<TypographyProps>`
  ${({ theme }) => css(theme.typography.h2)}
`;

export const Heading3 = styled.h3<TypographyProps>`
  ${({ theme }) => css(theme.typography.h3)}
`;

export const Heading4 = styled.h4<TypographyProps>`
  ${({ theme }) => css(theme.typography.h4)}
`;

export const Heading5 = styled.h5<TypographyProps>`
  ${({ theme }) => css(theme.typography.h5)}
`;

export const Heading6 = styled.h6<TypographyProps>`
  ${({ theme }) => css(theme.typography.h6)}
`;

export const Paragraph = styled.p<TextProps>`
  ${({ theme }) => css(theme.typography.p)}
`;
