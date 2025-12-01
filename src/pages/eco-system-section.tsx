import type { ITabs } from "@/@types/types";
import {
  ask_saras,
  gradient_3,
  ic_1,
  ic_2,
  ic_3,
  ic_4,
  ic_5,
  ic_6,
  ic_7,
  ic_8,
  ic_9,
  ic_10,
  PYQS,
  current_affairs,
} from "@/assets/image";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

export default function EcoSystemSection() {
  const tab: ITabs[] = [
    {
      label: "Ask Saras",
      value: "ask-saras",
      content: {
        image: ask_saras,
        text: "Ask Saras Your ",
        highlightText: "AI-powered UPSC Mentor.",
        description:
          "Have a doubt? Ask Saras right away! From intricate polity concepts to challenging economy topics - get accurate, easy-to-grasp explanations powered by AI, fine-tuned for UPSC aspirants",
        list: [
          {
            icon: ic_1,
            title: "Instant Doubt Resolution",
            des: "Get answers in seconds, not hours.",
          },
          {
            icon: ic_2,
            title: "Context-Aware Guidance",
            des: "Understand not just the “what,” but also the “why.”",
          },
          {
            icon: ic_3,
            title: "Topic-based Clarity",
            des: "Deep insights and explanations tailored to UPSC standards.",
          },
        ],
      },
    },
    {
      label: "PYQ",
      value: "pyq",
      content: {
        image: PYQS,
        text: "Practice Smarter with ",
        highlightText: "AI-curated Question Sets.",
        description:
          "Master every subject with intelligently structured Previous Year Questions (PYQs) tailored for UPSC preparation. Saras analyzes trends, identifies key topics, and helps you focus where it truly matters.",
        list: [
          {
            icon: ic_4,
            title: "Smart Question Categorization",
            des: "Questions organized by year, subject, and difficulty level.",
          },
          {
            icon: ic_5,
            title: "AI Insights & Explanations",
            des: "Get detailed, UPSC-aligned reasoning for every answer.",
          },
          {
            icon: ic_6,
            title: "Adaptive Practice Mode",
            des: "Practice based on your strengths, weaknesses, and progress.",
          },
          {
            icon: ic_7,
            title: "Trend-based Analysis",
            des: "Spot recurring topics and evolving patterns across years.",
          },
        ],
      },
    },
    {
      label: "Current Affairs",
      value: "current-affairs",
      content: {
        image: current_affairs,
        text: "Your Daily ",
        highlightText: "UPSC-ready News Companion.",
        description:
          "Stay updated with AI-curated current affairs tailored for UPSC. From government policies to global developments - Saras summarizes, analyzes, and connects every event to the syllabus you’re preparing for.",
        list: [
          {
            icon: ic_8,
            title: "Daily Curated Headlines",
            des: "Focused, exam-relevant updates.",
          },
          {
            icon: ic_9,
            title: "Syllabus-linked Insights",
            des: "Understand where each topic fits.",
          },
          {
            icon: ic_10,
            title: "AI-powered Analysis",
            des: "Get clarity on causes, impacts, and implications.",
          },
        ],
      },
    },
  ];

  const [activeTab, setActiveTab] = React.useState<string>("ask-saras");

  return (
    <section
      data-ns-animate
      data-delay="0.3"
      className="bg-white dark:bg-(--color-background-6) pt-20 lg:pt-[88px] relative xl:pt-[100px] sm:pb-36 pb-14 xl:pb-[94px] overflow-hidden"
    >
      <figure
        data-ns-animate
        data-delay="0.7"
        data-offset="200"
        className="absolute md:block hidden size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg] top-[520px] left-1/2 -translate-x-1/2 select-none pointer-events-none"
      >
        <img
          src={gradient_3}
          alt="download-bg"
          className="size-full object-cover"
        />
      </figure>
      <div className="max-w-full md:max-w-7xl w-full mx-auto">
        <div className="text-center">
          <h2
            data-ns-animate
            data-delay="0.2"
            className="mb-3 text-5xl font-medium"
          >
            AI-powered{" "}
            <span className="text-(--color-primary-500) inline-block font-semibold">
              I, Saras
            </span>{" "}
            Ecosystem
          </h2>
          <p
            data-ns-animate
            data-delay="0.3"
            className="mb-8 lg:max-w-2xl leading-relaxed text-sm font-medium text-gray-500 mx-auto"
          >
            With I, Saras, you can chat, learn, and practice in one unified
            AI-powered environment - from doubt solving to personalized test
            prep and real-time current affairs analysis.
          </p>
        </div>
        <div className="flex w-full flex-col">
          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            className="flex gap-5 flex-col flex-1 items-center "
          >
            <TabsList className="flex gap-2 h-12 md:h-fit rounded-none px-0 bg-transparent flex-wrap md:w-md md:flex-row">
              {tab.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="relative shadow-none md:pb-5 transition-all duration-300 ease-in-out data-[state=active]:text-white data-[state=active]:bg-purple-500 md:data-[state=active]:bg-transparent rounded-full md:w-full md:data-[state=active]:text-black  text-gray-400 text-lg md:data-[state=active]:shadow-none"
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-0 md:block hidden -bottom-1 h-0.5 w-full bg-(--color-primary-500) transition-transform duration-300",
                      activeTab === item?.value
                        ? "scale-x-100 "
                        : "scale-x-0 origin-center"
                    )}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
            <Separator className="-mt-5 md:block hidden" />
            {tab.map((item) => (
              <TabsContent
                key={`content-${item.value}`}
                value={item.value}
                className="w-full px-3 py-3 md:px-6 md:py-6"
              >
                <div className="flex flex-col justify-between lg:flex-row items-start gap-y-14 gap-x-24 w-full">
                  <div className="flex-1 lg:max-w-full sm:max-w-sm sm:mx-auto">
                    <h2 className="mb-3 lg:text-[3.25rem] lg:leading-[120%] leading-[130%] text-[2rem]">
                      {/* <br className="hidden lg:block" /> */}
                      {item.content.text}
                      <span className="text-(--color-primary-500)">
                        {item.content.highlightText}
                      </span>
                    </h2>
                    <p className="mb-6 xl:mb-8 text-sm font-normal leading-relaxed lg:max-w-[478px]">
                      {item.content.description}
                    </p>
                    <ul className="space-y-1.5 mb-7 xl:mb-14">
                      {item.content.list.map((it) => (
                        <li
                          key={`content-list-${it.title}`}
                          className="flex items-center gap-4 list-none py-2"
                        >
                          <span>
                            <figure className="size-10 overflow-hidden mx-auto">
                              <img
                                src={it.icon}
                                alt={`image-${it.title}`}
                                className="size-full object-cover"
                              />
                            </figure>
                          </span>
                          <div>
                            <strong className="text-[1rem] text-black font-medium dark:text-white">
                              {it.title}
                            </strong>
                            <p className="text-black/60 text-tagline-2 font-normal dark:text-white/60">
                              {it.des}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <!-- About Image --> */}
                  <div className="flex-1 lg:max-w-full sm:max-w-sm sm:mx-auto">
                    <div className="flex relative z-10 items-center justify-center">
                      <figure className="lg:inline-block">
                        <img
                          src={item.content.image}
                          alt="Happy man using phone"
                          className="w-fit object-cover"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
