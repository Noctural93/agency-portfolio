"use client"

import SectionIndicator from "../SectionIndicator";
import AnimatedText from "../FramerAnimations/AnimatedText";
import BenefitCard from "./BenefitCard";

import unlimitedReq from "../../../public/unlimited_req.jpg";
import reqrev from "../../../public/req_rev.jpg";
import quickturn from "../../../public/quick_turn.png";
import publishsec from "../../../public/publish_sec.png";
import freepricing from "../../../public/free_pricing.jpg";
import useMediaQuery from "@/lib/useMediaQuery";
import LongRigtBox from "../../../public/LongRigtBox";

const benefits_1 = [
  "Enhanced UX",
  "Boosted Conversions",
  "Fast Loading",
  "SEO Optimized",
  "Customizable",
  "Scalable",
];

const benefits_2 = [
  "Increased Engagement",
  "Expandable",
  "Secure",
  "User-Friendly",
];

const BenefitSection = () => {
  const isMobile = useMediaQuery("(max-width: 1112px)");
  return (
    <section className="relative flex flex-col items-center justify-center pt-[70px] md:pt-[100px] gap-[70px] md:gap-[100px] w-full overflow-hidden">
      <div className="flex items-center flex-col flex-nowrap h-min w-full gap-[40px] md:gap-[70px] max-w-[1440px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
        <div className="flex items-center justify-start h-min w-full">
          <div className="flex items-center justify-center max-w-[860px] grow flex-col gap-[30px] w-[1px]">
            <div className="flex flex-col flex-nowrap gap-[40px] h-min w-full">
              <SectionIndicator text="Agency Benefits" dot={true} />
              <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap gap-[10px]">
                <AnimatedText
                  text="We Just Don't Design, We Build."
                  className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
                <AnimatedText
                  text="If You Can Dream It, We Can Play It!"
                  className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center flex-col justify-center gap-[12px] h-min w-full">
              <div className="flex items-center justify-start gap-[12px] h-min w-full flex-wrap">
                {benefits_1.map((item, index) => (
                  <div
                    className="border border-[#ffffff0d] border-solid backdrop-blur-[2.5px] rounded-[10px] px-[14px] py-[6px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)] text-[#ffffff99] -tracking-[0.4px]"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-start gap-[12px] h-min w-full flex-wrap">
                {benefits_2.map((item, index) => (
                  <div
                    className="border border-[#ffffff0d] border-solid backdrop-blur-[2.5px] rounded-[10px] px-[14px] py-[6px] bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(97,97,97,0.09)_100%)] text-[#ffffff99] -tracking-[0.4px]"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
                <button
                  type="button"
                  className="border border-[#ffffff0d] border-solid backdrop-blur-[2.5px] rounded-[10px] px-[14px] py-[6px] text-black bg-white -tracking-[0.4px]"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="flex items-center w-full">
          <div
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* 1 */}
            <div
              className="w-full h-min col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3"
            >
              <BenefitCard
                imgString={unlimitedReq}
                title="Submit Unlimited Requests"
                description="Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we're here to assist you at every step."
                cta_1="Book an Appointment"
                cta_2="What is Landin?"
                imgClass="h-[296px]"
                extraClass="-bottom-[85%] -left-[85%] bg-[#0055ffc4]"
              />
            </div>

            {/* 2 */}
            <div
              className="w-full h-min col-span-1 row-start-2
                  md:row-start-3 lg:col-start-1 lg:row-start-4"
            >
              <BenefitCard
                imgString={quickturn}
                title="Quick Turnaround"
                isNew={true}
                description="We prioritize efficiency without compromising quality."
                imgClass="h-[109px]"
                extraClass="-bottom-[70%] -left-[70%] bg-[#0055ff]"
              />
            </div>

            {/* 3 */}
            <div
              className="w-full h-min col-span-1 row-start-3
                  md:row-start-3 lg:col-start-2 lg:row-start-4"
            >
              <BenefitCard
                imgString={publishsec}
                title="Publish in Seconds"
                description="Publish your site in seconds with our streamlined process."
                imgClass="h-[109px]"
                extraClass="-bottom-[70%] -left-[70%] bg-[#0055ff]"
              />
            </div>

            {/* 4 */}
            <div
              className="w-full h-min col-span-1 row-start-4 md:col-span-2 md:row-start-4 lg:col-start-3 lg:row-start-1 lg:row-span-2"
            >
              <BenefitCard
                imgString={reqrev}
                isNew={true}
                title="Requests & Revisions"
                description="Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and that the final product meets your expectations."
                imgClass="h-[213px] lg:h-[174px]"
              />
            </div>

            {/* 5 */}
            <div
              className="w-full h-min col-span-1 row-start-5 md:col-span-2 md:row-start-5 lg:col-start-3 lg:row-start-3 lg:row-span-2"
            >
              <BenefitCard
                imgString={freepricing}
                isNew={true}
                title="Worry Free Pricing"
                description="Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, so you can get started without any financial stress."
                imgClass="h-[213px] lg:h-[174px]"
                extraClass="-bottom-[85%] -left-[85%] lg:-bottom-[70%] lg:-left-[70%] bg-[#0055ff]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* right box */}
      {isMobile ? null : (
        <div className="absolute -right-[183px] top-[225px] w-[1409px] h-[237px]">
          <LongRigtBox />
        </div>
      )}

      {/* Line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default BenefitSection;
