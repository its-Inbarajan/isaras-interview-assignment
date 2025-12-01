import { gradient_23, gradient_40 } from "@/assets/image";

export default function Faq() {
  const faq = [
    {
      question: "Who am I?",
      answer:
        "I am an AI assistant designed to help aspirants prepare for the UPSC exams. I use the power of AI to provide personalized guidance and support throughout your preparation journey.",
    },
    {
      question: "What are the study materials I am trained on?",
      answer:
        "I draw knowledge from NCERT books, standard reference materials, and newspapers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period to allow you to experience the platform before committing to a subscription.",
    },
  ];
  return (
    <section
      id="faq"
      className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-0 lg:pt-0 md:px-6 px-4 xl:pb-0 xl:pt-0 overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] -translate-y-1/3 md:-translate-y-[60%] lg:-translate-y-[80%] rotate-10 z-1 select-none pointer-events-none overflow-hidden"
      >
        <img
          src={gradient_40}
          alt="How it Works background gradient"
          className="w-full h-auto max-w-full"
        />
      </figure>
      <div className="max-w-full mx-auto md:max-w-7xl">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            {" "}
            Faq
          </span>
          <h2 data-ns-animate data-delay="0.2" className="text-3xl md:text-6xl">
            Frequently
            <span className="text-(--color-primary-500) m-2 inline-block">
              asked
            </span>
            Questions
          </h2>
          <p
            data-ns-animate
            data-delay="0.3"
            className="lg:max-w-[620px] mx-auto text-sm font-normal text-gray-500"
          >
            By offering concise and informative responses, this section helps
            users find solutions without the need to contact customer support,
            saving time
          </p>
        </div>
        <div
          data-ns-animate
          data-delay="0.4"
          className="max-w-[850px] w-full space-y-4 mx-auto"
        >
          <ul className="basis-1/2 gap-5 flex flex-col">
            {faq.map((item) => (
              <li key={`faq-${item.question}`} className="group">
                <div className="bg-white dark:bg-(--color-background-5) rounded-xl px-6 overflow-hidden relative z-10">
                  <button
                    className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg"
                    aria-expanded="false"
                  >
                    <div className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 opacity-0 select-none">
                      <img src={gradient_23} alt="gradient" />
                    </div>
                    <span className="flex-1">{item.question}</span>
                    <svg
                      className="shrink-0 w-4 h-4  ml-auto fill-current"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out false"
                      ></rect>
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"
                      ></rect>
                    </svg>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden "
                    style={{ transition: "max-height 0.3s ease-in-out 0s" }}
                  >
                    <div className="pb-5 leading-relaxed">
                      <div className="space-y-2 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* <div className="accordion-item group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-xl px-6 overflow-hidden relative z-10">
            <div className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
              <img src="images/gradient/gradient-23.png" alt="gradient" />
            </div>
            <button className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full">
              <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                Who am I?
              </span>
              <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    className="stroke-secondary dark:stroke-accent"
                  />
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                <p>
                  I am an AI assistant designed to help aspirants prepare for
                  the UPSC exams. I use the power of AI to provide personalized
                  guidance and support throughout your preparation journey.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="accordion-item group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-xl px-6 overflow-hidden relative z-10">
            <div className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
              <img src="images/gradient/gradient-23.png" alt="gradient" />
            </div>
            <button className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full">
              <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                What are the study materials I am trained on?
              </span>
              <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    className="stroke-secondary dark:stroke-accent"
                  />
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                <p>
                  I draw knowledge from NCERT books, standard reference
                  materials, and newspapers.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-xl px-6 overflow-hidden relative z-10">
            <div className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
              <img src="images/gradient/gradient-23.png" alt="gradient" />
            </div>
            <button className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full">
              <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                Is there a free trial available?
              </span>
              <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    className="stroke-secondary dark:stroke-accent"
                  />
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                <p>
                  Yes, we offer a free trial period to allow you to experience
                  the platform before committing to a subscription.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
