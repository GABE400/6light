import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6 Light Media - Email Signature",
  description:
    "Professional email signature for 6 Light Media. Download and use this signature for your email communications.",
  openGraph: {
    title: "6 Light Media - Email Signature",
    description:
      "Professional email signature for 6 Light Media. Download and use this signature for your email communications.",
    type: "website",
    url: "https://www.sixlightmedia.com/signature",
    siteName: "6 Light Media",
    images: [
      {
        url: "https://www.sixlightmedia.com/6%20Light%20Media%20email%20signature_Holiday.svg",
        width: 600,
        height: 200,
        alt: "6 Light Media Email Signature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Light Media - Email Signature",
    description:
      "Professional email signature for 6 Light Media. Download and use this signature for your email communications.",
    images: ["https://www.sixlightmedia.com/6%20Light%20Media%20email%20signature_Holiday.svg"],
  },
};

export default function SignatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
