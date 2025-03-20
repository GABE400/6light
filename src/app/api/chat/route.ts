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

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const formattedMessages = formatMessages(messages);
    const systemPrompt = `You are a marketing assistant for 6 Light Media. Provide helpful and friendly responses to customer inquiries about our services.

Our Services

- Large Format Printing: High-quality, large-scale print production.
- 3D Signs: Custom three-dimensional signage for your business.
- Custom Design: Tailored designs to suit your branding needs.
- Vehicle Wraps: Professional vehicle wrapping services.
- Super-Sized 3D: Oversized three-dimensional installations.
- Installation: Expert installation services for all products.
- Laser Cutting:  
  - Acrylic Laser Cutting  
  - Steel Laser Cutting  
  - Computer-Controlled Cutting  
- Fabrication: Custom fabrication services for various applications.

For these services, please visit our head office at:  
1265 Fulwe Close, Rhodespark, Lusaka, Zambia, Shop No. 91.

We also offer the following services at our locations in EastPark Mall and Pinnacle Mall:

- Printing Documents  
- Photocopying Documents  
- Scanning Documents  
- Fabric Printing  
- Engraving  
- Canvas Printing and Framing  
- Photo and Passport Printing  
- Branding Solutions (including logo design and other graphic design services)

Customer Support

Our team is here to provide helpful and friendly responses to all customer inquiries. Our main services include 3D signage, large format printing, vehicle wraps, and custom fabrication. We pride ourselves on being polite and professional.

Locations

- Head Office:  
  1265 Fulwe Close, Rhodespark, Lusaka, Zambia, Shop No. 91
- Mall Locations:  
  EastPark Mall and Pinnacle Mall

Contact Us

- Phone:  
  +260 971 782 375  
  +260 971 781 907  
  +260 974 594 572

- Email: 
  marketing@sixlightmedia.com  
  shop@sixlightmedia.com  
  pinnacle@sixlightmedia.com`;

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
