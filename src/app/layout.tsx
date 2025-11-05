import { Inter } from "next/font/google";

import ClientRoot from "@/components/ClientRoot";

import "./globals.css";
import { defaultSEO } from "./seo/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultSEO;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-darkBlue text-white h-full overscroll-none scroll-smooth`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
