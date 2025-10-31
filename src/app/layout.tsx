import { Inter } from "next/font/google";

import ClientRoot from "@/components/ClientRoot";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davi",
  description: "Creative Digital Agency Website",
  appleWebApp: {
    title: "Davi",
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

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
