import styled from "@emotion/styled";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: ${(props) => props.theme.colors.white};
  height: calc(100vh - 48px);

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
