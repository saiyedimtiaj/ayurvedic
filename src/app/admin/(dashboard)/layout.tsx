import SideBar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <SideBar>{children}</SideBar>
    </div>
  );
};

export default layout;
