"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type {
  CategoryDistributionItem,
  DistanceBucketItem,
} from "@/lib/marketAnalytics";

interface MarketDistributionChartsProps {
  categoryDistribution: CategoryDistributionItem[];
  distanceDistribution: DistanceBucketItem[];
}

export function MarketDistributionCharts({
  categoryDistribution,
  distanceDistribution,
}: MarketDistributionChartsProps) {
  if (categoryDistribution.length === 0 && distanceDistribution.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Category positioning
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryDistribution} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" unit="%" />
              <YAxis
                type="category"
                dataKey="category"
                width={110}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value, _name, item) => [
                  `${value}% (${item.payload.count} places)`,
                  "Share of results",
                ]}
              />
              <Bar dataKey="percentage" radius={[0, 4, 4, 0]} fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Proximity to searched location
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distanceDistribution}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis unit="%" />
              <Tooltip
                formatter={(value, _name, item) => [
                  `${value}% (${item.payload.count} places)`,
                  "Share of results",
                ]}
              />
              <Bar dataKey="percentage" radius={[4, 4, 0, 0]} fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
