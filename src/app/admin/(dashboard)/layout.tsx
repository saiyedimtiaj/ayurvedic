import SideBar from "@/components/Sidebar";
import Provider from "@/utils/Provider";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <SideBar>
        <Provider>{children}</Provider>
      </SideBar>
    </div>
  );
};

export default layout;
