import {
  gradient_23,
  smarter_than_chatgpt,
  smarter_than_search,
  stress_less,
  study_efficient,
  perform_better,
} from "@/assets/image";
import { cn } from "@/lib/utils";

type Tfeatures = {
  title: string;
  des: string;
  image: string;
};
export default function FeaturesSection() {
  const content: Tfeatures[] = [
    {
      des: "No more information overload. Saras filters out unnecessary web clutter and delivers only what’s relevant for your exam - precise, syllabus-focused, and time-saving.",
      image: smarter_than_search,
      title: "Smarter than search",
    },
    {
      des: "No more generic responses. Saras understands UPSC patterns and provides accurate, syllabus-aligned answers tailored to your query — fact-checked, reliable, and exam-focused.",
      image: smarter_than_chatgpt,
      title: "Smarter than ChatGPT",
    },
    {
      des: "Stay focused with AI-driven study plans that adapt to your progress and help you concentrate on high-priority topics.",
      image: study_efficient,
      title: "Study efficiently",
    },
    {
      des: "Take AI-powered mock tests and get personalized feedback highlighting where to improve - so every study hour counts.",
      image: perform_better,
      title: "Perform better",
    },
    {
      des: "Get 24×7 doubt resolution and continuous support. Your AI mentor is always available to clear concepts, boost confidence, and keep you exam-ready.",
      image: stress_less,
      title: "Stress Less",
    },
  ];
  return (
    <section
      id="features"
      className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-(--color-background-1) dark:bg-(--color-background-7) relative overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.2"
        data-direction="up"
        data-offset="100"
        className="absolute top-0 left-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1140px] z-4 select-none pointer-events-none overflow-hidden rotate-180 [--tw-translate-x:-50%] [--tw-translate-y:10%] transform"
      >
        <img
          src={gradient_23}
          alt="How it Works background gradient"
          className="w-full h-auto max-w-full"
        />
      </figure>
      <div className="max-w-full mx-auto relative z-10 px-4">
        <div className="text-center space-y-5 max-w-[650px] mx-auto mb-14">
          <div>
            <h2
              data-ns-animate
              data-delay="0.3"
              className="mb-3 text-3xl md:text-6xl"
            >
              Why{" "}
              <span className="text-(--color-primary-500)  font-semibold">
                I, Saras
              </span>
            </h2>
            <p
              data-ns-animate
              data-delay="0.3"
              className="mb-8 lg:max-w-[696px] mx-auto text-gray-500 text-lg"
            >
              A smarter, faster, calmer way to prepare for UPSC
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-0 justify-center">
          {content.map((item, index) => (
            <div
              key={`features-${item.title}`}
              data-ns-animate
              data-delay="0.4"
              className={cn(
                "col-span-12 p-6 rounded-[20px] border-8 border-white dark:border-(--color-background-9) dark:bg-(--color-background-7) bg-(--background-1) space-y-6",
                // first two items take half width on md/lg, others take one-third
                index < 2
                  ? "md:col-span-6 lg:col-span-6"
                  : "md:col-span-6 lg:col-span-4"
              )}
            >
              <div className="space-y-1">
                <h5 className="font-semibold text-xl ">{item.title}</h5>
                <p className="text-gray-500 leading-normal md:leading-6 tracking-wide text-sm md:w-2xs xl:w-sm">
                  {item.des}
                </p>
              </div>
              <figure className="w-full">
                <img
                  src={item.image}
                  alt="feature image"
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
