"use client";

import { SearchForm } from "@/components/Form/searchForm";
import { AppSidebar } from "@/components/Sidebar-Component/app-sidebar";
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
import { OpportunityCards } from "@/components/Cards/opportunity-card";
import type { OpportunitySummary } from "@/components/Cards/card-interface";
import { useState } from "react";


export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const [summary, setSummary] = useState<OpportunitySummary | null>(null);
  
  function handleSearch(category: string) {
    setIsLoading(true);
    console.log("Searching for category:", category);
  setTimeout(() => {
    setSummary({
      opportunities: [`Growing demand in underserved segment, Low competition on pricing tier. Opportunity 1 for ${category}`, `Opportunity 2 for ${category}`, `Opportunity 3 for ${category}`],
      risks: [`Risk 1 for ${category}`, `Risk 2 for ${category}`],
      recommendations: [`Focus on niche vertical first. Recommendation 1 for ${category}`, `Recommendation 2 for ${category}`, `Recommendation 3 for ${category}`],
    });
    setIsLoading(false);
    console.log("Search completed for category:", category, "with summary:", summary)
    }, 2000)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 text-lg font-medium text-orange-500">
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
          <OpportunityCards data={summary} isLoading={isLoading} />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
