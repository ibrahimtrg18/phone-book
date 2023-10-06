"use client";
import React, { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { Box, Divider, Heading, Link, Text } from "@/components";
import * as ContactDetailStyles from "@/components/Styles/ContactDetail.styles";
import { useAppContext } from "@/contexts/AppContext";
import { useGetContactDetailQuery } from "@/graphql";
import { getFullName } from "@/utils/common";
import { CgPen } from "react-icons/cg";

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
    setAppState({
      title: fullName,
      showGoBack: true,
      actionButton: {
        show: true,
        icon: <CgPen />,
        link: { pathname: `/contact/${id}` },
      },
    });
  }, [fullName]);

  return (
    <ContactDetailStyles.Container>
      <ContactDetailStyles.HeadingWrapper>
        <ContactDetailStyles.Picture
          firstName={firstName || ""}
          lastName={lastName || ""}
        />
        <Box style={{ justifyContent: "space-between", padding: "5px 0" }}>
          <Heading variant="h6">{fullName}</Heading>
          <Text>{data?.contact_by_pk?.created_at}</Text>
        </Box>
      </ContactDetailStyles.HeadingWrapper>
      <ContactDetailStyles.PhoneList>
        <Heading variant="h6">Phone Number</Heading>
        {data?.contact_by_pk?.phones.map((phone, index) => (
          <React.Fragment key={phone.number}>
            <Link href={`tel:${phone.number}`}>
              <Text>{phone?.number}</Text>
            </Link>
            {index !== Number(data.contact_by_pk?.phones.length) - 1 && (
              <Divider />
            )}
          </React.Fragment>
        ))}
      </ContactDetailStyles.PhoneList>
    </ContactDetailStyles.Container>
  );
};

export default ContactDetail;
