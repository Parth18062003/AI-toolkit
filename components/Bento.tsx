"use client";
import React, { useEffect, useState } from "react";
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbCode,
  TbVideo,
} from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";
import { IoMdChatbubbles } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { FaImages } from "react-icons/fa";

export function Bento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[23rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-700 flex-shrink-0" />
        <div className="w-full bg-neutral-300 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-neutral-300 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-700 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-700 flex-shrink-0" />
        <div className="w-full bg-neutral-300 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "80%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "80%"],
      transition: {
        duration: 2,
      },
    },
  };

  const arr = new Array(6).fill(0);

  const width = ["70%", "40%", "60%", "80%", "50%", "70%"];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-col w-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] space-y-2 p-4 rounded-lg"
    >
      <motion.div className="flex flex-row rounded-full border border-neutral-200 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-full ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          Create a heart-pounding drum sequence that evokes the energy of a live
          concert.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-700 flex-shrink-0" />
      </motion.div>
      {arr.map((_, i) => (
        <div key={"skeleton-two-icon" + i} className="flex items-center">
          <TbPlayerPlayFilled className="text-black dark:text-white " />
          <TbPlayerPauseFilled className="text-black dark:text-white" />
          <motion.div
            key={"skeleton-two-line" + i}
            variants={variants}
            style={{
              maxWidth: width[i],
            }}
            className="rounded-full h-4 bg-neutral-300 dark:bg-black border border-neutral-200 dark:border-white/[0.2]"
          ></motion.div>
        </div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[8rem] rounded-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        {/* Video element */}
        <video
          width="100%"
          height="100%"
          controls={false}
          preload="none"
          autoPlay={true}
          loop
          muted
          className={`absolute inset-0 ${isHovered ? "block" : "hidden"}`}
        >
          <source
            src="https://videos.pexels.com/video-files/3987732/3987732-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay */}
<div className="flex justify-center items-center text-neutral-950 dark:text-neutral-200 h-full">
  <TbPlayerPlayFilled className="h-6 w-6 -ml-2 mr-2" />
  Hover to Play video</div>
      </div>
    </motion.div>
  );
};


const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-neutral-200 p-4 dark:bg-neutral-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          height={200}
          width={200}
          src="https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="White horse on a field 1"
          className="rounded-full h-20 sm:h-24 w-24 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          White horse on a field
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Graceful
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-neutral-200 dark:bg-neutral-950 p-4 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          height={200}
          width={200}
          src="https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="White horse on a field 2"
          className="rounded-full h-16 sm:h-24 w-24 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          White horse on a field
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Majestic{" "}
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-neutral-200 p-4 dark:bg-neutral-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          height={200}
          width={200}
          src="https://images.pexels.com/photos/1996338/pexels-photo-1996338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="White horse on a field 3"
          className="rounded-full h-16 sm:h-24 w-24 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          White horse on a field
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Enchanting{" "}
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const codeSnippets = [
    `Sure, here's a code for creating a simple web server using Express.js:`,

    `const express = require('express');
      const app = express();
      
      app.get('/', (req, res) => {
        res.send('Hello, world!');
      });
      
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
      `,
  ];

  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-200 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          Create a simple Express JS server.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-700 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-col rounded-2xl border border-neutral-200 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          {codeSnippets[0]}
        </p>
        <code className="bg-neutral-200 dark:bg-neutral-800 text-xs text-neutral-600 dark:text-neutral-300">
          {codeSnippets[1]}
        </code>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "AI Text Generation",
    description: (
      <span className="text-sm">
        Explore the capabilities of AI in generating text content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: (
      <IoMdChatbubbles className="h-4 w-4 text-neutral-600 dark:text-neutral-200" />
    ),
    href: "/text-generation",
  },
  {
    title: "Audio Generation",
    description: (
      <span className="text-sm">
        Let AI handle the creation of audio content effortlessly.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: (
      <MdAudiotrack className="h-4 w-4 text-neutral-600 dark:text-neutral-200" />
    ),
    href: "/audio-generation",
  },
  {
    title: "Video Generation",
    description: (
      <span className="text-sm">
        Experience AI-driven video content creation tailored to your needs.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: (
      <TbVideo className="h-4 w-4 text-neutral-600 dark:text-neutral-200" />
    ),
    href: "/video-generation",
  },
  {
    title: "Image Generation",
    description: (
      <span className="text-sm">
        Unlock the potential of AI for generating captivating images.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: (
      <FaImages className="h-4 w-4 text-neutral-600 dark:text-neutral-200" />
    ),
    href: "/image-generation",
  },

  {
    title: "Code Generation",
    description: (
      <span className="text-sm">
        Simplify code creation with the help of AI-driven solutions.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <TbCode className="h-4 w-4 text-neutral-600 dark:text-neutral-200" />,
    href: "/code-generation",
  },
];
