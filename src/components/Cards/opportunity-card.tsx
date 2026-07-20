"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { OpportunitySummary } from "./card-interface";
import { COLUMNS } from "./columns";


interface OpportunityCardProps {
  data: OpportunitySummary | null;
  isLoading?: boolean;
}


export function OpportunityCards({data, isLoading = false}: OpportunityCardProps) {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {COLUMNS.map((column) => (
        <Card key={column.key} className="aspect-video overflow-y-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-400">
              <column.icon className={`size-4 ${column.accent}`}/>
              {column.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : data && data[column.key].length > 0 ? (
              <ul className="flex flex-2 gap-2 text-sm text-muted-foreground">
                {data[column.key].map((item, id) => (
                  <li key={id} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No {column.key} to display. Run a search to see results here.
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
