import { useContext } from "react";
import { AppContext } from "@/context"
import { Skill } from "@/@types";

export const useSkill = (): Skill[] => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useSkill must be used within an AppProvider');
  }

  return context.skills;
};
