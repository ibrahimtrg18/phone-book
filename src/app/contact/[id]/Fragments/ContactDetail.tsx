"use client";
import { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { Box, Heading, Text } from "@/components";
import * as ContactDetailStyles from "@/components/Styles/ContactDetail.styles";
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

  return (
    <ContactDetailStyles.Container>
      <ContactDetailStyles.HeadingWrapper>
        <ContactDetailStyles.Picture
          firstName={firstName || ""}
          lastName={lastName || ""}
        />
        <Box
          css={{
            justifyContent: "space-between",
          }}
        >
          <Heading variant="h6">{fullName}</Heading>
          <Text>{data?.contact_by_pk?.created_at}</Text>
        </Box>
      </ContactDetailStyles.HeadingWrapper>
    </ContactDetailStyles.Container>
  );
};

export default ContactDetail;
