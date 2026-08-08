"use client";

import { SearchForm } from "@/components/Form/searchForm";
import { AppSidebar } from "@/components/Sidebar-Component/app-sidebar";
import { OpportunityCards } from "@/components/Cards/opportunity-card";
import { MarketDistributionCharts } from "@/components/Charts/MarketDistributionCharts";

import { useOpportunitySearchContext } from "@/context/OpportunitySearchContext";
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

export default function Page() {
  const { summary, isLoading, error, search } =
    useOpportunitySearchContext();

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
          <SearchForm onSearch={search} isLoading={isLoading} />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <OpportunityCards data={summary} isLoading={isLoading} />
          { summary && (
            <MarketDistributionCharts
              categoryDistribution={summary.categoryDistribution}
              distanceDistribution={(summary as any).distanceDistribution}
            />
          ) }
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
