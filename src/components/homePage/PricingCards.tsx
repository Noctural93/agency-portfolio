import Image from "next/image";
import pricingCardBg from "../../../public/pricing_bg.svg";
import rocket from "../../../public/rocket-25.png";
import SectionIndicator from "../SectionIndicator";
import Button from "../Button";
import VerifiedIcon from "../../../public/verifiedIcon";

const PricingData = [
  {
    id: 1,
    step: 'Most Pick',
    title: 'Basic',
    price: '$450',
    offerPrice: '$99',
    description: 'Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.',
    points: ['100+', '75+'],
    features: [
      'All templates unlocked',
      'Unlimited Licenses',
      'Lifetime Updates',
    ],
    hiddenFeatures: [
      'Email support',
      '30-Days Money-back Guarantee'
    ]
  },
  {
    id: 2,
    step: 'Recommended',
    title: 'Premium',
    price: '$2,599',
    description: 'Our pro pricing plan is designed for businesses looking for advanced features and premium support.',
    points: ['650+', '250+'],
    features: [
      'All templates unlocked',
      'Unlimited Licenses',
      'Lifetime Updates',
      'Email support',
      '30-Days Money-back Guarantee'
    ]
  },
];

const PricingCards = () => {
  return (
    <div className="flex items-center flex-col xl:flex-row justify-center w-full gap-[24px]">
      {PricingData.map((data, index) => (
        <div className="relative flex flex-col grow p-[40px] border border-solid border-[#ffffff14] rounded-[20px] gap-[20px] w-full" key={index}>
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={pricingCardBg}
              alt="Pricing Card Background"
              className="w-full h-full object-cover rounded-[20px] object-center"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="p-[14px] rounded-[10px] border border-solid border-[#0055ff26] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,153,255,0.12)_0%,rgb(9,9,18)_100%)] shadow-[rgba(0,85,255,0.8)_0px_10px_50px_5px,rgba(255,255,255,0.12)_0px_20px_20px_-5px_inset]">
              <Image src={rocket} alt="icon" />
            </div>
            <SectionIndicator
              text={data.step}
              dot={false}
              className="text-[12px] px-[12px] py-[10px] md:px-[12px] md:py-[10px]"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[14px] w-full relative">
            <div className="flex flex-col items-start justify-center gap-[14px] w-full">
              <h3 className="text-[16px] font-bold">{data.title}</h3>
              <div className="w-full flex items-center justify-start">
                {
                  data.offerPrice ? (
                    <div className="flex items-center gap-[20px] justify-start">
                      <h1 className="text-[48px]">
                        {data.offerPrice}
                        <span className="text-[18px] text-[#ffffff99] -tracking-[1px]"> / Month</span>
                      </h1>
                      <div className="relative text-[48px] text-[#ffffff33]">
                        {data.price}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[1px] w-[111%] bg-[#0055ff] -rotate-[15deg]"/>
                      </div>
                    </div>
                  ) : (
                    <h1 className="text-[48px]">
                        {data.price}
                        <span className="text-[18px] text-[#ffffff99] -tracking-[1px]"> / Month</span>
                      </h1>
                  )
                }
              </div>
              <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_100%)] h-[1px] w-[230px] self-start"/>
            </div>

            <div className="flex items-start justify-center gap-[30px] w-full max-w-[500px] flex-col">
              <p className="text-[14px] text-[#ffffff33]">{data.description}</p>
              <div className="flex flex-wrap gap-[10px] items-center justify-start">
                {data.points.map((point, idx) => (
                  <div className="bg-[linear-gradient(-7.64244e-08deg,rgba(199,199,199,0.06)_0%,rgba(71,71,71,0.06)_100%)] border border-solid border-[#ffffff0d] backdrop-blur-[2.5px] rounded-[10px] gap-[5px] flex items-center justify-center py-[6px] px-[14px] w-min h-min" key={idx}>
                    <h3 className="text-[16px] font-bold -tracking-[0.3px]">{point}</h3>
                    <span className="text-[#ffffff99] text-[16px] -tracking-[0.3px]">
                      {idx === 0 ? 'Projects' : 'Revisions'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[20px] flex-nowrap items-start">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex gap-[10px] items-center justify-center">
                    <VerifiedIcon />
                    <span className="text-[#ffffff99]">{feature}</span>
                  </div>
                ))}
                {data.hiddenFeatures && data.hiddenFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-[10px] items-center justify-center opacity-[0.5]">
                    <VerifiedIcon/>
                    <span className="text-[#ffffff99]">{feature}</span>
                  </div>
                ))}
              </div>
              <Button childrenClass="w-[344px] pt-[10px] font-bold">Book an Appointment</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
