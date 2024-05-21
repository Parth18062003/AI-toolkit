"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ConversationSchema } from "@/app/horizon/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Header from "./ui/chat-header";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Logo from "./ui/logo";
import ReactMarkdown from "react-markdown";
import cat from "@/public/cat.svg";
import Image from "next/image";

const CodeUI = () => {
  const form = useForm<z.infer<typeof ConversationSchema>>({
    resolver: zodResolver(ConversationSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const router = useRouter();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const isLoading = form.formState.isSubmitting;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const [userPrompt, setUserPrompt] = useState<string[]>([]);
  const { user } = useUser();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      form.handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (values: z.infer<typeof ConversationSchema>) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const response = await axios.post("/api/code", {
        messages: [...messages, userMessage],
      });
      const assistantMessage = {
        role: "assistant",
        content: response.data.content,
      };
      setMessages((currentMessages) => [
        ...currentMessages,
        userMessage,
        assistantMessage,
      ]);
      setUserPrompt([values.prompt]);
      //  saveChatHistory([...messages, userMessage, assistantMessage]);
      setValue("");
      form.reset();
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      router.refresh();
    }
  };

  /*   useEffect(() => {
    const savedChatHistory = localStorage.getItem("chatHistory");
    if (savedChatHistory) {
      setMessages(JSON.parse(savedChatHistory));
    }
  }, []);

  const saveChatHistory = useCallback(
    (messages: { role: string; content: string }[]) => {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    },
    []
  ); */

  return (
    <div className="w-full">
      <Header
        title="Code"
        description="Our most advanced conversational model"
      />
      <div className="w-screen md:w-full">
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
                      <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-md border my-3 p-2 max-w-3xl">
                        <p className="p-1">{message.content}</p>
                      </div>
                    </div>
                  </div>
                )}

                {message.role === "assistant" && (
                  <div className="max-w-4xl mx-3 sm:mx-auto">
                    <div className="flex gap-x-3 items-start">
                      <Logo />
                      <span className="text-gray-700 dark:text-gray-300 self-center font-semibold text-xl">
                        Horizon
                      </span>
                    </div>
                    <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-x-scroll sm:overflow-x-auto shadow-md border my-3 p-4 text-neutral-800 dark:text-neutral-200">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                      {/* <pre>{message.content}</pre> */}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isLoading && (
            <div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md border my-3 p-4 text-neutral-800 dark:text-neutral-200">
              Horizon is thinking...
            </div>
          )}
          <Form {...form}>
            <form
              id="prompt-form"
              onSubmit={form.handleSubmit(onSubmit)}
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
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
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
          <span className="flex justify-center  items-center text-center text-xs text-neutral-600 dark:text-neutral-300 sm:-mt-5 mb-10">
            Horizon can make mistakes. Please check important info.
          </span>
          {messages.length === 0 && !isLoading && (
            <div className="flex justify-center">
              <Image src={cat} alt="cat" width={600} height={600} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeUI;
