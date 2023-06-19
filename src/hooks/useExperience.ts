import { useContext } from "react";
import { AppContext } from "@/context"
import { Experience } from "@/@types";

export const useExperience = (): Experience[] => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useExperience must be used within an AppProvider');
  }

  return context.experiences;
};