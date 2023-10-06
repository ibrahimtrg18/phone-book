"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@/components";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import { useGetContactListQuery } from "@/graphql";
import { CgMathPlus } from "react-icons/cg";

import ContactItem from "./ContactItem";

const ContactList = () => {
  const router = useRouter();
  const { setAppState } = useAppContext();
  const [page, setPage] = useState(1);
  const pageCount = 100;
  const pageSize = 10;
  const limit = pageSize;
  const offset = page <= 1 ? 0 : (page - 1) * pageSize;

  const { data } = useGetContactListQuery({
    variables: { limit, offset },
  });

  useEffect(() => {
    setAppState({
      title: "Contact List",
      showGoBack: false,
      actionButton: {
        show: true,
        icon: <CgMathPlus />,
        link: { pathname: `/contact/form` },
      },
    });
  }, [router]);

  const isPreviousPageDisabled = page < 0;
  const isNextPageDisabled = page === pageCount;

  return (
    <ContactStyles.Container>
      <ContactStyles.List>
        {data?.contact.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ContactStyles.List>
      <Pagination
        handleClickPreviousPage={() => setPage(page - 1)}
        handleClickNextPage={() => setPage(page + 1)}
        isPreviousPageDisabled={isPreviousPageDisabled}
        isNextPageDisabled={isNextPageDisabled}
        page={page}
        pageCount={pageCount}
        pageSize={pageSize}
        setPage={(page) => setPage(Number(page))}
      />
    </ContactStyles.Container>
  );
};

export default ContactList;
