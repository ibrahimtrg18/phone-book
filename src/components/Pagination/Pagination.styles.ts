import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "..";

type PaginationButtonProps = {
  isActive?: boolean;
};

export const PaginationButton = styled(Button)<PaginationButtonProps>`
  flex: 0 0 2rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  /* Add styles based on props */
  ${(props) =>
    props.disabled &&
    css`
      color: ${props.theme.colors.gray[50]};
      cursor: not-allowed;
    `}

  ${(props) =>
    !props.disabled &&
    css`
      color: ${props.theme.colors.white};
      &:hover {
        color: ${!props.isActive && props.theme.colors.primary};
      }
    `}


  ${(props) =>
    props.isActive &&
    css`
      color: ${props.theme.colors.black};
    `}

  ${(props) =>
    !props.isActive &&
    css`
      color: ${props.theme.colors.gray[400]};
    `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.12);
`;
