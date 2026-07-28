"use client";

import { useState } from "react";
import { SearchForm } from "@/components/Form/searchForm";
import { AppSidebar } from "@/components/Sidebar-Component/app-sidebar";
import { OpportunityCards } from "@/components/Cards/opportunity-card";
import type { OpportunitySummary } from "@/components/Cards/card-interface";
import { mapFoursquareToSummary } from "@/lib/mapFoursquareToSummary";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { fetchOpportunities } from "@/lib/api";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<OpportunitySummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(category: string) {
    setIsLoading(true);
    setError(null);
    console.log("Searching for category:", category);

    try {
      const data = await fetchOpportunities(category);
      setSummary(mapFoursquareToSummary(data, category));
    } catch (e) {
      console.error(e);
      setError("Something went wrong fetching opportunities. Try again.");
      setSummary(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center text-gap-2  font-medium text-orange-500">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Opportunity Scout</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <OpportunityCards data={summary} isLoading={isLoading} />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
