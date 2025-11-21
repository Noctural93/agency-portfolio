"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./FramerAnimations/MobileNav";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import useMediaQuery from "@/lib/useMediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [minHeader, setMinHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  const navigationList = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  useEffect(() => {
    navigationList.forEach(({ href }) => router.prefetch(href));
  }, [navigationList, router]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 850) {
        setMinHeader(false);
      } else {
        setMinHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgExpanded = "bg-black/30 backdrop-blur-[40px]";
  const bgCollapsed = "bg-black/30 backdrop-blur-[10px]";

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out"
      )}
    >
      <div
        className={clsx(
          "border-white/10 flex flex-col items-center justify-center",
          isOpen && bgExpanded
        )}
      >
        <div className="px-0 pt-0 md:pt-5 md:px-22 xl:px-20 2xl:px-32 h-[85px] w-full max-w-[1200px] flex justify-center">
          <motion.div
            animate={{
              width: minHeader ? "100%" : isMobile ? "100%" : "474px",
              // padding: minHeader ? "1.75rem" : "1rem",
            }}
            transition={{
              type: "tween",
              duration: 0.6,
              ease: "easeInOut",
            }}
            className={clsx(
              "flex justify-between items-center border border-white/15 rounded-lg p-3",
              !isOpen && bgCollapsed
            )}
          >
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center pr-0">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={45}
                  height={45}
                  priority
                  className="invert brightness-0"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-10 mr-3">
              {navigationList.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  prefetch
                  className={clsx(
                    "text-white font-extralight text-sm transition-opacity tracking-wide",
                    pathname === href ? "opacity-100" : "opacity-60"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div tabIndex={0}>
              <button
                type="button"
                className={clsx(
                  "hidden md:flex md:items-center md:gap-1 text-sm bg-[#0055ff] border border-[rgba(255,255,255,0.15)] text-white rounded-lg transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(0,85,255,0.7),_0_0_10px_1px_rgba(255,255,255,0.3)_inset,_0_0_0_5px_rgba(0,85,255,0.2)] cursor-pointer text-nowrap",
                  minHeader ? "py-2.5 px-4" : "py-2 px-3"
                )}
              >
                {minHeader && "Get in Touch"}
                <ArrowRight className="w-6 -rotate-45" />
              </button>

              <div
                className="md:hidden flex flex-col w-[20px] gap-[6px] cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span
                  className={clsx(
                    "w-full h-[2px] bg-white rounded-xl transition-all duration-300",
                    isOpen && "rotate-45 translate-y-[4px]"
                  )}
                />
                <span
                  className={clsx(
                    "w-full h-[2px] bg-white rounded-xl transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-[4px]"
                  )}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {isOpen && (
          <div className="w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
        )}

        <MobileNav
          isOpen={isOpen}
          navigationList={navigationList}
          navClick={setIsOpen}
        />
      </div>
    </nav>
  );
};

export default Header;
