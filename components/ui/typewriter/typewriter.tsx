"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./cursor";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Typewriter() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Text Generation",
    "Image Generation",
    "Video Generation",
    "Audio Generation",
    "Code Generation",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span className={`relative md:text-2xl text-xl lg:text-3xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 dark:from-neutral-100 to-neutral-500 dark:to-neutral-400 text-center ${montserrat.className}`}>
      Unleash the power of AI with <div className="inline-flex w-[20rem] sm:w-[30rem] overflow-hidden">
        <motion.span className="translate-x-9 sm:translate-x-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{displayText}</motion.span>
        <CursorBlinker />
        </div>
      </span>
    </>
  );
}