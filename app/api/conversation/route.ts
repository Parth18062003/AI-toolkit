/* import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    })
    const model = google("models/gemini-pro");

    const result = await streamText({
      model,
      prompt: messages.map((message) => message.content).join("\n"),
    });

    // use textStream as an async iterable:
    for await (const textPart of result.textStream) {
      console.log(textPart);
    }
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        ...messages,
      ],
      model: "gpt-3.5-turbo",
    }); 

    return NextResponse.json();
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
 */

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });
    const model = google("models/gemini-pro");

    const result = await streamText({
      model,
      prompt: messages.map((message) => message.content).join("\n"),
    });

    let fullResponse = '';
    for await (const textPart of result.textStream) {
      fullResponse += textPart;
    }

    return NextResponse.json({ content: fullResponse });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
