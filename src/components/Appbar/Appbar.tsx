"use client";
import { useAppContext } from "@/contexts/AppContext";
import { CgChevronLeft } from "react-icons/cg";

import * as AppbarStyles from "./Appbar.styles";

const Appbar = () => {
  const { title, showGoBack } = useAppContext();

  return (
    <AppbarStyles.Container>
      {showGoBack && (
        <AppbarStyles.GoBack variant="text">
          <CgChevronLeft />
          Back
        </AppbarStyles.GoBack>
      )}
      <AppbarStyles.Title>{title}</AppbarStyles.Title>
    </AppbarStyles.Container>
  );
};

export default Appbar;
