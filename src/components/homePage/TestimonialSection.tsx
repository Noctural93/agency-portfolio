import Bottomvector from "../../../public/Bottomvector"
import CalloutSection from "../CalloutSection"

const TestimonialSection = () => {
  return (
    <section className='relative flex flex-col items-center justify-center pt-[70px] gap-[100px] md:pt-[100px] w-full'>
      <CalloutSection
        sectionIndicatiorText="Portfolio"
        title="Our Selected Projects"
        subtitle="That Propel Your Website"
        description="Explore our curated work, showcasing collaborations with visionary clients across diverse industries."
        btnText="View Porfolio"
        showSlider
      />

      {/* bottom vector animation */}
      <div className="relative z-3 w-full max-w-[1440px] h-[30px] md:h-[70px]">
        <Bottomvector />
        <div className="absolute z-0 bottom-1 left-1/2 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
        <div className="absolute z-0 bottom-1 left-1/6 w-1/3 h-full bg-[#0055ff] animate-[diagonal_3s_ease-in-out_infinite_alternate] blur-[40px]"></div>
      </div>
    </section>
  )
}

export default TestimonialSection
