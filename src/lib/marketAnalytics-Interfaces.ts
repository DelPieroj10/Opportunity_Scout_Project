"use client";

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

export interface MarketTrendsDescription {
  summary: string;
  details: string[];
}
