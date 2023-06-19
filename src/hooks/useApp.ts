import { useContext } from "react";
import { AppContext, AppContextData } from "@/context";

export const useApp = (): Omit<AppContextData, 'contacts' | 'experiences' | 'skills'> => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
};
