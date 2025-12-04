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

  const htmlSnippet = `<img src="${typeof window !== "undefined" ? window.location.origin : "https://www.sixlightmedia.com"}/6-light-signature.png" alt="6 Light Media Email Signature" style="max-width: 600px; height: auto; display: block;" />`;

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
        <button 
          onClick={() => copyToClipboard(htmlSnippet, "HTML copied")} 
          style={{ 
            backgroundColor: "#0066cc", 
            color: "white", 
            padding: "10px 20px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Copy HTML for Gmail Signature
        </button>
        <button onClick={() => window.open(pdfPath, "_blank")}>Open Image</button>
        <button onClick={() => copyToClipboard(pdfUrl, "URL copied")} className="text-sky-500">
          Copy Image URL
        </button>
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
        <h2>How to Add This Signature to Gmail</h2>
        <ol style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Click the &quot;Copy HTML for Gmail Signature&quot; button above</strong> - 
            This will copy the HTML code to your clipboard.
          </li>
          <li>
            <strong>Open Gmail Settings:</strong> In Gmail, click the gear icon (⚙️) 
            in the top right, then click &quot;See all settings&quot;.
          </li>
          <li>
            <strong>Go to the Signature section:</strong> Scroll down to the 
            &quot;Signature&quot; section in the General tab.
          </li>
          <li>
            <strong>Create or edit a signature:</strong> Click &quot;+ Create new&quot; or 
            select an existing signature to edit.
          </li>
          <li>
            <strong>Paste the HTML:</strong> In the signature editor, press 
            Ctrl+V (Windows) or Cmd+V (Mac) to paste the HTML code. The image 
            will appear automatically.
          </li>
          <li>
            <strong>Save:</strong> Scroll down and click &quot;Save Changes&quot; at the 
            bottom of the page.
          </li>
        </ol>
        
        <h3 style={{ marginTop: 20 }}>Alternative Method</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            You can also right-click the image above, select &quot;Copy Image&quot;, and 
            paste it directly into Gmail&apos;s signature editor.
          </li>
          <li>
            Or use Gmail&apos;s image insert button (📷) in the signature editor and 
            paste the image URL: <code style={{ backgroundColor: "#333", padding: "2px 6px", borderRadius: "3px" }}>{typeof window !== "undefined" ? window.location.origin : "https://www.sixlightmedia.com"}/6-light-signature.png</code>
          </li>
        </ul>
      </section>
    </div>
  );
}
