import HeroSection from "@/components/homePage/HeroSection";
import BGVideo from "@/components/homePage/BGVideo";
import AboutAgencySection from "@/components/homePage/AboutAgencySection";
import ResultSection from "@/components/homePage/ResultSection";
import HowWeWorkSection from "@/components/homePage/HowWeWorkSection";
import BenefitSection from "@/components/homePage/BenefitSection";
import OurServices from "@/components/homePage/OurServices";
import LaunchYourSite from "@/components/homePage/LaunchYourSite";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import FAQSection from "@/components/homePage/FAQSection";

const Home = () => {
  return (
    <>
      <BGVideo/>
      <HeroSection/>
      <AboutAgencySection/>
      <ResultSection/>
      <OurServices/>
      <HowWeWorkSection/>
      <BenefitSection/>
      <LaunchYourSite/>
      <TestimonialSection/>
      <FAQSection/>
    </>
  )
}

export default Home
