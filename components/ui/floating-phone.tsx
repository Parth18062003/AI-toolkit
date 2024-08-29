"use client";

import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Logo from "./logo";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Phone: React.FC = () => {
  return (
    <section className="grid place-content-center bg-neutral-200 dark:bg-neutral-950 p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone: React.FC = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-violet-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar: React.FC = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-950"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen: React.FC = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-gradient-to-b from-neutral-100 to-neutral-400">
      <div className="w-60 h-60 translate-x-24 translate-y-1/3 text-neutral-950">
        <Logo fill="#2A2E4E" />
        <h2 className="-translate-x-3 translate-y-2">HorizonAI</h2>
      </div>

      <Link
        href={isSignedIn ? "/get-started" : "/auth/sign-in"}
        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white  py-2 text-sm font-medium text-violet-800 backdrop-blur text-center"
      >
        Get Started
      </Link>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
    </div>
  );
};

export default Phone;
