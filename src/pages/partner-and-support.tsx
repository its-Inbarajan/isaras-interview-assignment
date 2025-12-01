import {
  aws_logo,
  gradient_16,
  IIML_EIC_logo,
  sisfs_logo,
} from "@/assets/image";

export default function Partner() {
  return (
    <section className="my-14 md:my-20 lg:my-[100px] w-[80%] 2xl:max-w-[1440px] rounded-4xl mx-auto py-[70px] px-10 md:px-[75px] bg-white dark:bg-background-6 relative z-10 md:min-h-[226px] overflow-hidden">
      <div
        data-ns-animate
        data-delay="0.7"
        data-offset="120"
        className="absolute select-none pointer-events-none bottom-[-206px] sm:-bottom-[150px] max-md:w-[400px] max-md:h-[500px] left-[-17%] sm:left-[40%] -translate-x-1/2 md:-bottom-[-20%] w-full h-full -rotate-96 sm:-rotate-30 -z-10"
      >
        <img src={gradient_16} alt="bg" className="w-[115%] h-[224%]" />
      </div>
      <div className="text-center relative z-10 w-fit  mx-auto">
        <h2
          data-ns-animate
          data-delay="0.3"
          className="md:text-6xl text-3xl mb-3"
        >
          Partners & Supporters
        </h2>
        <p
          data-ns-animate
          data-delay="0.4"
          className="lg:max-w-[620px] text-gray-500 mx-auto mb-14"
        >
          Building a smarter tomorrow, hand in hand with our partners.
        </p>
      </div>
      <aside
        className="max-w-full md:max-7xl mx-auto relative mt-16 lg:mt-[66px] z-10"
        aria-label="Our Clients"
      >
        <div
          data-ns-animate
          data-delay="0.2"
          className="flex items-center flex-wrap md:flex-nowrap justify-center gap-4 md:gap-x-4 lg:gap-x-8"
          role="list"
        >
          {[sisfs_logo, IIML_EIC_logo, aws_logo].map((item) => (
            <figure
              key={`client-logo-${item}`}
              role="listitem"
              className="lg:min-w-36 lg:ml-8"
            >
              <img
                src={item}
                alt="Client company logo 1"
                className="lg:w-auto inline-block dark:hidden"
              />
            </figure>
          ))}
        </div>
      </aside>
    </section>
  );
}
