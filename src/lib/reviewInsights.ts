import type { FourSquareBusiness } from "@/types/fourSquare.types";

export interface DigitalPresenceInsights {
  totalBusinesses: number;
  withWebsite: number;
  withoutWebsite: number;
  websiteCoveragePercentage: number;
  observations: string[];
  gapsExamples: string[];
}

export function buildDigitalPresenceInsights(
  businesses: FourSquareBusiness[],
): DigitalPresenceInsights {
  const totalBusinesses = businesses.length;

  if (totalBusinesses === 0) {
    return {
      totalBusinesses: 0,
      withWebsite: 0,
      withoutWebsite: 0,
      websiteCoveragePercentage: 0,
      observations: [],
      gapsExamples: [],
    };
  }

  const withWebsite = businesses.filter((b) => Boolean(b.website)).length;
  const withoutWebsite = totalBusinesses - withWebsite;
  const websiteCoveragePercentage = Math.round(
    (withWebsite / totalBusinesses) * 100,
  );

  const observations: string[] = [
    websiteCoveragePercentage < 50
      ? `Only ${websiteCoveragePercentage}% of competitors have a discoverable website — weak online presence is common in this category.`
      : `${websiteCoveragePercentage}% of competitors have a website — customers likely expect a solid digital presence here.`,
    `${withoutWebsite} out of ${totalBusinesses} businesses have no listed website, which usually means fewer public reviews and less visibility before a customer visits.`,
  ];

  const gapsExamples: string[] = businesses
    .filter((b) => !b.website)
    .slice(0, 5)
    .map((b) => b.name);

  return {
    totalBusinesses,
    withWebsite,
    withoutWebsite,
    websiteCoveragePercentage,
    observations,
    gapsExamples,
  };
}
