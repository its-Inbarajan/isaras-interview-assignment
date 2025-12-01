import React from "react";
import {
  gradient_32,
  gradient_33,
  gradient_34,
  gradient_9,
  step_1,
  step_2,
  step_3,
  step_4,
} from "@/assets/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gradient from "@/components/ui/gradient-background";
type CardContent = {
  title: string;
  des: string;
  sub_des: string;
  image_1: string;
  image_2: string;
};
gsap.registerPlugin(ScrollTrigger);

export default function HowItsWorkSection() {
  const containerRef = React.useRef<HTMLElement | null>(null);
  const cardRefs = React.useRef<HTMLDivElement[]>([]);

  const cardContent: CardContent[] = React.useMemo(
    () => [
      {
        title: "Login",
        des: "Start your journey with a click.",
        image_1: gradient_32,
        image_2: step_1,
        sub_des:
          "Sign in to your Saras dashboard and unlock access to India’s first AI-powered UPSC preparation ecosystem - built to simplify your learning path.",
      },
      {
        title: "Choose Exam & Subject",
        des: "Learn what matters the most.",
        image_1: gradient_33,
        image_2: step_2,
        sub_des:
          "Select your UPSC stage and subjects to get personalized study material, curated question sets, and AI-recommended topics aligned to your syllabus.",
      },
      {
        title: "Chat with AI Mentor",
        des: "Get instant answers & guidance.",
        image_1: gradient_34,
        image_2: step_3,
        sub_des:
          "Ask any UPSC-related question - from static topics to current affairs. Your AI Mentor provides detailed explanations, insights, and follow-up resources in seconds.",
      },
      {
        title: "Practice & Learn at Your Pace",
        des: "Reinforce. Review. Repeat.",
        image_1: gradient_9,
        image_2: step_4,
        sub_des:
          "Test your understanding with adaptive MYQ and PYQ. Get real-time feedback, track your improvement, and stay exam-ready - anytime, anywhere.",
      },
    ],
    []
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // scroll distance
          pin: true,
          scrub: true,
        },
      });

      cardRefs.current.forEach((card, index) => {
        tl.fromTo(
          card,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          index // sequence each card one-by-one
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      id="howitworks"
      className="py-[50px] md:py-20 lg:py-[100px] w-full"
      aria-label="how it work section"
    >
      <Gradient />
      <div className="max-w-full w-full mx-auto px-4 ">
        <div className="grid grid-cols-12 xl:gap-[60px] gap-y-12 items-start">
          <div className="col-span-12 xl:col-span-6 lg:sticky lg:top-28">
            <div className="space-y-7 xl:text-left text-center">
              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.2"
                  className="xl:max-w-[629px] text-3xl md:text-7xl w-full xl:mx-0 mx-auto"
                >
                  How it Works
                </h2>
                <p
                  data-ns-animate
                  data-delay="0.3"
                  className="text-sm leading-relaxed text-gray-500 xl:max-w-[544px]"
                >
                  Prepare smarter in four simple steps. <br /> From login to
                  personalized AI mentorship - I, Saras will make UPSC learning
                  seamless, interactive, and efficient.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 flex justify-center">
            <div className="xl:max-w-full max-w-[820px] w-full xl:mx-0 mx-auto relative">
              {/* <!-- card one  --> */}
              {cardContent.map((item, idx) => (
                <div
                  key={`hiw-${item.title}`}
                  ref={(el) => {
                    if (el) cardRefs.current[idx] = el;
                  }}
                  className="p-2 absolute right-0 translate-x-0 translate-y-0 top-[calc(--spacing*28)] rounded-[20px] z-20 flex items-center justify-center sm:max-w-[483px] max-w-full sm:mx-0 mx-auto w-full overflow-hidden"
                  style={{
                    transform: "translateY(0)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* <!-- border img  --> */}
                  <figure className="absolute pointer-events-none top-[-62%] md:-top-[85%] left-[-48%] md:-left-[68%] -z-10 rotate-312 opacity-50 md:size-[800px] size-[500px] select-none">
                    <img
                      src={item.image_1}
                      alt="step"
                      className="block w-full h-full"
                    />
                  </figure>
                  {/* <!-- card content  --> */}
                  <div className="relative z-10 p-8 rounded-[14px] sm:max-w-[467px] max-w-full w-full space-y-6 bg-white dark:bg-black">
                    <div className="space-y-1">
                      <h5 className="mb-2">
                        <span className="text-(--color-primary-500) text-2xl font-medium">
                          {item.title}
                        </span>
                      </h5>
                      <p className="text-heading-4 text-gray-500 dark:text-white">
                        {item.des}
                      </p>
                      <p>{item.sub_des}</p>
                    </div>
                    <figure className="max-w-[385px] w-full rounded-2xl overflow-hidden">
                      <img
                        src={item.image_2}
                        alt="step"
                        className="md:max-h-[315px] md:min-h-[315px]"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
