import type { FourSquareSearchResponse } from "@/types/fourSquare.types";

const API_URL = import.meta.env.VITE_API_URL;

const DEFAULT_LOCATION = "Bogota";

export async function fetchOpportunities(term: string): Promise<FourSquareSearchResponse> {
  const url = new URL(`${API_URL}/api/search`);
  url.searchParams.set("term", term);
  url.searchParams.set("location", DEFAULT_LOCATION);

  const response = await fetch(url)

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody?.error?.message ?? "Failed to fetch data from the API");
  }

  return response.json();
}
