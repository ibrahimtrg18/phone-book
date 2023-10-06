import React from "react";
import { FavoriteContextProvider } from "@/contexts/FavoriteContext";

import ContactList from "./Fragments/ContactList";

export default function ContactListPage() {
  return (
    <FavoriteContextProvider>
      <ContactList />
    </FavoriteContextProvider>
  );
}
