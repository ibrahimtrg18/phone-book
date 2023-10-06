import React from "react";
import Image, { ImageProps } from "next/image";
import { getFullName } from "@/utils/common";

import * as InitialStyles from "./Initial.styles";

type InitialProps = Partial<ImageProps> & {
  firstName: string;
  lastName: string;
};

const Initial: React.FC<InitialProps> = ({ firstName, lastName, ...props }) => {
  const fullName = getFullName(firstName, lastName);

  return (
    <InitialStyles.Container>
      <Image
        src={`https://ui-avatars.com/api/?name=${fullName}&background=random&color=random&format=svg`}
        alt={fullName}
        width={0}
        height={0}
        loading="lazy"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    </InitialStyles.Container>
  );
};

export default Initial;
