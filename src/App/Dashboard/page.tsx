"use client";

import { SearchForm } from "@/components/Form/searchForm";
import { AppSidebar } from "@/components/Sidebar-Component/app-sidebar";
import { OpportunityCards } from "@/components/Cards/opportunity-card";
import { CustomerReviewsPanel } from "@/components/Insights/CustomerReviewsPanel";
import { MarketTrendsPanel } from "@/components/Insights/MarketTrendsPanel";

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MarketDistributionCharts = lazy(() =>
  import("@/components/Charts/MarketDistributionCharts").then((mod) => ({
    default: mod.MarketDistributionCharts,
  })),
);

export default function Page() {
  const { summary, isLoading, error, search } = useOpportunitySearchContext();

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

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="customer-reviews">
                Customer Reviews
              </TabsTrigger>
              <TabsTrigger value="market-trends">Market Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="flex flex-col gap-4">
              <OpportunityCards data={summary} isLoading={isLoading} />
              {summary && (
                <Suspense
                  fallback={
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Skeleton className="h-64 w-full" />
                      <Skeleton className="h-64 w-full" />
                    </div>
                  }
                >
                  <MarketDistributionCharts
                    categoryDistribution={summary.categoryDistribution}
                    distanceDistribution={summary.distanceDistribution}
                  />
                </Suspense>
              )}
            </TabsContent>
            <TabsContent value="customer-reviews">
              <CustomerReviewsPanel
                data={summary?.digitalPresence ?? null}
                isLoading={isLoading}
              />
            </TabsContent>
            <TabsContent value="market-trends">
              <MarketTrendsPanel
                data={summary?.marketTrends ?? null}
                isLoading={isLoading}
              />
            </TabsContent>
          </Tabs>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
