import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, branch, service, message } = await req.json();

  // Define a default recipient email
  const defaultRecipient =
    process.env.DEFAULT_RECIPIENT_EMAIL || "default@example.com";

  // Create a Nodemailer transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use an app-specific password
    },
  });

  try {
    // Determine the recipient based on the branch
    let recipient;
    switch (branch) {
      case "main":
        recipient = process.env.MAIN_BRANCH_EMAIL;
        break;
      case "eastpark":
        recipient = process.env.EASTPARK_BRANCH_EMAIL;
        break;
      case "pinnacle":
        recipient = process.env.PINNACLE_BRANCH_EMAIL;
        break;
      default:
        recipient = defaultRecipient;
    }

    // If no specific recipient is found, use the default
    if (!recipient) {
      recipient = defaultRecipient;
    }

    // Send email
    await transporter.sendMail({
      from: `"6 Light Media Website" <${process.env.GMAIL_USER}>`,
      to: recipient,
      subject: `New Quotation Request for ${branch} Branch`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Branch: ${branch}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h1>New Quotation Request for ${branch} Branch</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Branch:</strong> ${branch}</p>
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
