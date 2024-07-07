"use client";
import { links } from "@/lib/data";
import {
  ActionSectionContextProviderProps,
  ActiveSectionContextType,
  SectionName,
} from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const ActionSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActionSectionContextProvider = ({
  children,
}: ActionSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // keep track of this to disable autoselection of a nav element when it comes in view when I click

  return (
    <ActionSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActionSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = useContext(ActionSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext is null");
  }
  return context;
}

export default ActionSectionContextProvider;
