"use client";
import { useEffect, useReducer } from "react";
import { RecursivePartial } from "@/@types/common";
import { Contact } from "@/graphql";
import {
  addToFavorites,
  getAllFavorites,
  removeFromFavorites,
} from "@/utils/indexedDB";

type FavoriteState = {
  favorites: RecursivePartial<Contact>[];
};

interface FavoriteActionPayload {
  favorites: RecursivePartial<Contact>[];
}

type FavoriteAction = {
  type: FavoriteActionType;
  payload?: Partial<FavoriteActionPayload>;
};

const initialFavoriteState: FavoriteState = {
  favorites: [],
};

enum FavoriteActionType {
  SET_FAVORITES = "SET_FAVORITES",
}

const favoriteReducer = (state: FavoriteState, action: FavoriteAction) => {
  switch (action.type) {
    case FavoriteActionType.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload!.favorites!,
      };

    default:
      return { ...state };
  }
};

export const useFavorite = () => {
  const [{ favorites }, dispatch] = useReducer(
    favoriteReducer,
    initialFavoriteState
  );

  const setFavorites = (favorites: RecursivePartial<Contact>[]) => {
    dispatch({
      type: FavoriteActionType.SET_FAVORITES,
      payload: {
        favorites,
      },
    });
  };

  const removeFavorite = async (id: number) => {
    await removeFromFavorites(Number(id));
    const removedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(removedFavorites);
  };

  const addFavorite = async (contact: RecursivePartial<Contact>) => {
    await addToFavorites(contact);
    setFavorites([...favorites, contact]);
  };

  useEffect(() => {
    (async () => {
      const storedFavorites = await getAllFavorites();
      setFavorites(storedFavorites);
    })();
  }, []);

  return {
    favorites,
    setFavorites,
    removeFavorite,
    addFavorite,
  };
};
