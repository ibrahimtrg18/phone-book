"use client";
import React from "react";
import { ModeContextProvider } from "@/contexts/ModeContext";

import ContactMode from "./ContactMode";

export const CONTACT_MODE = {
  CONTACT_LIST: "CONTACT_LIST",
  CONTACT_NEW: "CONTACT_NEw",
};

const Contact = () => {
  return (
    <ModeContextProvider mode={CONTACT_MODE.CONTACT_LIST}>
      <ContactMode />
    </ModeContextProvider>
  );
};

export default Contact;
