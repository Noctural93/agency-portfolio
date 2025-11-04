import CalloutSection from '../CalloutSection'
import FeatureCard from './FeatureCard'

const featureCardData = [
  {
    title: 'Branding',
    subtitle: 'Distinct identities that stand out',
    description: 'Crafting identities that speak. Memorable brands, lasting impact.',
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Designs that users love',
    description: "Designing interfaces users love. Intuitive, clean, and conversion-focused.",
    cta: 'NEW'
  },
  {
    title: 'Bug Less Development',
    subtitle: 'Optimized Code',
    description: 'Our bug-less development ensures that your website runs smooth and fast.',
    cta: 'NEW'
  },
  {
    title: 'Award-Winning Desings',
    subtitle: 'Rcognized Design',
    description: 'Our award-winning designs showcase creativity that set us apart in the industry.',
    cta: 'NEW'
  },
  {
    title: 'Lightning Fast Delivery',
    subtitle: 'Quick Turnaround',
    description: 'Ensuring your deliverables are ready when you need them, with great quality.',
    cta: 'PRO'
  },
  {
    title: 'Boost Your Revenue',
    subtitle: 'Increase Profits',
    description: 'Our mobile-fiendly designs ensures your design looks stunning across all devices.',
    cta: 'NEW'
  }
]

const OurServices = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[70px] gap-[100px] md:pt-[100px] w-full overflow-hidden">
      <CalloutSection
        sectionIndicatiorText="Our Services"
        title="Solutions Designed"
        subtitle="for Growth"
        description="We cover the entire digital spectrum to ensure your brand thrives."
      />

      <div className="flex h-min w-full max-w-[1440px] mx-auto px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[120px]">
        <div className="grid gap-[24px] auto-rows-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {featureCardData.map((card, index) => (
            <FeatureCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* Line */}
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[85%] self-center m-w-[1300px]" />
    </section>
  );
};

export default OurServices;
