"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import { useGetContactListQuery } from "@/graphql";

import ContactItem from "./ContactItem";

const ContactList = () => {
  const router = useRouter();
  const { setAppState } = useAppContext();

  const { data } = useGetContactListQuery({
    variables: { limit: 10, offset: 10 },
  });

  useEffect(() => {
    setAppState({ title: "Contact List", showGoBack: false });
  }, [router]);

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
