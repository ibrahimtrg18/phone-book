import { useModeContext } from "@/contexts/ModeContext";

import { CONTACT_MODE } from "./Contact";
import ContactList from "./ContactList";
import ContactNew from "./ContactNew";

const ContactMode = () => {
  const { mode } = useModeContext();

  if (mode === CONTACT_MODE.CONTACT_NEW) {
    return <ContactNew />;
  }

  return <ContactList />;
};

export default ContactMode;
