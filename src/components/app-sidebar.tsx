"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { MdDashboard } from "react-icons/md";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: MdDashboard,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 " {...props}>
      <h1 className="text-3xl p-4 font-medium">Hello</h1>
      <SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
