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
        <Card key={column.key} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-400">
              <column.icon className={`size-4 ${column.accent}`}/>
              {column.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-55 overflow-y-auto ">
            {isLoading ? (
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : data && data[column.key].length > 0 ? (
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground text-left">
                {data[column.key].map((item, id) => (
                  <li key={id} className="flex gap-2 mr-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground text-blue-400">
                No {column.key} to display. Run a search to see results here.
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
