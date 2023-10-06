"use client";
import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext<null | ReturnType<typeof useApp>>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useApp();

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

type AppState = {
  title: string;
  showGoBack?: boolean;
};

type AppAction = {
  type: string;
  payload?: any;
};

const initialAppState: AppState = {
  title: "",
  showGoBack: false,
};

const APPBAR_ACTION = {
  SET_TITLE: "SET_TITLE",
  SET_SHOW_GO_BACK: "SET_SHOW_GO_BACK",
  SET_APP_STATE: "SET_APP_STATE",
};

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case APPBAR_ACTION.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case APPBAR_ACTION.SET_SHOW_GO_BACK:
      return {
        ...state,
        showGoBack: action.payload,
      };

    case APPBAR_ACTION.SET_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const useApp = () => {
  const [{ title, showGoBack }, dispatch] = useReducer(
    appReducer,
    initialAppState
  );

  const setTitleAppbar = (payload: string) => {
    dispatch({ type: APPBAR_ACTION.SET_TITLE, payload });
  };

  const setShowGoBack = (payload: boolean) => {
    dispatch({ type: APPBAR_ACTION.SET_SHOW_GO_BACK, payload });
  };

  const setAppState = (payload: Partial<AppState>) => {
    dispatch({ type: APPBAR_ACTION.SET_APP_STATE, payload });
  };

  return { title, showGoBack, setTitleAppbar, setShowGoBack, setAppState };
};
