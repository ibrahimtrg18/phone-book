import React, { forwardRef, useId } from "react";
import { Text } from "@/components";

import * as InputStyles from "./Input.styles";
import { InputProps, InputRef } from "./Input.types";

const Input = (props: InputProps, ref: InputRef) => {
  const { label, type = "text", errorMessage, ...restProps } = props;
  const id = useId();

  const hasLabel = Boolean(label);
  const isNumberic = Boolean(type === "numberic");

  const onNumbericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "e") {
      e.preventDefault(); // Prevent the "e" character from being entered
    }
  };

  return (
    <InputStyles.Wrapper>
      {hasLabel && <InputStyles.Label htmlFor={id}>{label}</InputStyles.Label>}
      <InputStyles.Input
        ref={ref}
        id={id}
        type={type}
        {...(isNumberic && { onKeyDown: onNumbericKeyDown })} // disable "e" character when type is "number"
        {...restProps}
      />
      <Text>{errorMessage}</Text>
    </InputStyles.Wrapper>
  );
};

export default forwardRef(Input);
