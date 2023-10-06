import * as ContainerStyles from "@/components/Container/Container.styles";
import styled from "@emotion/styled";

import { Button } from "../Button/Button.styles";
import { Heading6 } from "../Typography/Typography.styles";

export const Container = styled(ContainerStyles.Container)`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.12);
  z-index: 10;
`;

export const GoBack = styled(Button)`
  display: flex;
  gap: 5px;
  height: inherit;
  width: 48px;
`;

export const Title = styled(Heading6)`
  flex: 1;
  padding: 0 10px;
`;
