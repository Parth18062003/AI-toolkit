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

    // Modify the prompt to ensure the assistant knows it should act as a code assistant
    const prompt = [
      {
        role: "system",
        content: "You are a code assistant. Provide helpful programming advice and code snippets.",
      },
      ...messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    ].map((message) => message.content).join("\n");

    const result = await streamText({
      model,
      prompt,
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
