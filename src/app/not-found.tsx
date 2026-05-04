"use client";

import dynamic from "next/dynamic";

const BGVideo = dynamic(() => import("@/components/homePage/BGVideo"), {
  ssr: true,
});

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

export default function NotFound() {
  return (
    <>
        <BGVideo childrenClass="h-[624px] md:h-[724px]" />
        <HeroSection
          topCardHeading="OOPS"
          topCardSubHeading="Page Not Found"
          heading_1="404 - Oops Page"
          heading_2="Not Found in Data."
          description="Oops! The web page you're looking for doesn't exist. Please click the below button to get back to the home."
          btnText="Back To Homepage"
          extraClasses="pb-[100px]"
        />
    </>
  );
}
