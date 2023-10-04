import React, { ElementType } from "react";

type ReactInputProps = React.ComponentPropsWithoutRef<"input">;
type AdditionalInputProps = {
  as?: ElementType;
  label?: string;
};

export type InputProps = ReactInputProps & AdditionalInputProps;
export type InputRef = React.ForwardedRef<HTMLInputElement>;
