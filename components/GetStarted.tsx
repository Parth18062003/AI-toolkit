"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export const GetStarted = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const endDate = new Date("July 25, 2024");
    const currentDate = new Date();
    const timeDifference = endDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    setDaysLeft(daysRemaining);
  }, []);
  return (
    <section className="bg-neutral-200 dark:bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Conversation"
          subheading="Because talking to yourself is overrated"
          imgSrc="https://plus.unsplash.com/premium_photo-1666298863696-8e8da5d85f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          href="/horizon/text-generation"
        />
        <Link
          heading="Image"
          subheading="Because drawing is for amateurs"
          imgSrc="https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          href="/horizon/image-generation"
        />
        <Link
          heading="Audio"
          subheading="Because who needs a real musician?"
          imgSrc="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBpbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
          href="/horizon/audio-generation"
        />
        <Link
          heading="Video"
          subheading="Because you're not Spielberg, but close"
          imgSrc="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW98ZW58MHx8MHx8fDA%3D"
          href="/horizon/video-generation"
        />
        <Link
          heading="Code"
          subheading="Because typing is for dinosaurs"
          imgSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"
          href="/horizon/code-generation"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <TextRevealCard
          text="Coming Soon"
          revealText={`Launching in ${daysLeft} days!`}
        >
          <TextRevealCardTitle>
            We are working on something new!
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Bookmark this page and check back soon for updates.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 dark:hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-700 dark:text-neutral-300 transition-colors duration-500 group-hover:text-neutral-800
          dark:group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-700 dark:text-neutral-400 transition-colors duration-500 group-hover:text-neutral-800 dark:group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-800 dark:text-neutral-50 " />
      </motion.div>
    </motion.a>
  );
};
