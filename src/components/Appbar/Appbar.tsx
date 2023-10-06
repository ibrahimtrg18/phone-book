"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";
import { CgChevronLeft } from "react-icons/cg";

import * as AppbarStyles from "./Appbar.styles";

const Appbar = () => {
  const { title, showGoBack } = useAppContext();
  const { back } = useRouter();

  return (
    <AppbarStyles.Container>
      {showGoBack && (
        <AppbarStyles.GoBack
          variant="text"
          aria-label="Go back to previous page"
          onClick={() => back()}
        >
          <CgChevronLeft />
        </AppbarStyles.GoBack>
      )}
      <AppbarStyles.Title>{title}</AppbarStyles.Title>
    </AppbarStyles.Container>
  );
};

export default Appbar;
