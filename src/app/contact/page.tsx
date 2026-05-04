import ContactSection from '@/components/contactPage/ContactSection';
import FAQSection from '@/components/homePage/FAQSection';
import BGVideo from '@/components/homePage/BGVideo';

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
