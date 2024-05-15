"use client"

import Link from "next/link";
import { BackgroundCellCore } from "./ui/background-ripple";
import Typewriter from "./ui/typewriter/typewriter";
import { Montserrat } from "next/font/google";
import { useUser } from "@clerk/nextjs";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Hero = () => {
  const { isSignedIn } = useUser();
    return (
      <div className="relative h-screen bg-neutral-200 dark:bg-neutral-950 flex justify-center overflow-hidden">
        <BackgroundCellCore />
        <div className="relative z-50 mt-40 pointer-events-none select-none">
          <h1
            className={`text-5xl md:text-6xl lg:text-8xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 dark:from-neutral-100 to-neutral-500 dark:to-neutral-400 pointer-events-none ${montserrat.className}`}
          >
            HorizonAI
          </h1>
          <h2 className="translate-x-12 md:translate-x-24 translate-y-4">
            <Typewriter />
          </h2>
        </div>
        <Link href={isSignedIn ? "/get-started" : "/auth/sign-in"} className="translate-y-80 md:translate-y-96 p-[2px] absolute z-40">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-slate-950 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Get Started
          </div>
        </Link>
      </div>
    );
  };