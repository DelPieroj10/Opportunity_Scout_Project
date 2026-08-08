import type{ FourSquareBusiness } from "../types/fourSquare.types";

export interface CategoryDistributionItem {
  category: string;
  count: number;
  percentage: number;  
}

export interface DistanceBucketItem {
  label: string;
  count: number;
  percentage: number;
}

const DISTANCE_BUCKETS = [
  {label: "0-500m", maxMeters: 500},
  {label: "500m-1km", maxMeters: 1000},
  {label: "1km-2km", maxMeters: 2000},
  {label: "2km+", maxMeters: Infinity}
] as const;

export function buildCategoryDistribution (
  businesses: FourSquareBusiness[]
): CategoryDistributionItem[] {
  const total = businesses.length;
  if (total === 0) return [];

  const counts = new Map<string, number>();

  for (const business of businesses) {
    const primaryCategory = business.categories[0]?.name ?? "Uncategorized";
    counts.set(primaryCategory, (counts.get(primaryCategory) ?? 0) + 1);
  }
  return Array.from(counts.entries()).map(([category, count]) => ({
    category,
    count,
    percentage: Math.round((count / total) * 100)
  }))
  .sort((a, b) => b.count - a.count);
}


export function buildLocationDistribution ( businesses: FourSquareBusiness[]
  ): DistanceBucketItem[] {
    const total = businesses.length;
    if (total === 0) return [];

    const counts = new Map<string, number>(
      DISTANCE_BUCKETS.map((bucket) => [bucket.label, 0])
    );
    for(const business of businesses) {
      const distance = business.distance;
      
      if (distance === undefined) continue;

      const bucket = DISTANCE_BUCKETS.find((b) => distance <= b.maxMeters);
      const label = bucket?.label ?? DISTANCE_BUCKETS[DISTANCE_BUCKETS.length -1].label;

      counts.set(label, (counts.get(label) ?? 0) + 1);
    }

    return DISTANCE_BUCKETS.map(({ label }) => {
    const count = counts.get(label) ?? 0;
    return {
      label,
      count,
      percentage: Math.round((count / total) * 100)
    };
  });
}
