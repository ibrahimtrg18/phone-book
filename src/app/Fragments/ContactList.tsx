"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heading, Pagination, SearchInput, Text } from "@/components";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import { useFavoriteContext } from "@/contexts/FavoriteContext";
import { useGetContactListQuery } from "@/graphql";
import { CgMathPlus } from "react-icons/cg";

import ContactItem from "./ContactItem";

const ContactList = () => {
  const router = useRouter();
  const { setAppState } = useAppContext();
  const { favorites } = useFavoriteContext();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;
  const limit = pageSize;
  const offset = page <= 1 ? 0 : (page - 1) * pageSize;

  const { data, refetch } = useGetContactListQuery({
    variables: {
      limit,
      offset,
      where: {
        _or: [
          {
            first_name: { _like: `%${searchTerm}%` },
          },
          {
            last_name: { _like: `%${searchTerm}%` },
          },
          {
            phones: { number: { _like: `%${searchTerm}%` } },
          },
        ],
      },
    },
  });

  useEffect(() => {
    refetch();
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

  const count = Number(data?.contact_aggregate.aggregate?.count) || 1;
  const isPreviousPageDisabled = page <= 1;
  const isNextPageDisabled = page >= Math.ceil(count / pageSize);

  const listContact = data?.contact.filter(
    (c) => !favorites.some((f) => f.id === c.id)
  );

  return (
    <ContactStyles.Container>
      <SearchInput
        onSearch={(v) => setSearchTerm(v)}
        placeholder="Searching Name/Phone"
      />
      <ContactStyles.List>
        <Heading variant="h6">Favorite</Heading>
        {favorites.length > 0 ? (
          favorites.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))
        ) : (
          <Text>{"You doesn't have favorite contact"}</Text>
        )}
      </ContactStyles.List>
      <ContactStyles.List>
        <Heading variant="h6">List</Heading>
        {listContact?.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ContactStyles.List>
      <Pagination
        handleClickPreviousPage={() => setPage(page - 1)}
        handleClickNextPage={() => setPage(page + 1)}
        isPreviousPageDisabled={isPreviousPageDisabled}
        isNextPageDisabled={isNextPageDisabled}
        page={page}
        count={count}
        pageSize={pageSize}
        setPage={(page) => setPage(Number(page))}
      />
    </ContactStyles.Container>
  );
};

export default ContactList;
