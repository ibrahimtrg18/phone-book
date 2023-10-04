import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { CgSpinner } from "react-icons/cg";

import { AdditionalLoaderProps } from "./Loader.types";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Container = styled.div<AdditionalLoaderProps>`
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case "center":
        return "center";
      case "left":
        return "start";
      case "right":
        return "end";
      default:
        throw new Error("Invalid alignment value");
    }
  }};
`;

export const Skeleton = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 1.5em;
  height: auto;
  background-color: #dcdcdc;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 3s infinite;
  }
`;

export const Icon = styled(CgSpinner)`
  width: 2rem;
  height: 2rem;

  animation: ${spinning} 1s linear infinite;
`;
