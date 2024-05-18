import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative flex">
      <div className="hidden md:flex md:flex-col md:w-72 z-50 bg-neutral-400 dark:bg-neutral-800">
        <Sidebar />
      </div>
      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
