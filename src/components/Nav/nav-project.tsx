"use client"

import { Fragment } from "react"
import { MoreHorizontal, type LucideIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface ProjectAction {
  label: string;
  icon: LucideIcon;
  destructive?: boolean; 
}

interface ProjectItem {
  name: string;
  url: string;
  icon: LucideIcon;
  actions: ProjectAction[];
}

export function NavProjects({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-sidebar-foreground/85">
        Projects
      </SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton 
              render={
                <a href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              }          
            />
            <DropdownMenu>
              <DropdownMenuTrigger 
                render={
                  <SidebarMenuAction>
                    <MoreHorizontal />
                    <span className="sr-only">More actions for {item.name}</span>
                  </SidebarMenuAction>
                }
              />
              <DropdownMenuContent
                className="w-48"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                {item.actions.map((action) => (
                  <Fragment key={action.label}>
                    {action.destructive && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      variant={action.destructive ? "destructive" : "default"}
                    >
                      <action.icon />
                      <span>{action.label}</span>
                    </DropdownMenuItem>
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
