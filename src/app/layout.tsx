import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BlurBottom from "@/components/BlurBottom";
import CustomCursor from "@/components/FramerAnimations/CustomCursor";
import ReactLenis from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Agency",
  description: "Creative Digital Agency Website",
  appleWebApp: {
    title: "My Agency",
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-darkBlue text-white h-full overscroll-none scroll-smooth`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.06,
          }}
        >
          <CustomCursor />
          <Header />
          <main className="relative z-1">{children}</main>
          <Footer />
          <BlurBottom />
          <SpeedInsights />
        </ReactLenis>
      </body>
    </html>
  );
}
