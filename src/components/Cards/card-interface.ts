"use client";

import type {
  CategoryDistributionItem,
  DistanceBucketItem,
} from "@/lib/marketAnalytics";

export interface OpportunitySummary {
  opportunities: string[];
  risks: string[];
  recommendations: string[];
  categoryDistribution: CategoryDistributionItem[];
  distanceDistribution: DistanceBucketItem[];
}