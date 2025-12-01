import {
  facebook,
  gradient_2,
  gradient_31,
  instagram,
  linkedin,
  t_2_white,
  x,
} from "@/assets/image";
import { Separator } from "./separator";

export default function Footer() {
  const socialMedia = [
    {
      platform: "Facebook",
      icon: facebook,
      link: "https://www.facebook.com/people/I-Saras/61554945903034/",
    },
    {
      platform: "Instagram",
      icon: instagram,
      link: "https://www.instagram.com/i_saras_ai/",
    },
    {
      platform: "X",
      icon: x,
      link: "https://x.com/I_Saras_AI",
    },
    {
      platform: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/company/89921620/admin/feed/posts/",
    },
  ];
  return (
    <footer className="bg-(--color-secondary) dark:bg-(--color-background-8) relative overflow-hidden">
      <figure
        data-ns-animate
        data-delay="0.4"
        data-duration="0.8"
        data-direction="right"
        data-offset="400"
        className="pointer-events-none select-none absolute size-[550px] top-[-17%] md:top-[-25%] xl:top-[-32%] max-[376px]:right-[-83%] right-[-64%] md:right-[-30%] lg:right-[-19%] xl:right-[-9%] bg-top-right rotate-[-30deg]"
      >
        <img
          className="size-full object-cover object-top"
          src={gradient_31}
          alt="Decorative gradient background"
        />
      </figure>
      <figure
        data-ns-animate
        data-delay="0.4"
        data-duration="0.8"
        data-direction="left"
        data-offset="400"
        className="pointer-events-none select-none absolute size-[728px] md:size-[870px] bottom-[-33%] md:bottom-[-60%] xl:bottom-[-77%] left-[-83%] md:left-[-52%] lg:left-[-38%] xl:left-[-30%] 2xl:left-[-22%] min-[2559px]:left-[-16%]!"
      >
        <img
          className="size-full object-bottom"
          src={gradient_2}
          alt="Decorative gradient background"
        />
      </figure>
      <div className="max-w-full mx-auto md:max-w-7xl px-5">
        <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
          <div className="col-span-12 xl:col-span-6">
            <div data-ns-animate data-delay="0.3" className="max-w-[500px]">
              <figure>
                <img src={t_2_white} alt="NextSass Logo" />
              </figure>
              <p className="font-normal text-white/60 mt-4 mb-2">
                Your AI Mentor for UPSC Success.
              </p>
              <p className=" font-normal text-white/60 mt-4 mb-7">
                Learn, practice, and grow smarter with our AI-driven UPSC
                preparation ecosystem — powered by intelligent learning and
                continuous feedback.
              </p>
              <div className="flex items-center relative z-20 gap-3">
                {socialMedia.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    className="hover:-translate-y-2 transition duration-700 ease-in-out"
                  >
                    <span className="sr-only">{item.platform}</span>

                    <img
                      className={item.platform === "X" ? "size-4" : "size-5"}
                      src={item.icon}
                      alt={item.platform}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-x-0 gap-y-8">
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.4" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-(--color-primary-50)">
                  Company
                </p>
                <ul className="sm:space-y-5 space-y-3 text-white">
                  <li>
                    <a href="#home" className="footer-link">
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer-link">
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="footer-link">
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.6" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-(--color-primary-50)">
                  Legal Policies
                </p>
                <ul className="sm:space-y-5 space-y-3 text-white">
                  <li>
                    <a href="#" className="footer-link">
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="pt-[26px] pb-[100px] text-center relative">
          <div className="absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-(--color-stroke-4)/10"></div>
          <p
            data-ns-animate
            data-delay="0.7"
            data-offset="10"
            data-start="top 105%"
            className="font-normal text-(--color-primary-50)"
          >
            © {new Date().getFullYear()} Aramporul Info Tech Pvt.Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
