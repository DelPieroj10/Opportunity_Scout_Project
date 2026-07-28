import type { FourSquareSearchResponse } from "@/types/fourSquare.types";
import type { OpportunitySummary } from "@/components/Cards/card-interface";

export function mapFoursquareToSummary(
  data: FourSquareSearchResponse,
  term: string,
): OpportunitySummary {
  const businesses = data.results ?? [];

	if (businesses.length === 0) {
		return {
			opportunities: [`No direct competitors found for "${term}" in this area — potential white space.`],
      risks: ["Low data availability may also mean low market visibility overall."],
      recommendations: ["Try a broader search term or a nearby location to validate this signal."],
		}
	}

	const uniqueCategories = Array.from(
		new Set(businesses.flatMap((b: { categories: any[]; }) => b.categories.map((c) => c.name)))
	)

	const opportunities = [
		`${uniqueCategories.length} distinct sub-categories detected - look for undeserved niches within them.`,
	]

	const risks = [
		`${businesses.length} existing businesses already compete under "${term}" in this area.`,
	]

	const recommendations = businesses
	.slice(0, 5)
	.map((b: { name: string; website?: string; categories: any[] }) => `Study "${b.name}"${b.website ? `(${b.website})` : ""} as a reference competitor.`)

  return { opportunities, risks, recommendations };
}
