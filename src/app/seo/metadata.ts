import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  metadataBase: new URL("https://agency-portfolio-sand.vercel.app"),
  title: {
    default: "Davi — Creative Digital Agency",
    template: "%s | Davi",
  },
  description:
    "We craft powerful digital experiences that elevate brands, engage users, and drive results.",
  keywords: [
    "creative agency",
    "digital agency",
    "branding",
    "web development",
    "UI/UX design",
    "Davi agency",
    "marketing agency",
  ],
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Davi — Creative Digital Agency",
    description:
      "We craft powerful digital experiences that elevate brands and drive growth.",
    url: "https://agency-portfolio-sand.vercel.app",
    siteName: "Davi Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davi — Creative Digital Agency",
    description:
      "We craft powerful digital experiences that elevate brands and drive growth.",
    creator: "@daviagency",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
  },
  themeColor: "#0B0D17",
  appleWebApp: {
    capable: true,
    title: "Davi",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "https://agency-portfolio-sand.vercel.app",
  },
};
