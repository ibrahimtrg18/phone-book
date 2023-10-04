import React, { ElementType } from "react";

type ReactButtonProps = React.ComponentProps<"button">;
type AdditionalButtonProps = {
  as?: ElementType;
  label?: string;
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  fullWidth?: boolean;
};

export type ButtonProps = ReactButtonProps & AdditionalButtonProps;
export type ButtonRef = React.ForwardedRef<HTMLButtonElement>;
