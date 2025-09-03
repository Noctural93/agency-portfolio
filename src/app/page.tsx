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

const FeatureSection = dynamic(() => import('@/components/homePage/FeatureSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
})

const BenefitSection = dynamic(() => import('@/components/homePage/BenefitSection'), {
  ssr: false,
  loading: () => <div className="h-[100vh] w-full" />
})

const PortfolioSection = dynamic(() => import('@/components/homePage/PortfolioSection'), {
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
      <FeatureSection/>
      <BenefitSection/>
      <PortfolioSection/>
    </>
  )
}

export default Home
