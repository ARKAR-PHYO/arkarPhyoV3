import { NextPage } from "next";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContextProps, AppWrapperProps } from "../types";

const AppContextDefaultValues: AppContextProps = {
  defaultPageId: process.env.NEXT_PUBLIC_NOTION_DEFAULT_EXP_PAGE_ID,
};

const AppContext = createContext<AppContextProps | any>(null);
// const AppContext = createContext<AppContextProps | any>(
//   AppContextDefaultValues
// );

export const useAppContext = () => {
  const state = useContext(AppContext);

  if (state === undefined) {
    throw new Error("useAppContext must be used within a AuthProvider");
  }

  return state;
};

export const AppWrapper: NextPage<AppWrapperProps> = ({ children }) => {
  const id = AppContextDefaultValues.defaultPageId;
  const [pageId, setPageId] = useState<AppWrapperProps>(id);
  const state = {
    pageId,
    setPageId,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
