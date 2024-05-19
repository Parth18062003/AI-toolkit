import React from "react";
import ModelSelect from "./model-select";

interface HeaderProps {
  title: string;
  description: string;
  icon?: string;
}

const Header = ({ title, description, icon }: HeaderProps) => {
  return (
    <div className="w-full p-6 lg:p-8 flex flex-col md:flex-row justify-between gap-4 mb-3">
      <div className="flex flex-col">
        <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
        <p className="text-base lg:text-lg">{description}</p>
      </div>
      <div className="w-[16rem]">
        <ModelSelect />
        <div className="sr-only">Select a model</div>
      </div>
    </div>
  );
};

export default Header;
