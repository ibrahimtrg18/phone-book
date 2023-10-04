import React, { forwardRef } from "react";

import * as TypographyStyles from "./Typography.styles";
import { TextProps, TextRef } from "./Typography.types";

const Text = (props: TextProps, ref: TextRef) => {
  const { children, ...restProps } = props;

  return (
    <TypographyStyles.Paragraph ref={ref} variant="p" {...restProps}>
      {children}
    </TypographyStyles.Paragraph>
  );
};

export default forwardRef(Text);
