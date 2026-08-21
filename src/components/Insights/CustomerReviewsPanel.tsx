"use client";

import { Globe, AlertTriangle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { DigitalPresenceInsights } from "@/lib/reviewInsights";

interface CustomerReviewsPanelProps {
  data: DigitalPresenceInsights | null;
  isLoading: boolean;
}

export function CustomerReviewsPanel({
  data,
  isLoading = false,
}: CustomerReviewsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-400">
          <Globe className="size-4 text-sky-500" />
          Customer Reviews (estimated)
        </CardTitle>
        <CardDescription className="text-gray-50">
          Foursquare doesn't expose review scores, so this is a heuristic based
          on how many competitors have a public website — a common proxy for
          online reputation and discoverability.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : data && data.totalBusinesses > 0 ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-sky-500">
                {data.websiteCoveragePercentage}%
              </span>
              <span className="text-sm text-muted-foreground">
                website coverage ({data.withWebsite}/{data.totalBusinesses})
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {data.observations.map((obs, index) => (
                <li key={index} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>

            {data.gapsExamples.length > 0 && (
              <div className="flex items-start gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-600">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                <span>
                  No website found for {data.gapsExamples.join(", ")}.
                </span>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-blue-400">
            No data to display yet. Run a search to see estimated customer
            review signal here.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
