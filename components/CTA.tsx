"use client";

import Link from "next/link";
import Phone from "./ui/floating-phone";
import { useUser } from "@clerk/nextjs";

const CTA = () => {
  const { isSignedIn } = useUser();
  return (
    <section className="w-full px-8 py-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Elevate your creativity
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent  bg-gradient-to-b from-neutral-800 dark:from-neutral-100 to-neutral-500 dark:to-neutral-400">
          Discover new possibilities
        </h3>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-400 my-4 md:my-6">
          Unleash the power of AI to transform your projects.
        </p>
        <Link
          href={isSignedIn ? "/dashboard" : "/auth/sign-in"}
          className="bg-indigo-500 text-white font-medium py-3 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
        >
          Get Started Now{" "}
        </Link>
      </div>
      <Phone />
    </section>
  );
};

export default CTA;
