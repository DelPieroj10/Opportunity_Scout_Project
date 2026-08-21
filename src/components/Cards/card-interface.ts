"use client";

import type {
  CategoryDistributionItem,
  DistanceBucketItem,
  MarketTrendsDescription,
} from "@/lib/marketAnalytics-Interfaces";
import type { DigitalPresenceInsights } from "@/lib/reviewInsights";

export interface OpportunitySummary {
  opportunities: string[];
  risks: string[];
  recommendations: string[];
  categoryDistribution: CategoryDistributionItem[];
  distanceDistribution: DistanceBucketItem[];
  marketTrends: MarketTrendsDescription;
  digitalPresence: DigitalPresenceInsights;
}