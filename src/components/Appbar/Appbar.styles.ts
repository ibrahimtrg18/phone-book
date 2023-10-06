import * as ContainerStyles from "@/components/Container/Container.styles";
import styled from "@emotion/styled";

import { Button } from "../Button/Button.styles";
import { Heading6 } from "../Typography/Typography.styles";

export const Container = styled(ContainerStyles.Container)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const GoBack = styled(Button)`
  display: flex;
  gap: 5px;
`;

export const Title = styled(Heading6)`
  flex: 1;
`;
