import styled from "@emotion/styled";

import Initial from "../Initial";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 20px 2 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

export const HeadingWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;

export const Picture = styled(Initial)`
  flex: 1;
`;
