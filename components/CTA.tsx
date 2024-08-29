"use client";

import Link from "next/link";
import Phone from "./ui/floating-phone";
import { useUser } from "@clerk/nextjs";

const CTA = () => {
  const { isSignedIn } = useUser();
  return (
    <section className="w-full px-8 py-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm bg-gradient-to-tl from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">
          Elevate your creativity
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent  bg-gradient-to-b from-neutral-800 dark:from-neutral-100 to-neutral-500 dark:to-neutral-400">
          Discover new possibilities
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-400 my-4 md:my-6">
          Unleash the power of AI to transform your projects.
        </p>
        <Link
          href={isSignedIn ? "/get-started" : "/auth/sign-in"}
          className="group/button relative inline-flex bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-3 px-4 rounded active:scale-95 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
        >
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]" >
            <div className="relative h-full w-8 bg-neutral-200/10 dark:bg-neutral-950/10" />
          </div>
          Get Started now
        </Link>
      </div>
      <Phone />
    </section>
  );
};

export default CTA;
