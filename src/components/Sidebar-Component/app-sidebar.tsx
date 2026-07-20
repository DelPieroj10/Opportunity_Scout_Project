"use client";
import * as React from "react";

import {
	Search,
  BarChart3,
  Users,
  DollarSign,
  MessageSquareWarning,
  TrendingUp,
  History,
  Settings2,
  LifeBuoy,
  Send
} from "lucide-react";

import { NavMain } from "@/components/Nav/nav-main";
import { NavProjects } from "@/components/Nav/nav-project";
import { NavSecondary } from "@/components/Nav/nav-secondary";
import { NavUser } from "@/components/Nav/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Piero Dev",
    email: "piero@opportunityscout.io",
    avatar: "/avatars/piero.jpg",
  },
  navMain: [
    {
      title: "New Research",
      url: "#",
      icon: Search,
      isActive: true,
      items: [
        { title: "Define market category", url: "#" },
        { title: "Configure sources", url: "#" },
      ],
    },
    {
      title: "Competitors",
      url: "#",
      icon: Users,
      items: [
        { title: "Comparative analysis", url: "#" },
        { title: "Positioning", url: "#" },
      ],
    },
    {
      title: "Prices",
      url: "#",
      icon: DollarSign,
      items: [
        { title: "Detected strategies", url: "#" },
        { title: "Sector benchmarks", url: "#" },
      ],
    },
    {
      title: "Customer Reviews",
      url: "#",
      icon: MessageSquareWarning,
      items: [
        { title: "General sentiment", url: "#" },
        { title: "Frequent complaints", url: "#" },
      ],
    },
    {
      title: "Market Trends",
      url: "#",
      icon: TrendingUp,
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Send feedback", url: "#", icon: Send },
  ],
  projects: [
    { name: "SaaS PYMEs Q3", url: "#", icon: BarChart3 },
    { name: "Report history", url: "#", icon: History },
    { name: "General settings", url: "#", icon: Settings2 },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps <typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}> 
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton 
							size="lg"
							render={
								<a href="#">
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
										<Search className="size-4 text-orange-500" />
									</div>
									<div className="grid flex-1 text-left text-sm text-orange-500 leading-tight">
										<span className="truncate font-semibold">
											Opportunity Scout
										</span>
										<span className="truncate text-xs">
											Research Workspace
										</span>								
									</div>
								</a>
							}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto text-gray-50" />
			</SidebarContent>

			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	)
}

