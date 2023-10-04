import React, { forwardRef } from "react";

import * as TypographyStyles from "./Typography.styles";
import { HeadingProps, HeadingRef } from "./Typography.types";

const Heading = (props: HeadingProps, ref: HeadingRef) => {
  const { children, variant = "h1", ...restProps } = props;

  switch (variant) {
    case "h1":
      return (
        <TypographyStyles.Heading1 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading1>
      );
    case "h2":
      return (
        <TypographyStyles.Heading2 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading2>
      );
    case "h3":
      return (
        <TypographyStyles.Heading3 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading3>
      );
    case "h4":
      return (
        <TypographyStyles.Heading4 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading4>
      );
    case "h5":
      return (
        <TypographyStyles.Heading5 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading5>
      );
    case "h6":
      return (
        <TypographyStyles.Heading6 ref={ref} {...restProps}>
          {children}
        </TypographyStyles.Heading6>
      );
  }
};

export default forwardRef(Heading);
