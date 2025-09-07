"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./FramerAnimations/MobileNav";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    navigationList.forEach(({ href }) => {
      router.prefetch(href);
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false)
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const bgExpanded = "bg-black/30 backdrop-blur-[40px]";
  const bgCollapsed =
    "bg-[linear-gradient(180deg,rgba(0,0,0,0)_10%,rgba(0,0,0,0.3)_100%)] backdrop-blur-md";

  const navigationList = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 overflow-hidden transform transition-transform duration-500 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <div
        className={`border-white/10 flex items-center flex-col justify-center border-b ${
          isOpen ? `${bgExpanded}` : `${bgCollapsed}`
        }`}
      >
        <div className="px-8 lg:px-22 xl:px-20 2xl:px-32 h-[85px] w-full max-w-[1440px] flex">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center space-x-8 lg:space-x-10">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="logo" 
                  width={45} 
                  height={45} 
                  priority
                />
              </Link>

              <div className="hidden md:flex w-[1px] h-[40px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />

              <nav className="hidden md:flex items-center space-x-10">
                {navigationList.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    prefetch={true}
                    className={`text-white font-extralight text-sm transition-colors tracking-wide ${pathname === href ? "opacity-100" : "opacity-60"}`}
                  >
                    <span>{label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div tabIndex={0}>
              <button
                type="button"
                className="hidden md:block text-sm px-4 py-2.5 bg-[#0055ff] border border-solid border-[rgba(255,255,255,0.15)] text-white rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(0,85,255,0.7),_0_0_10px_1px_rgba(255,255,255,0.3)_inset,_0_0_0_5px_rgba(0,85,255,0.2)]"
              >
                <span>Get in Touch</span>
              </button>
              <div
                className="md:hidden flex flex-col w-[20px] gap-[6px] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`w-full h-[2px] bg-white rounded-xl transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[4px]" : ""
                  }`}
                ></div>
                <div
                  className={`w-full h-[2px] bg-white rounded-xl transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[4px]" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        { isOpen && <div className="w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]"/>}
        <MobileNav isOpen={isOpen} navigationList={navigationList} navClick={setIsOpen}/>
      </div>
    </nav>
  );
};

export default Header;
