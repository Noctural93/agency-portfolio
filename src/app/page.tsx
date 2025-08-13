'use client'

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/homePage/HeroSection"), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
});

const BGVideo = dynamic(() => import("@/components/homePage/BGVideo"), {
  ssr: false,
});

const AboutAgencySection = dynamic(() => import("@/components/homePage/AboutAgencySection"), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
});

const ResultSection = dynamic(() => import('@/components/homePage/ResultSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
})

const HowWeWorkSection = dynamic(() => import('@/components/homePage/HowWeWorkSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
})

const Home = () => {
  return (
    <>
      <BGVideo/>
      <HeroSection/>
      <AboutAgencySection/>
      <ResultSection/>
      <HowWeWorkSection/>
    </>
  )
}

export default Home
