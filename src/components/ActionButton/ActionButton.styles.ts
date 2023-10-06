import Link from "next/link";
import styled from "@emotion/styled";

type ContainerProps = {
  bottom?: string;
};

export const Container = styled(Link)<ContainerProps>`
  position: absolute;
  right: 0.875rem;
  bottom: ${(props) => props.bottom};

  & button {
    position: relative;
    width: 48px;
    height: 48px;
  }

  & svg {
    position: absolute;
    font-size: 1.25rem;
  }

  @media (min-width: 640px) {
    bottom: 0.875rem;
  }
`;
