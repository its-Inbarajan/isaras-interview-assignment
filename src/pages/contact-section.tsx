import type { Contact } from "@/@types/types";
import { mail, phone } from "@/assets/image";

export default function Contact() {
  const contact: Contact[] = [
    {
      text: "+91 78455 50250",
      icon: phone,
      type: "phone",
    },
    {
      text: "contact@isaras.ai",
      icon: mail,
      type: "mail",
    },
  ];
  return (
    <section
      id="contact"
      className="py-[50px] md:py-20 lg:py-28 md:px-6 px-4 dark:bg-(--color-background-6) bg-white"
      aria-label="cta"
    >
      <div className="max-w-full mx-auto md:max-w-7xl">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <div className="space-y-3">
              <h2
                data-ns-animate
                data-delay="0.4"
                className=" dark:text-gray-900 tracking-wider md:text-4xl font-semibold text-2xl text-(--text-heading-5) sm:text-(--text-heading-4) lg:text-(--text-heading-3)"
              >
                Build your future with
                <span className="text-(--color-primary-500)">I, Saras</span>
              </h2>
              <p
                data-ns-animate
                data-delay="0.5"
                className="mb-3 text-gray-500 tracking-wide text-sm"
              >
                Join thousands of aspirants learning smarter with their personal
                UPSC mentor
              </p>
              <p
                data-ns-animate
                data-delay="0.5"
                className="mb-3 text-gray-500 tracking-wide text-sm"
              >
                Start your free trial today — clarify doubts, practice PYQs, and
                master every subject with intelligent guidance.
              </p>
              <h2
                data-ns-animate
                data-delay="0.4"
                className=" dark:text-gray-900 font-medium text-(--text-heading-3) md:text-4xl text-2xl sm:text-(--text-heading-4) lg:text-(--text-heading-4) mb-2"
              >
                Contact Us at
              </h2>
              <p
                data-ns-animate
                data-delay="0.5"
                className="mb-5 text-gray-500 tracking-wide text-sm"
              >
                For any queries or support, feel free to connect with us — we’re
                just a message away.
              </p>
              <ul className="flex flex-col md:flex-row items-center justify-center gap-y-4 sm:gap-x-6 sm:gap-y-0 lg:justify-start">
                {contact.map((item) => (
                  <li
                    key={`contact-${item.type}`}
                    data-ns-animate
                    data-delay="0.7"
                    className="flex items-center justify-center gap-2"
                  >
                    <figure className="size-5 overflow-hidden mx-auto">
                      <img
                        src={item.icon}
                        alt="Phone icon"
                        className="size-full object-cover"
                      />
                    </figure>
                    <a
                      href={
                        item.type === "mail"
                          ? `mailto:${item.text}`
                          : `tel:${item.text}`
                      }
                      className="text-(--text-heading-5) md:text-(--text-heading-6)"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-10 lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
            >
              <input
                type="email"
                name="email"
                id="userEmail-cta-v1"
                placeholder="Enter your email"
                required
                className="px-[18px] shadow-1 h-12 py-3 placeholder:/50 rounded-full border border-(--color-stroke-1) lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-(--color-stroke-7) dark:placeholder:text-gray-900/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-gray-900 placeholder:font-normal font-normal"
              />
              <button
                type={"button"}
                className={
                  "relative flex items-center gap-1 px-6 py-3 bg-purple-500 hover:bg-black hover:text-white text-base group text-center rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all group hover:transition-all duration-700 hover:duration-700"
                }
              >
                <span className="relative inline-block z-1 transition-all duration-700 font-normal leading-tight text-sm group-hover:-translate-x-3">
                  Get Started
                </span>
                <svg
                  className="w-5 absolute fill-white z-10 font-normal transition-all duration-700 -right-1/2 group-hover:right-1/12 "
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16a.999.999 0 01-.707-1.707L11.586 10 7.293 5.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 018 16z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
