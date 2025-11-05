"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Preloader from "./Preloader";

const CustomCursor = dynamic(() => import("@/components/FramerAnimations/CustomCursor"), {
  ssr: false,
});
const ReactLenis = dynamic(() => import("lenis/react"), { ssr: false });
const BlurBottom = dynamic(() => import("@/components/BlurBottom"), { ssr: false });

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.06 }}>
      <div className="relative z-1">
        <Preloader />
        <Header />
        <CustomCursor />
        <main className="relative z-1">{children}</main>
        <Footer />
        <BlurBottom />
        <SpeedInsights />
      </div>
    </ReactLenis>
  );
}
