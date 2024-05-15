import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center items-center h-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    {children}</div>;
};

export default Authlayout;
