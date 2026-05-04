import HomePageAboutSection from "../../../public/HomePageaboutSection.jpeg";
import dynamic from 'next/dynamic'

const BGVideo = dynamic(() => import("@/components/homePage/BGVideo"), {
  ssr: true,
});

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const ImageTextSection = dynamic(() => import('@/components/ImageTextSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const TeamMemberSection = dynamic(() => import("@/components/aboutPage/TeamMemberSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full"/>
})

const AwardSection = dynamic(() => import("@/components/aboutPage/AwardSection"), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full"/>
});

const ToolsSection = dynamic(() => import("@/components/aboutPage/ToolsSection"), {
  ssr: true,
  loading: () => <div />
})

const FAQSection = dynamic(() => import('@/components/homePage/FAQSection'), {
  ssr: true,
  loading: () => <div className="h-[100vh] w-full" />
});

const About = () => {
  return (
    <>
      <BGVideo childrenClass='h-[624px] md:h-[724px]'/>
      <HeroSection
        topCardHeading="2025"
        topCardSubHeading="Dig Deep About Us"
        heading_1="Learn More About Davi"
        heading_2="Let's Deep Dive!"
        description="Davi is your go-to agency for creative thinking and marketing ideas. We specialize in digital business solutions."
        btnText="What is Davi?"
      />
      <ImageTextSection
        imageString={HomePageAboutSection}
        indicatorText="About Agency"
        Title="An Agency With Classic"
        subTitle="Revolutionary Skills!"
        firstTitle="Your Success, Our Priority"
        secondTitle="Partners You Can Rely On"
        firstDesc="At MyAgency, we believe in empowering our clients to achieve their goals. Our team works closely with you."
        secondDesc="MyAgency is here to ensure your success with expert guidance and collaborative teamwork."
        buttonText="Book an Appointment"
        numText="200+ Agencies Rated"
      />
      <ImageTextSection
        imageString={HomePageAboutSection}
        indicatorText="About Agency"
        Title="Work Smarter Not Harder"
        subTitle="in Every Minutes!"
        firstTitle="Guided Every Step"
        secondTitle="Support Beyond Delivery"
        firstDesc="We ensure a smooth journey from concept to completion, providing expert support to bring your vision to life effortlessly."
        secondDesc="Our commitment doesn’t end at launch—Landin is here to support you with ongoing updates and expertise whenever you need it."
        buttonText="Book an Appointment"
        numText="900+ People Rated"
        reverse={true}
      />
      <TeamMemberSection/>
      <AwardSection/>
      <ToolsSection/>
      <FAQSection/>
    </>
  )
}

export default About
