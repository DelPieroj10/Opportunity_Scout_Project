"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const ACTIVE_STYLE =
  "data-active:bg-sidebar-primary data:active:font-semibold data-active:text-sidebar-primary-foreground data-active:hover:bg-sidebar-primary data-active:hover:text-sidebar-primary-foreground";

export function NavMain({
  items: items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sidebar-foreground/85">
        Platform
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((items) => (
          <Collapsible
            key={items.title}
            defaultOpen={items.isActive}
            render={<SidebarMenuItem />}
          >
            <CollapsibleTrigger
              render={
                <SidebarMenuButton
                  tooltip={items.title}
                  isActive={items.isActive}
                  className={ACTIVE_STYLE}
                >
                  <items.icon />
                  <span>{items.title}</span>
                  <ChevronRight className="ml-auto transition-transform group-data-panel-open/menu-button:rotate-90" />
                </SidebarMenuButton>
              }
            />
            {items.items?.length ? (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {items.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        render={
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        }
                      />
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            ) : null}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
