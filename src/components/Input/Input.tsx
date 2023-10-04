import React, { forwardRef, useId } from "react";

import * as InputStyles from "./Input.styles";
import { InputProps, InputRef } from "./Input.types";

const Input = (props: InputProps, ref: InputRef) => {
  const { label, type = "text", ...restProps } = props;
  const id = useId();

  const hasLabel = Boolean(label);

  return (
    <InputStyles.Wrapper>
      {hasLabel && <InputStyles.Label htmlFor={id}>{label}</InputStyles.Label>}
      <InputStyles.Input ref={ref} id={id} type={type} {...restProps} />
    </InputStyles.Wrapper>
  );
};

export default forwardRef(Input);
