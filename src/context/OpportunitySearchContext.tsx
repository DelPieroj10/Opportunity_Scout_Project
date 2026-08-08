import { createContext, useContext, type ReactNode } from "react";
import { useOpportunitySearch } from "@/hooks/useOpportunitySearch";

type OpportunitySearchContextValue = ReturnType<typeof useOpportunitySearch>;

const OpportunitySearchContext = createContext<OpportunitySearchContextValue | undefined>(undefined);

interface OpportunitySearchContextProps {
  children: ReactNode;
}

export function OpportunitySearchProvider({ children }: OpportunitySearchContextProps) {
  const value = useOpportunitySearch();

  return (
    <OpportunitySearchContext.Provider value={value}>
      {children}
    </OpportunitySearchContext.Provider>
  );
};


export function useOpportunitySearchContext(): OpportunitySearchContextValue {
  const context = useContext(OpportunitySearchContext);

  if (context === undefined) {
    throw new Error("useOpportunitySearchContext must be used within an OpportunitySearchProvider");
  };
  return context;
};
