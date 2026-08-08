import { useState } from "react";
import { fetchOpportunities } from "@/lib/api";
import { mapFoursquareToSummary } from "@/lib/mapFoursquareToSummary";
import type { OpportunitySummary } from "@/components/Cards/card-interface";

interface UseOpportunitySearchResult {
  summary: OpportunitySummary | null;
  isLoading: boolean;
  error: string | null;
  search: (category: string, location: string) => Promise<void>;
}

export function useOpportunitySearch(): UseOpportunitySearchResult {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<OpportunitySummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function search(category: string, location: string) {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchOpportunities(category, location);
      setSummary(mapFoursquareToSummary(data, category));
    } catch (e) {
      console.error(e);
      setError("Something went wrong fetching opportunities. Try again.");
      setSummary(null);
    } finally {
      setIsLoading(false);
    }
  }

  return { summary, isLoading, error, search };
}
