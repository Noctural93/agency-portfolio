import { twMerge } from "tailwind-merge";

interface BGVideoProps {
  childrenClass?: string;
}

const BGVideo = ({ childrenClass }: BGVideoProps) => {
  return (
    <section className={twMerge('absolute top-0 left-0 inset-0 w-full h-[724px] md:h-[810px] overflow-hidden', childrenClass)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/hero_bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute -bottom-[1px] left-0 w-full h-[84px] md:h-[180px] bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}

export default BGVideo
