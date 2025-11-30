import React from "react";
import { dashboard_ai_isaras, gradient_37 } from "@/assets/image";
import tube_4 from "@/assets/videos/tube-4.mp4";
import { Button } from "@/components/ui/button";

type Typefeatures = {
  text: string;
  svg: React.ReactElement;
};

export default function HeroSection() {
  const features: Typefeatures[] = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
            fill="white"
          />
        </svg>
      ),
      text: "Ask, Chat, and Learn",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
            fill="white"
          />
        </svg>
      ),
      text: "Current Affairs",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
            fill="white"
          />
        </svg>
      ),
      text: "Prelims & Mains PYQ Practice",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
            fill="white"
          />
        </svg>
      ),
      text: "Mock Tests",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
            fill="white"
          />
        </svg>
      ),
      text: "Prepare at Your Own Pace",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-(--color-background-8) z-0 sm:pb-0 pb-14 lg:-mb-12 md:-mb-10 overflow-hidden">
      <figure className="absolute animate-spin animation-duration-[60s] z-3 size-[80vw] sm:size-[60vw] lg:size-[50vw] rotate-[-597deg] top-[250px] left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <img
          src={gradient_37}
          alt="gradient_37"
          className="size-full object-cover origin-[center_center]"
        />
      </figure>
      <figure className="absolute h-full w-full hero-bg-overlay-light dark:hero-bg-overlay-dark z-2"></figure>
      {/* BG video */}
      <video
        className="w-full h-full absolute top-0 left-0 scale-100 object-cover object-center z-[-1] min-h-screen block"
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={tube_4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative sm:pt-[230px] pt-40 pb-[140px] max-sm:pb-16 max-[426px]:pb-10 z-20">
        <div className="max-w-full text-center relative z-10">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-purple-v2  mb-5"
          >
            Where Aspiration meets Intelligence
          </span>
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-semibold mb-4 xl:text-7xl md:text-4xl text-3xl"
          >
            Your{" "}
            <span className="bg-[linear-gradient(45deg,#AB35D6,#8B35D6,#2dd440)] text-transparent bg-clip-text bg-no-repeat hero-text-color-2 inline-block text-animation">
              AI Mentor
            </span>{" "}
            for
            <br className="hidden md:block" />
            <span className="bg-[linear-gradient(45deg,#AB35D6,#8B35D6,#2dd440)] text-transparent  bg-clip-text bg-no-repeat hero-text-color-2 inline-block text-animation">
              UPSC Success
            </span>
          </h1>
          <p
            data-ns-animate
            data-delay="0.3"
            className="max-w-[588px] font-medium text-gray-500 mx-auto mb-10 md:mb-14"
          >
            Chat, Learn & Practice with india’s largest first-stage AI Mentor
          </p>
          <ul className="flex flex-col md:flex-row gap-4 mb-9 px-2 md:mb-11 text-center lg:mb-14 max-md:w-full md:w-auto mx-auto md:mx-0 justify-center">
            <li
              data-ns-animate
              data-delay="0.3"
              data-direction="left"
              data-offset="50"
            >
              <Button className="text-center hover:bg-black hover:text-white md:btn-xl w-10/12 md:w-auto mx-auto md:mx-0">
                <span>Ask Saras</span>
              </Button>
            </li>
            <li
              data-ns-animate
              data-delay="0.5"
              data-direction="left"
              data-offset="50"
            >
              <Button className="bg-white hover:bg-purple-500 hover:has-[svg]:text-white text-center border shadow text-black border-gray-500 w-10/12 md:w-auto mx-auto md:mx-0">
                <span>Try Free Now</span>
              </Button>
            </li>
          </ul>
          <div
            data-ns-animate
            data-delay="0.7"
            data-instant="true"
            className="relative max-w-[1290px] mx-auto lp:mx-auto max-lp:mx-5 max-sm:rounded-2xl rounded-4xl overflow-hidden max-sm:p-2 p-2.5 bg-background-3 dark:bg-background-7 max-sm:max-w-[450px] max-sm:mx-auto max-[500px]:mx-5! bg-image"
          >
            <img
              src={dashboard_ai_isaras}
              alt="hero video cover"
              className="w-full h-ful object-cover max-sm:rounded-xl rounded-[25px]"
            />
          </div>
          <ul className="flex flex-wrap max-lg:gap-5 text-center items-center justify-center gap-[42px] max-lg:mt-4 mt-20">
            {features.map((item) => (
              <li
                key={`feature-${item.text}`}
                data-ns-animate
                data-delay="0.4"
                className="flex gap-3 items-center"
              >
                <span className="bg-green-500 rounded-full size-[18px] flex items-center justify-center">
                  {item.svg}
                </span>
                <p className="text-gray-400 leading-tight md:text-lg text-sm md:leading-relaxed ">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
