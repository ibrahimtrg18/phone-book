import Link from "next/link";
import { RecursivePartial } from "@/@types/common";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { Contact } from "@/graphql";

type ContactItemProps = RecursivePartial<Contact>;

const ContactItem = ({
  id,
  first_name: firstName,
  last_name: lastName,
  phones,
}: ContactItemProps) => {
  const fullName =
    firstName || lastName ? [firstName, lastName].join(" ") : "-";
  const phone = phones?.length ? phones[0]?.number || "-" : "-";

  return (
    <Link href={{ pathname: `/contact/${id}` }}>
      <ContactStyles.Item>
        <ContactStyles.Name>{fullName}</ContactStyles.Name>
        <ContactStyles.Phone>{phone}</ContactStyles.Phone>
      </ContactStyles.Item>
    </Link>
  );
};

export default ContactItem;
