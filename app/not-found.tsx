"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <Content />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const Content = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-200 dark:bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black dark:text-neutral-50 text-neutral-700">
        404
      </p>
      <p className="text-center text-neutral-600 dark:text-neutral-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link href='/' className="w-fit bg-neutral-950 dark:bg-neutral-200  px-4 py-2 font-semibold dark:text-neutral-700 text-neutral-300 transition-colors dark:hover:bg-neutral-50 hover:bg-neutral-700">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
