import { RecursivePartial } from "@/@types/common";
import { Contact } from "@/graphql";

const DB_NAME = "phone-book";
const STORE_NAME = "favorites";

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };

    request.onsuccess = (event: Event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event: Event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
};

export const addToFavorites = async (
  contact: RecursivePartial<Contact>
): Promise<void> => {
  const db = await openDatabase();
  const transaction = db.transaction([STORE_NAME], "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.add(contact);
};

export const removeFromFavorites = async (contactId: number): Promise<void> => {
  const db = await openDatabase();
  const transaction = db.transaction([STORE_NAME], "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.delete(contactId);
};

export const getAllFavorites = async (): Promise<
  { id: number; name: string }[]
> => {
  const db = await openDatabase();
  const transaction = db.transaction([STORE_NAME], "readonly");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.getAll();
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
};
