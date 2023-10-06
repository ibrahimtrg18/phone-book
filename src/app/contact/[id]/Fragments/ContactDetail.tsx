"use client";
import { useParams } from "next/navigation";

const ContactDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default ContactDetail;
