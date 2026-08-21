"use client";

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";
import type { MarketTrendsDescription } from "@/lib/marketAnalytics-Interfaces";

interface MarketTrendsPanelProps {
  data: MarketTrendsDescription | null;
  isLoading: boolean;
}

export function MarketTrendsPanel({
  data,
  isLoading = false,
}: MarketTrendsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-400">
          <TrendingUp className="size-4 text-purple-500" />
          Market Trends (estimated)
        </CardTitle>
        <CardDescription className="text-gray-50">
          Derived from category concentration and geographic clustering of the
          current results — not a historical time series.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : data && data.details.length > 0 ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-foreground">
              {data.summary}
            </p>

            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {data.details.map((detail, index) => (
                <li key={index} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-blue-400">
            No data to display yet. Run a search to see estimated market trends
            signals here.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
