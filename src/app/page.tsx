import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/homePage/HeroSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const BGVideo = dynamic(() => import("@/components/homePage/BGVideo"), {
  ssr: true,
});

const AboutAgencySection = dynamic(() => import("@/components/homePage/AboutAgencySection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const ResultSection = dynamic(() => import('@/components/homePage/ResultSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const HowWeWorkSection = dynamic(() => import('@/components/homePage/HowWeWorkSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const FeatureSection = dynamic(() => import('@/components/homePage/FeatureSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const BenefitSection = dynamic(() => import('@/components/homePage/BenefitSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const PortfolioSection = dynamic(() => import('@/components/homePage/PortfolioSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const OurServices = dynamic(() => import('@/components/homePage/OurServices'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const LaunchYourSite = dynamic(() => import('@/components/homePage/LaunchYourSite'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const PricingSection = dynamic(() => import('@/components/homePage/PricingSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const TestimonialSection = dynamic(() => import('@/components/homePage/TestimonialSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
})

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: true,
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
      <OurServices/>
      <LaunchYourSite/>
      <PricingSection/>
      <TestimonialSection/>
      <FAQSection/>
    </>
  )
}

export default Home
