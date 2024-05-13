"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ui/darkMode-toggle";
import Link from "next/link";
import Menu from "./ui/menu-button";
import Logo from "./ui/logo";
import { UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

const Navbar = () => {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-black bg-opacity-40 backdrop-filter backdrop-blur-10 backdrop-saturate-174 border border-opacity-20">
      {/*bg-opacity-40 backdrop-filter backdrop-blur-10 backdrop-saturate-174 border border-opacity-20*/}
      <div className=" px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex gap-3 items-center text-2xl text-gray-900 dark:text-gray-200 font-semibold translate-x-1"
          >
            <Logo />
            <div className="hidden md:flex">HorizonAI</div><span className="sr-only">HorizonAI</span>
          </Link>
          <div className="flex space-x-4 text-gray-900 dark:text-gray-200">
            {/* Menu Button for Small Screens */}
            <div className=" md:hidden flex items-center space-x-4 cursor-pointer">
              <ModeToggle />
              {user && resolvedTheme === "dark" ? (
                <UserButton
                  appearance={{
                    baseTheme: dark,
                  }}
                />
              ) : (
                user && <UserButton />
              )}
              <Menu onClick={toggleMenu} />
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4 mt-3">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="/auth/sign-in">Login</Link>
            </div>
          </div>
          <div className="hidden md:flex -translate-x-5 space-x-5">
            <ModeToggle />
            {user && resolvedTheme === "dark" ? (
              <UserButton
                appearance={{
                  baseTheme: dark,
                }}
              />
            ) : (
              user && <UserButton />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3">
            <div className="flex flex-col items-end space-y-3 mb-2 text-xl">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="/auth/sign-in">Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;