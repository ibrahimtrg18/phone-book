import React, { ElementType } from "react";

type ReactLoaderProps = React.ComponentPropsWithoutRef<"div">;
interface AdditionalLoaderProps {
  as?: ElementType;
  type?: LOADING_TYPE;
  align?: "left" | "center" | "right";
  isLoading?: boolean;
  children?: React.ReactNode | JSX.Element;
}

export type LoaderProps = ReactLoaderProps & AdditionalLoaderProps;
export type LoaderRef = React.ForwardedRef<HTMLDivElement>;
export enum LOADING_TYPE {
  SPINNER = "SPINNER",
  SKELETON = "SKELETON",
}
