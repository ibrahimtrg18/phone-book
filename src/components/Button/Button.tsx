import React, { forwardRef } from "react";

import * as ButtonStyles from "./Button.styles";
import { ButtonProps, ButtonRef } from "./Button.types";

const Button = (props: ButtonProps, ref: ButtonRef) => {
  const {
    children,
    label,
    variant = "contained",
    size = "medium",
    color = "primary",
    rounded = false,
    fullWidth = false,
    ...restProps
  } = props;

  return (
    <ButtonStyles.Button
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      rounded={rounded}
      fullWidth={fullWidth}
      {...restProps}
    >
      {children || label}
    </ButtonStyles.Button>
  );
};

Button.displayName = "Button";

export default forwardRef(Button);
