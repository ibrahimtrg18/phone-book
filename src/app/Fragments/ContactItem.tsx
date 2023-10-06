import Link from "next/link";
import { RecursivePartial } from "@/@types/common";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { Contact } from "@/graphql";
import { getFullName, getPhoneNumberByIndex } from "@/utils/common";

type ContactItemProps = RecursivePartial<Contact>;

const ContactItem = ({
  id,
  first_name: firstName,
  last_name: lastName,
  phones,
}: ContactItemProps) => {
  const fullName = getFullName(firstName, lastName);
  const phone = getPhoneNumberByIndex(phones, 0);

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
