"use client";
import * as ContainerStyles from "./Container.styles";
import { ContainerProps } from "./Container.types";

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyles.Container>{children}</ContainerStyles.Container>;
};

export default Container;
