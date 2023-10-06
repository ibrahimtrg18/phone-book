import { usePathname } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";

import { Button } from "..";

import * as ActionButtonStyles from "./ActionButton.styles";

const ActionButton = () => {
  const pathname = usePathname();

  const listPageHasPagination = ["/"];

  const overridesBottom = listPageHasPagination.includes(pathname);

  const { actionButton } = useAppContext();

  if (!actionButton.show) {
    return null;
  }

  return (
    <ActionButtonStyles.Container
      href={...actionButton.link}
      {...(overridesBottom && { bottom: "calc(48px + 0.875rem)" })}
    >
      <Button>{actionButton.icon}</Button>
    </ActionButtonStyles.Container>
  );
};

export default ActionButton;
