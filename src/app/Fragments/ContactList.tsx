"use client";
import { useEffect } from "react";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import { useGetContactListQuery } from "@/graphql";

import ContactItem from "./ContactItem";

const ContactList = () => {
  const { setTitleAppbar } = useAppContext();

  const { data } = useGetContactListQuery({
    variables: { limit: 10, offset: 10 },
  });

  useEffect(() => {
    setTitleAppbar("Contact List");
  }, []);

  return (
    <ContactStyles.Container>
      <ContactStyles.List>
        {data?.contact.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ContactStyles.List>
    </ContactStyles.Container>
  );
};

export default ContactList;
