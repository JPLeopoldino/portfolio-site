import { useContext } from "react";
import { AppContext } from "@/context"
import { Contact } from "@/@types";

export const useContact = (): Contact[] => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useContact must be used within an AppProvider');
  }

  return context.contacts;
};
