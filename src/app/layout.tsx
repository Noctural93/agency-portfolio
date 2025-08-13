import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BlurBottom from "@/components/BlurBottom";
import CustomCursor from "@/components/FramerAnimations/CustomCursor";
import SmoothScroll from "@/utils/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Agency",
  description: "Creative Digital Agency Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkBlue text-white h-full overscroll-none scroll-smooth`}>
        <SmoothScroll />
        <CustomCursor/>
        <Header/>
        <main className="relative overflow-hidden">{children}</main>
        <Footer/>
        <BlurBottom/>
      </body>
    </html>
  );
}
