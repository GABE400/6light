import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, service, message } = await req.json();

  // Create a Nodemailer transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use an app-specific password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"6 Light Media Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quotation Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h1>New Quotation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
