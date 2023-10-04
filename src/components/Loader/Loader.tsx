import React, { forwardRef } from "react";

import * as LoaderStyles from "./Loader.styles";
import { LoaderProps, LoaderRef, LOADING_TYPE } from "./Loader.types";

const Loader = (props: LoaderProps, ref: LoaderRef) => {
  const {
    children,
    type = LOADING_TYPE.SKELETON,
    align = "center",
    isLoading = true,
  } = props;

  if (isLoading) {
    switch (type) {
      case LOADING_TYPE.SKELETON:
        return (
          <LoaderStyles.Container ref={ref} align={align} {...props}>
            <LoaderStyles.Skeleton />
          </LoaderStyles.Container>
        );
      case LOADING_TYPE.SPINNER:
        return (
          <LoaderStyles.Container ref={ref} align={align} {...props}>
            <LoaderStyles.Icon />
          </LoaderStyles.Container>
        );
      default:
        throw new Error(`Type of ${type} is not supported`);
    }
  }

  return <>{children}</>;
};

Loader.displayName = "Loader";

export default forwardRef(Loader);
