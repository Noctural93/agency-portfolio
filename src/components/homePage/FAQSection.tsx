import SectionIndicator from "../SectionIndicator";
import AnimatedText from "../FramerAnimations/AnimatedText";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQData = [
  {
    title: 'What do i need to get started?',
    description: "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
  },
  {
    title: 'What kind of customization is available?',
    description: "We offer full customization options, including layout changes, color schemes, typography, and content sections to align with your brand.",
  },
  {
    title: 'How easy is it to edit for beginners?',
    description: "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
  {
    title: 'Let me know more about moneyback guarantee?',
    description: 'Our money-back guarantee ensures peace of mind by offering a full refund if you’re not satisfied with the final product within a specified time frame.',
  },
  {
    title: 'Do i need to know how to code?',
    description: "No, you don’t need to know how to code. Our platform offers intuitive tools and templates that allow you to create and manage your website with ease.",
  },
  {
    title: 'what will i get after purchasing the template?',
    description: "After purchasing the template, you'll receive a fully customizable, ready-to-use design with all necessary files and documentation.",
  }
]

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <section className="relative flex flex-col items-center justify-center pt-[40px] w-full gap-[70px] md:gap-[100px] lg:overflow-visible lg:items-center lg:justify-start bg-[#000000] z-10 -top-[1px]">
      <div className="relative flex flex-col lg:flex-row lg:flex-nowrap h-min w-full max-w-[1440px] gap-[70px] md:gap-[84px] px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px] lg:overflow-visible lg:items-start lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-[60px] items-start justify-center w-full">
          <div className="flex flex-col gap-[30px] items-start justify-center w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start">
              <SectionIndicator text="FAQ" dot={true} className="text-[13px]"/>
              <div className="w-full h-min flex items-start justify-center flex-col flex-nowrap">
                <AnimatedText
                  text="Frequently"
                  className="text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
                <AnimatedText
                  text="Asked Questions"
                  className="text-[#ffffff99] text-[32px] -tracking-[2px] leading-[32px] md:text-[52px] md:leading-[50px] font-[400] md:-tracking-[1.9px]"
                />
              </div>
            </div>
            <p className="text-[#ffffff80]">
              Have questions? Our FAQ section has you covered with
              <br />
              quick answers to the most common inquiries.
            </p>
          </div>

          {/* faq cards */}
          <div className="w-full flex flex-col items-center justify-center gap-[24px]">
            {
              FAQData.map((faq, index) => (
                <div className="flex flex-col items-center w-full border border-solid border-[#ffffff12] bg-[#080808] rounded-[20px] p-[30px] cursor-pointer" onClick={() => setActiveFaq(index === activeFaq ? null : index)} key={index}>
                  <div className="flex justify-between items-center w-full">
                    <h3>{faq.title}</h3>
                    <FaPlus className={`transition-transform duration-400 ${activeFaq == index ? 'rotate-45' : 'rotate-0'}`}/>
                  </div>

                  <AnimatePresence initial={false}>
                    {
                      activeFaq === index ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, marginTop: 0 }}
                          animate={{ height: 'auto', marginTop: '16px' }}
                          exit={{ height: 0, marginTop: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                          className="text-[#ffffff80] overflow-hidden"
                        >
                          <p className="text-[13px]">{faq.description}</p>
                        </motion.div>
                      ) : null
                    }
                  </AnimatePresence>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
