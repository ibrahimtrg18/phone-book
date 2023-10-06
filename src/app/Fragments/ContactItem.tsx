import Link from "next/link";
import { RecursivePartial } from "@/@types/common";
import { Button } from "@/components";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useFavoriteContext } from "@/contexts/FavoriteContext";
import { Contact, useDeleteContactPhoneMutation } from "@/graphql";
import { getFullName, getPhoneNumberByIndex } from "@/utils/common";
import { addToFavorites } from "@/utils/indexedDB";
import { CgBookmark, CgTrash } from "react-icons/cg";

type ContactItemProps = RecursivePartial<Contact>;

const ContactItem = (props: ContactItemProps) => {
  const { id, first_name: firstName, last_name: lastName, phones } = props;
  const { favorites, setFavorites, removeFavorite } = useFavoriteContext();

  const fullName = getFullName(firstName, lastName);
  const phone = getPhoneNumberByIndex(phones, 0);

  const [doRemoveContact] = useDeleteContactPhoneMutation({
    variables: { id: id! },
    update: (cache, { data }) => {
      if (data?.delete_contact_by_pk?.id) {
        cache.evict({ id: cache.identify(data.delete_contact_by_pk) });
        cache.gc();
      }
    },
  });

  const onRemoveItemClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    doRemoveContact();
  };

  const toggleFavorite = async () => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === props.id);

    if (isAlreadyFavorite) {
      if (id) {
        removeFavorite(id);
      }
    } else {
      if (props) {
        await addToFavorites(props);
        setFavorites([...favorites, props]);
      }
    }
  };

  return (
    <ContactStyles.Item>
      <Link href={{ pathname: `/contact/${id}` }} style={{ flex: 1 }}>
        <ContactStyles.Name>{fullName}</ContactStyles.Name>
        <ContactStyles.Phone>{phone}</ContactStyles.Phone>
      </Link>
      <Button variant="text" onClick={toggleFavorite}>
        <CgBookmark />
      </Button>
      <Button variant="text" onClick={(e) => onRemoveItemClick(e)}>
        <CgTrash />
      </Button>
    </ContactStyles.Item>
  );
};

export default ContactItem;
