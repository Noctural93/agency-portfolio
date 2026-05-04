import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader 
          color="#0055ff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
