import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Message } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// Removed: export const runtime = "edge"

export async function POST(req: Request) {
  console.log("API route called");

  if (!process.env.GOOGLE_API_KEY) {
    console.error("GOOGLE_API_KEY is not configured");
    return new Response(
      JSON.stringify({ error: "GOOGLE_API_KEY is not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error("Invalid or empty messages array");
      return new Response(
        JSON.stringify({ error: "Invalid or empty messages array" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("Received messages:", messages);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const formattedMessages = formatMessages(messages);
    const systemPrompt =
      "You are a marketing assistant for 6 Light Media, a company specializing in printing, Heavy Printing, Acrylics laser cutting, Steel laser cutting, CNC Routing, Fabrication, Vehicle Branding, Super Sized 3D, 3D signage, and branding solutions. Provide helpful and friendly responses to customer inquiries about our services. Our main services include 3D signage, large format printing, vehicle wraps, and custom fabrication. Always be polite and professional. Locations 1265 Fulwe Close, Rhodespark Lusaka, Zambia, Shop No. 91, EastPark Mall and Pinnacle mall";

    console.log("Generating content");

    const result = await model.generateContent([
      systemPrompt,
      ...formattedMessages,
    ]);
    const response = await result.response;
    const text = response.text();

    console.log("Content generated");

    return new Response(JSON.stringify({ role: "assistant", content: text }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function formatMessages(messages: Message[]): string[] {
  return messages.map((message) => `${message.role}: ${message.content}`);
}
