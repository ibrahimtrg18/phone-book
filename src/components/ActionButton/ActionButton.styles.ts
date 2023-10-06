import Link from "next/link";
import styled from "@emotion/styled";

export const Container = styled(Link)`
  position: absolute;
  right: 0.875rem;
  bottom: 0.875rem;

  & button {
    position: relative;
    width: 48px;
    height: 48px;
  }

  & svg {
    position: absolute;
    font-size: 1.25rem;
  }
`;
