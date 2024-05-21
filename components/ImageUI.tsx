"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./ui/chat-header";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ConversationSchema } from "@/app/horizon/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import cat from "@/public/cat.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "@clerk/nextjs";
import Logo from "./ui/logo";
import { TbDownload } from "react-icons/tb";

interface Prediction {
  id: string;
  status: string;
  detail?: string;
  output?: string[];
}

export default function ImageUI() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const [messages, setMessages] = useState<
    {
      role: string;
      content: string;
      image?: string;
    }[]
  >([]);
  const isLoading = false;
  const { user } = useUser();

  const form = useForm<z.infer<typeof ConversationSchema>>({
    resolver: zodResolver(ConversationSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = e.currentTarget.prompt.value;
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: prompt },
    ]);

    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    let prediction: Prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail || "An error occurred");
      return;
    }

    setPrediction(prediction);
    const pollEndpoint = async () => {
      const response = await fetch("/api/image/" + prediction.id);
      prediction = await response.json();

      if (response.status !== 200) {
        setError(prediction.detail || "An error occurred");
        return;
      }

      setValue("");
      setPrediction(prediction);

      if (prediction.status !== "succeeded" && prediction.status !== "failed") {
        setTimeout(pollEndpoint, 5000);
      } else if (prediction.status === "succeeded" && prediction.output) {
        const outputImage = prediction.output[prediction.output.length - 1];
        if (outputImage) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "horizon", content: "", image: outputImage },
          ]);
        }
      }
    };

    pollEndpoint();
  };

  const handleDownload = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="w-full">
      <Header
        title="Image"
        description="Our most advanced conversational model"
      />

      <div className="max-w-4xl mx-auto px-2 sm:px-2 lg:px-8">
        <div className="max-w-4xl mx-3 sm:mx-auto mt-4">
          {messages.map((message, index) => (
            <div key={index}>
              {message.role === "user" && (
                <div className="mx-3 sm:mx-auto max-w-4xl flex justify-end gap-x-3 items-start mt-4">
                  <div className="flex flex-col items-end">
                    <div className="flex gap-x-3">
                      <span className="text-gray-700 dark:text-gray-300 self-center font-semibold text-xl">
                        {user?.firstName || user?.username}
                      </span>
                      <Avatar>
                        <AvatarImage src={user?.imageUrl} />
                        <AvatarFallback>
                          {user?.firstName && user?.lastName ? (
                            <>
                              {user?.firstName?.[0]}
                              {user?.lastName?.[0]}
                            </>
                          ) : (
                            <>{user?.username?.[0]}</>
                          )}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-md border my-3 p-2 px-4 max-w-3xl">
                      <p className="p-1">{message.content}</p>
                    </div>
                  </div>
                </div>
              )}
              {message.role === "horizon" && (
                <div className="mx-3 sm:mx-auto max-w-4xl flex gap-x-3 items-start mt-4">
                  <div className="flex flex-col items-start">
                    <div className="flex gap-x-3">
                      <span className="text-gray-700 dark:text-gray-300 self-center font-semibold text-xl">
                        Horizon
                      </span>
                      <Logo />
                    </div>
                    <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-md border my-3 p-4 text-neutral-800 dark:text-neutral-200">
                      <div className="flex justify-between items-center">
                        <p className="py-3 text-sm opacity-50">
                          Status: {prediction?.status}
                        </p>
                        <button
                          onClick={() => handleDownload(message.image!)}
                          className="bg-indigo-500 text-white font-medium py-3 px-4 rounded-lg transition-all
                          hover:bg-indigo-600 active:scale-95"
                        >
                          <span className="sr-only">Download</span>
                          <TbDownload />
                        </button>
                      </div>
                      {message.image && (
                        <div className="relative w-full mt-5">
                          <Image
                            src={message.image}
                            alt="output"
                            height={600}
                            width={600}
                            className="rounded-xl"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {prediction && prediction.status !== "succeeded" && (
            <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md border my-3 p-4 text-neutral-800 dark:text-neutral-200">
              Horizon is thinking...
            </div>
          )}
        </div>

        <Form {...form}>
          <form
            id="prompt-form"
            onSubmit={handleSubmit}
            className={cn(
              "w-full relative max-w-4xl mx-auto sm:my-6 bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
              value && "bg-gray-50"
            )}
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="text"
                      placeholder="Message Horizon"
                      autoComplete="off"
                      autoCorrect="on"
                      className={cn(
                        "w-full absolute text-xl sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
                        animating && "text-transparent dark:text-transparent"
                      )}
                      value={value}
                      onChange={(e) => {
                        if (!animating) {
                          setValue(e.target.value);
                          field.onChange(e);
                        }
                      }}
                      id="prompt"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <button
              disabled={isLoading}
              type="submit"
              className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
            >
              <div className="sr-only">Enter</div>
              <motion.svg
                xmlns="http://www.www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 h-4 w-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.path
                  d="M5 12l14 0"
                  initial={{
                    strokeDasharray: "50%",
                    strokeDashoffset: "50%",
                  }}
                  animate={{
                    strokeDashoffset: value ? 0 : "50%",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                  }}
                />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </motion.svg>
            </button>
          </form>
        </Form>

        <span className="flex justify-center items-center text-center text-xs text-neutral-600 dark:text-neutral-300 sm:-mt-5 mb-10">
          Horizon can make mistakes. Please check important info.
        </span>

        {messages.length === 0 && !isLoading && (
          <div className="flex justify-center">
            <Image src={cat} alt="cat" width={600} height={600} priority/>
          </div>
        )}
      </div>
    </div>
  );
}
