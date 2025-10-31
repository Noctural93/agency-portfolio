"use client"

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const mobileMenuVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
};

interface MobileNavProps {
  isOpen: boolean;
  navigationList: { label: string; href: string }[];
  navClick?: (state: boolean) => void;
}

const MobileNav = ({ isOpen, navigationList, navClick }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className="md:hidden w-full text-white overflow-hidden"
        >
          <div className="flex flex-col items-center gap-5 py-6 px-8">
            {navigationList.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-extralight text-md tracking-wide w-full self-start"
                onClick={() => navClick?.(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center mb-[20px]">
            <button
              type="button"
              className="w-10/12 text-md px-4 py-2.5 bg-[#0055ff] border border-solid border-[rgba(255,255,255,0.15)] text-white rounded-lg cursor-pointer overflow-hidden shadow-[rgba(0,85,255,0.5)_0px_8px_40px_0px,rgba(255,255,255,0)_0px_0px_10px_1px_inset,rgba(0,85,255,0.12)_0px_0px_0px_1px]"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
