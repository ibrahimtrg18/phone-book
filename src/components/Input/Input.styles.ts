import styled from "@emotion/styled";

import { InputProps } from "./Input.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  width: inherit;

  & p {
    color: ${(props) => props.theme.colors.red[400]};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 0.875em;
  text-transform: capitalize;
`;

export const Input = styled.input<InputProps>`
  font-family: "Open Sans", sans-serif;
  display: block;
  width: inherit;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 2px;
  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
