import { RecursivePartial } from "@/@types/common";
import { Phone } from "@/graphql";

export const getFullName = (
  firstName: string | undefined,
  lastName: string | undefined
): string => {
  return firstName || lastName ? [firstName, lastName].join(" ") : "-";
};

export const getPhoneNumberByIndex = (
  phones: RecursivePartial<Array<Phone>> | undefined,
  index: number
) => {
  if (!phones) {
    return "-";
  }

  if (phones.length - 1 >= index) {
    return phones[index]?.number;
  }

  return "-";
};
