"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-neutral-200 dark:bg-neutral-950 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "This AI toolkit revolutionized how I create content. It's like having a writing assistant that never sleeps!",
      name: "Sarah Johnson",
      title: "Content Creator",
    },
    {
      quote:
        "As a podcaster, finding the right music and sound effects used to be a challenge. With this toolkit, I can create custom audio tracks in minutes!",
      name: "David Rodriguez",
      title: "Podcast Host",
    },
    {
      quote:
        "I never thought I could create professional-looking videos until I discovered this toolkit. Now, my social media content stands out from the crowd!",
      name: "Emily Chen",
      title: "Social Media Manager",
    },
    {
      quote:
        "As a developer, I'm always looking for ways to speed up my workflow. This toolkit generates code snippets faster than I ever could!",
      name: "Alex Smith",
      title: "Software Engineer",
    },
    {
      quote:
        "Understanding the sentiment of my audience has never been easier. Thanks to this toolkit, I can analyze text data in seconds!",
      name: "Michael Thompson",
      title: "Marketing Analyst",
    },
  ];
  
