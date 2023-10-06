"use client";
import { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { useAppContext } from "@/contexts/AppContext";
import { useGetContactDetailQuery } from "@/graphql";
import { getFullName } from "@/utils/common";

const ContactDetail = () => {
  const { id } = useParams();
  const { setAppState } = useAppContext();
  const { data } = useGetContactDetailQuery({ variables: { id: Number(id) } });

  const firstName = data?.contact_by_pk?.first_name;
  const lastName = data?.contact_by_pk?.last_name;

  const fullName = useMemo(
    () => getFullName(firstName, lastName),
    [firstName, lastName]
  );

  useEffect(() => {
    setAppState({ title: fullName, showGoBack: true });
  }, [fullName]);

  return <div>{fullName}</div>;
};

export default ContactDetail;
