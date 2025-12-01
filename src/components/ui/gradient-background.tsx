import { gradient_23 } from "@/assets/image";

export default function Gradient() {
  return (
    <figure
      data-ns-animate
      data-delay="0.2"
      data-direction="up"
      data-offset="100"
      className="absolute top-0 left-0 right-0 bottom-0 z-0rotate-180 z-10 select-none pointer-events-none -translate-y-1/2 sm:-translate-y-2/5 md:-translate-y-1/2 lg:-translate-y-[80%]"
      // className="absolute top-1/2 sm:top-2/5 md:top-1/4 lg:top-0 left-1/2 -translate-x-1/2 w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[1140px] -translate-y-1/2 sm:-translate-y-2/5 md:-translate-y-1/2 lg:-translate-y-[80%] rotate-180 h-full -z-10 select-none pointer-events-none"
    >
      <img
        src={gradient_23}
        alt="How it Works background gradient"
        className="w-full h-auto max-w-none opacity-[0.5]"
      />
    </figure>
  );
}
