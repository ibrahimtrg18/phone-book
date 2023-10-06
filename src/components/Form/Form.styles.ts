import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  & > button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }
`;

export const InputController = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: start;

  & div {
    flex: 1;
  }
`;
