import { RecursivePartial } from "@/@types/common";
import { Contact } from "@/graphql";

import * as ContactStyles from "./Contact.styles";

type ContactItemProps = RecursivePartial<Contact>;

export const ContactItem = ({
  first_name: firstName,
  last_name: lastName,
  phones,
}: ContactItemProps) => {
  const fullName =
    firstName || lastName ? [firstName, lastName].join(" ") : "-";
  const phone = phones?.length ? phones[0]?.number || "-" : "-";

  return (
    <ContactStyles.ContactItem>
      <ContactStyles.ContactName>{fullName}</ContactStyles.ContactName>
      <ContactStyles.ContactPhone>{phone}</ContactStyles.ContactPhone>
    </ContactStyles.ContactItem>
  );
};
