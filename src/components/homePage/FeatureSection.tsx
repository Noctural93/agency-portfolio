import React from 'react'
import CalloutSection from '../CalloutSection'
import FeatureCard from './FeatureCard'

const featureCardData = [
  {
    title: 'Boost Your Revenue',
    subtitle: 'Increase Profits',
    description: 'Unlock new revenue streams with data-driven strategies and marketing.',
    cta: 'PRO'
  },
  {
    title: 'Customizable Assets',
    subtitle: 'Editable Designs',
    description: "Easily modify and personalize design elements to fit your brand's identity.",
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

const FeatureSection = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-[70px] gap-[100px] md:pt-[100px] w-full overflow-hidden'>
      <CalloutSection
        sectionIndicatiorText="Features"
        title="Unlimited Design Features"
        subtitle="Delivered In A Second!"
        description="Get unlimited design features that give you the freedom to create without boundaries."
        btnText="View About Agency"
      />

      <div className='flex h-min w-full max-w-[1440px] mx-auto px-8 lg:px-22 xl:px-20 2xl:px-32'>
        <div className='grid gap-[24px] auto-rows-min grid-cols-1 lg:grid-cols-3 w-full'>
          {featureCardData.map((card, index) => (
            <FeatureCard key={index} card={card} />
          ))}
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[100%]" />
    </section>
  )
}

export default FeatureSection
