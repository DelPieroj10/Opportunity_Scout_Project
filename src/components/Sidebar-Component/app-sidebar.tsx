"use client";
import * as React from "react";

import {
  DollarSign,
  Eye,
  Folder,
  History,
  Search,
  Share2,
  Trash2,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/Nav/nav-main";
import { NavProjects } from "@/components/Nav/nav-project";
import { NavSettings } from "@/components/Nav/nav-settings";
import { NavUser } from "@/components/Nav/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
        { title: "Define Market Category", url: "#" },
        { title: "Configure Sources", url: "#" },
      ],
    },
    {
      title: "Competitors",
      url: "#",
      icon: Users,
      items: [
        { title: "Comparative Analysis", url: "#" },
        { title: "Define Market Competitors", url: "#" },
      ],
    },
    {
      title: "Prices",
      url: "#",
      icon: DollarSign,
      items: [{ title: "Search Prices", url: "#" }],
    },
  ],
  projects: [
    {
      name: "Saved",
      url: "#",
      icon: Folder,
      actions: [
        { label: "View Projects", icon: Eye },
        { label: "Share Projects", icon: Share2 },
        { label: "Delete Projects", icon: Trash2 },
      ],
    },
    {
      name: "History ",
      url: "#",
      icon: History,
      actions: [
        { label: "View History", icon: Eye },
        { label: "Share History", icon: Share2 },
        { label: "Delete History", icon: Trash2, destructive: true },
      ],
    }
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                    <span className="truncate text-xs">Research Workspace</span>
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
        <NavSettings className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
