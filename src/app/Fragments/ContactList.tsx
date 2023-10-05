"use client";
import { Heading } from "@/components";
import { useGetContactListQuery } from "@/graphql";

import { ContactItem } from "./ContactItem";
import * as ContactStyles from "./Contact.styles";

export const ContactList = () => {
  const { data } = useGetContactListQuery({
    variables: { limit: 10, offset: 10 },
  });

  return (
    <ContactStyles.Container>
      <Heading>Contact List</Heading>
      <ContactStyles.ContactList>
        {data?.contact.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ContactStyles.ContactList>
    </ContactStyles.Container>
  );
};
