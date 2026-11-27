"use client"

import { Info, Moon, Settings2, ShieldCheck} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/use-theme";

export function NavSettings({ className }: { className?: string }) {
	const { isMobile } = useSidebar();
	const { isDark, setDarkMode } = useTheme();

	return (
		<SidebarGroup className={className}>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger 
							render={
								<SidebarMenuButton tooltip="Settings">
									<Settings2 />
									<span> Settings </span>
								</SidebarMenuButton>
							}
						/>
						<DropdownMenuContent align="end" className="w-56" side={isMobile ? "top" : "right"}>
							<DropdownMenuCheckboxItem
								checked={isDark}
								onCheckedChange={setDarkMode}
							>
								<Moon/>
								<span>Dark Mode</span>
							</DropdownMenuCheckboxItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Info />
								<span>About App</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<ShieldCheck />
								<span>Privacy Policy</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem> 
			</SidebarMenu>
		</SidebarGroup>	
	);
}
