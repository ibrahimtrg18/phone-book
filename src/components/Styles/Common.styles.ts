"use client";
import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue[400]};
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray[200]};
`;
