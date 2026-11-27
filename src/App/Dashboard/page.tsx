"use client";

import { LayoutGrid, MessageSquare, TrendingUp } from "lucide-react";

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

const TAB_TRIGGER_CLASS =
  "h-10 flex-none gap-2 rounded-full border-border bg-card px-4 text-muted-foreground shadow-xs hover:text-foreground " +
  "data-active:border-primary data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm " +
  "dark:border-input dark:data-active:border-primary dark:data-active:bg-primary dark:data-active:text-primary-foreground";

export default function Page() {
  const { summary, isLoading, error, search } = useOpportunitySearchContext();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center">
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
            <TabsList className="h-auto w-fit flex-wrap gap-2 bg-transparent p-0 group-data-horizontal/tabs:h-auto">
              <TabsTrigger value="overview" className={TAB_TRIGGER_CLASS}>
                <LayoutGrid />
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="customer-reviews"
                className={TAB_TRIGGER_CLASS}
              >
                <MessageSquare />
                Customer Reviews
              </TabsTrigger>
              <TabsTrigger value="market-trends" className={TAB_TRIGGER_CLASS}>
                <TrendingUp />
                Market Trends
              </TabsTrigger>
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
