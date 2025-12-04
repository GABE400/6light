"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const rawPdfPath = "/6-light-signature.png";
const pdfPath = encodeURI(rawPdfPath);

export default function SignaturePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const getFullUrl = () => {
    if (typeof window === "undefined") return pdfPath;
    return window.location.origin + pdfPath;
  };

  const copyToClipboard = async (text: string, label = "text") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const pdfUrl = getFullUrl();

  // const htmlSnippet = `<img src="${pdfUrl}" alt="6 Light Media Email Signature" />`;

  return (
    <div
      style={{
        padding: 80,
        fontFamily: "Inter, system-ui, sans-serif",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <h1>6 Light Media — Email Signature</h1>
      <p>
        The signature image:
        <br />
        <Image
          src={pdfPath}
          alt="6 Light Media Email Signature"
          width={600}
          height={200}
          style={{ display: "block", margin: "6px auto", maxWidth: "100%", height: "auto" }}
        />
      </p>

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => window.open(pdfPath, "_blank")}>Open Image</button>
        {/* <a href={pdfPath} download style={{ textDecoration: "none" }}>
          <button>Download SVG</button>
        </a> */}
        <button onClick={() => copyToClipboard(pdfUrl, "URL copied")} className="text-sky-500">
          Copy URL
        </button>
        {/* <button onClick={() => copyToClipboard(htmlSnippet, "HTML copied")}>
          Copy HTML Snippet
        </button> */}
      </div>

      {copied && <div style={{ marginTop: 10, color: "green" }}>{copied}</div>}

      <section style={{ marginTop: 20 }}>
        <h2>Preview</h2>
        <div style={{ border: "1px solid #ddd", height: 640 }}>
          <iframe
            src={pdfPath}
            title="Signature Image"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          />
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Notes & How to Use</h2>
        <ul>
          <li>
            <strong>Share this page URL:</strong> When you paste this page link
            (http://localhost:3000/signature or https://www.sixlightmedia.com/signature)
            into Gmail or other email providers, they will show a rich preview
            with the signature information.
          </li>
          <li>
            You can share the image URL directly (copy URL). Recipients can open
            or download it.
          </li>
          <li>
            The PNG format is widely supported by email clients (Gmail, Outlook)
            and will display properly when the link is pasted.
          </li>
          <li>
            This signature uses a PNG image that is hosted in the `public/` folder,
            which ensures compatibility with all email clients and proper preview
            display when sharing the link.
          </li>
          <li>
            When you paste this page URL into Gmail, it will show a preview with
            the signature image. You can also use the image URL directly in your
            email signature.
          </li>
        </ul>
      </section>
    </div>
  );
}
