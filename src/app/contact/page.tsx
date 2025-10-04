'use client'

import ContactSection from '@/components/contactPage/ContactSection';
import dynamic from 'next/dynamic';

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
});

const BGVideo = dynamic
(() => import("@/components/homePage/BGVideo"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <BGVideo childrenClass="h-[624px] md:h-[724px]" />
      <ContactSection />
      <FAQSection />
    </>
  )
}

export default Contact
