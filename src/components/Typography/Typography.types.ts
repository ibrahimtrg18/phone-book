import React, { ElementType } from "react";

type ReactHeadingProps = React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;
type ReactParagraphProps = React.ComponentPropsWithoutRef<"p">;
interface AdditionalTypographyProps {
  as?: ElementType;
  variant?: VariantType;
}

export type TypographyProps = ReactHeadingProps &
  ReactParagraphProps &
  AdditionalTypographyProps;

export type HeadingProps = ReactHeadingProps & AdditionalTypographyProps;
export type HeadingRef = React.ForwardedRef<HTMLHeadingElement>;

export type TextProps = ReactParagraphProps & AdditionalTypographyProps;
export type TextRef = React.ForwardedRef<
  HTMLHeadingElement | HTMLParagraphElement
>;
export type VariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
