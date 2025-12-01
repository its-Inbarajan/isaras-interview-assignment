import React from "react";
import {
  gradient_25,
  gradient_32,
  test_arjun,
  test_muthu,
  test_priya,
  test_saranya,
  test_vinoth,
} from "@/assets/image";
import gsap from "gsap";
import type { Testmonials } from "@/@types/types";

export default function Testmonials() {
  const testimonials: Testmonials[] = React.useMemo(
    () => [
      {
        name: "Saranya Nair",
        position: "UPSC Aspirant",
        image: test_saranya,
        quote:
          "I cleared both Prelims and Mains with ease. The AI mentor made my preparation structured and stress-free. A big thanks to I, Saras for being my constant guide!",
      },
      {
        name: "Muthukumaran S",
        position: "UPSC Aspirant",
        image: test_muthu,
        quote:
          " The cascading filters in Ask Saras are incredibly useful — it’s like having a personalized mentor who understands what I need instantly. Truly unique!",
      },
      {
        name: "Vinoth Kumar",
        position: "UPSC Aspirant",
        image: test_vinoth,
        quote:
          "The application’s clean UI and smart navigation made learning seamless. I could focus on studying without distractions - a flawless experience.",
      },
      {
        name: "Priya Sharma",
        position: "UPSC Aspirant",
        image: test_priya,
        quote:
          " The Current Affairs Analysis is a total game changer! I no longer waste hours collecting news. I, Saras summarizes everything with UPSC relevance — it’s like reading The Hindu and a topper’s notes combined.",
      },
      {
        name: "John Doe",
        position: "UPSC Aspirant",
        image: test_arjun,
        quote:
          "The Mains Evaluation feature blew my mind. Getting AI-based feedback instantly helped me improve my answer writing every single day — it feels like having a personal evaluator 24×7.",
      },
    ],
    []
  );

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<HTMLDivElement[]>([]);
  const tlRef = React.useRef<gsap.core.Timeline | null>(null);

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth;
    const containerWidth = slider.offsetWidth;

    const tl = gsap.timeline({
      repeat: -1, // infinite loop
      defaults: { ease: "none" },
    });
    tlRef.current = tl;
    tl.to(slider, {
      x: `-${totalWidth - containerWidth}px`,
      duration: testimonials.length * 4, // controls speed
    }).to(slider, {
      x: 0,
      duration: 0, // instantly reset to start
    });

    return () => {
      tl.kill();
    };
  }, [testimonials]);

  return (
    <section className="xl:py-[100px] md:py-20 bg-(--color-background-2) py-14 space-y-[70px] relative overflow-hidden">
      <figure
        data-ns-animate
        data-delay="0.4"
        data-offset="100"
        data-direction="left"
        className="absolute w-[400px] lg:w-[500px] xl:w-[584px] top-[-214px] left-[-100px]
        lg:top-[-250px] xl:top-[-295px] lg:left-[-52px] xl:left-[-52px]"
        aria-hidden="true"
      >
        <img
          src={gradient_32}
          className="size-full object-cover"
          alt="gradient_32"
        />
      </figure>

      <div className="max-w-full mx-auto md:max-w-7xl">
        <div className="space-y-5 max-w-[804px] mx-auto text-center">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-cyan font-medium text-black"
          >
            Success Stories
          </span>
          <div className="space-y-3">
            <h2
              data-ns-animate
              data-delay="0.2"
              className="text-3xl md:text-6xl"
            >
              Hear from Aspirants <br />
              Who Trust{" "}
              <span className="text-(--color-primary-500) font-semibold">
                I, Saras
              </span>
            </h2>
            <p
              data-ns-animate
              data-delay="0.3"
              className="text-gray-700 text-[1rem]"
            >
              See how I, Saras has helped UPSC aspirants simplify their
              preparation, boost confidence, and achieve their goals with the
              power of AI mentoring.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-white dark:from-black to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-white dark:from-black to-transparent z-20" />

      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex items-center gap-8 will-change-transform"
          data-ns-animate
          data-delay="0.4"
        >
          {testimonials.map((item, i) => (
            <div
              key={`testimonials-${item.name}`}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              onMouseEnter={() => tlRef.current?.pause()}
              onMouseLeave={() => tlRef.current?.resume()}
              className="bg-(--color-background-1)/90 hover:bg-white 
              dark:bg-(--color-background-5) dark:hover:bg-(--color-background-8)
              hover:shadow transition-colors duration-300 ease-linear
              rounded-[20px] p-8 min-w-[358px] max-w-[358px] shrink-0 w-full ml-8"
            >
              <p>{item.quote}</p>

              <div className="my-8 h-px bg-(--color-stroke-4) dark:bg-(--color-stroke-8)" />

              <div className="flex items-center gap-3">
                <figure className="size-12 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="avatar"
                    className="h-full w-full"
                  />
                </figure>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-accent">
                    {item.name}
                  </h3>
                  <p className="text-gray-500/60 dark:text-accent/60">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <figure
        data-ns-animate
        data-delay="0.4"
        data-offset="100"
        data-direction="right"
        className="absolute w-[200px] lg:w-[300px] xl:w-[409px]
        bottom-[-50px] xl:bottom-[-72px] right-2.5"
        aria-hidden="true"
      >
        <img
          src={gradient_25}
          className="size-full object-cover"
          alt="gradient_25"
        />
      </figure>
    </section>
  );
}
