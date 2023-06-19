import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Contact, Experience, Skill } from '@/@types';
import { ContactsDB, ExperiencesDB, SkillsDB } from '@/database';

export interface AppContextData {
  loading: boolean;
  contacts: Contact[];
  experiences: Experience[];
  skills: Skill[];
}

const AppContext = createContext<AppContextData>(
  {} as AppContextData,
);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  const handleInitialData = useCallback(() => {
    try {
      setIsLoading(true);
      setContacts(ContactsDB);
      setExperiences(ExperiencesDB);
      setSkills(SkillsDB);
    } catch (error: any) {
      console.log(error);
    } finally {
      // setTimeout(() => setIsLoading(false), 500);
      setIsLoading(false);
    }
  }, [setContacts, setExperiences, setSkills, setIsLoading]);

  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);

  return (
    <AppContext.Provider
      value={{
        loading: isLoading,
        contacts,
        experiences,
        skills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
