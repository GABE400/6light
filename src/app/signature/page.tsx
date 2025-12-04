"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const rawPdfPath = "/6 Light Media email signature_Holiday.svg";
const pdfPath = encodeURI(rawPdfPath);

export default function SignaturePage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [displayUrl, setDisplayUrl] = useState(pdfPath);

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

  useEffect(() => {
    setDisplayUrl(window.location.origin + pdfPath);
  }, []);

  const htmlSnippet = `<img src="${pdfUrl}" alt="6 Light Media Email Signature" />`;

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
        The SVG signature:
        <br />
        <Image
          src={displayUrl}
          alt="6 Light Media Email Signature"
          width={600}
          height={200}
          style={{ display: "block", margin: "6px auto", maxWidth: "100%", height: "auto" }}
        />
      </p>

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => window.open(pdfPath, "_blank")}>Open SVG</button>
        <a href={pdfPath} download style={{ textDecoration: "none" }}>
          <button>Download SVG</button>
        </a>
        <button onClick={() => copyToClipboard(pdfUrl, "URL copied")}>
          Copy URL
        </button>
        <button onClick={() => copyToClipboard(htmlSnippet, "HTML copied")}>
          Copy HTML Snippet
        </button>
      </div>

      {copied && <div style={{ marginTop: 10, color: "green" }}>{copied}</div>}

      <section style={{ marginTop: 20 }}>
        <h2>Preview</h2>
        <div style={{ border: "1px solid #ddd", height: 640 }}>
          <iframe
            src={pdfPath}
            title="Signature SVG"
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
            You can share the SVG URL directly (copy URL). Recipients can open
            or download it.
          </li>
          <li>
            Most email clients (Gmail, Outlook) do not support embedding an SVG
            inside an email signature. They accept HTML or images.
          </li>
          <li>
            Recommended: use the SVG directly or convert to a PNG/JPG (or slice
            into images), place the images in the `public/` folder, then use an
            HTML snippet with an img tag pointing to the hosted image for the
            signature.
          </li>
          <li>
            This page provides an HTML snippet with an img tag that embeds the
            SVG directly in your email signature. Copy and paste it into your
            email client signature editor.
          </li>
        </ul>
      </section>
    </div>
  );
}
