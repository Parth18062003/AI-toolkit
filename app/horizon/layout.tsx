import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative flex">
      <div className="hidden lg:flex lg:flex-col lg:w-72 z-40 bg-neutral-400 dark:bg-neutral-800 ">
        <Sidebar />
      </div>
      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
