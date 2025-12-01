import logo from "../../assets/logo-isaras.png";
import mlogo from "../../assets/isaras-bm.svg";
import React from "react";
export default function Navbar() {
  const [show, setShow] = React.useState<boolean>(false);
  const handleToggle = (params: "show" | "hide") => {
    const newShowState = params === "show";
    setShow(newShowState);
    const sidebar = document.querySelector(".sidebar");
    if (params === "show") {
      sidebar?.classList.add("show-sidebar");
      document.body.classList.add("overflow-hidden");
    } else if (params === "hide") {
      sidebar?.classList.remove("show-sidebar");
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleClose = () => {
    handleToggle("hide");
  };

  return (
    <header>
      {/* <div className="fixed inset-x-0 top-6 z-20 mx-auto w-full max-w-screen-3xl  bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 py-3  rounded-full lg:max-w-6xl"> */}
      <div className="fixed inset-x-0 top-6 z-20 mx-auto w-full max-w-screen-3xl py-3 rounded-full lg:max-w-6xl  bg-white/60 bg-clip-padding backdrop-filter  backdrop-blur-xl bg-opacity-0 backdrop-saturate-100 backdrop-contrast-75">
        <div className="lg:px-4 px-2">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#home">
                <span className="sr-only">Home</span>
                <figure className="lg:max-w-[150px] lg:block hidden">
                  <img
                    src={logo}
                    alt="logo"
                    className="object-center block w-full"
                  />
                </figure>
                <figure className="max-w-11 lg:hidden block">
                  <img src={mlogo} alt="logo" className="w-full block" />
                </figure>
              </a>
            </div>
            <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2">
              <ul className="flex items-center">
                {[
                  "home",
                  "features",
                  "how it works",
                  "pricing",
                  "faq",
                  "contact",
                ].map((item) => (
                  <li className="py-2.5">
                    <a
                      key={`nav-${item}`}
                      className="flex items-center gap-1 px-5 py-2 border border-transparent text-black hover:border-gray-500 rounded-full text-sm font-medium hover:text-purple-500 transition-all duration-400 ease-in-out capitalize"
                      href={`#${item.toLowerCase().split(" ").join("")}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center justify-end gap-3">
              <div className="xl:block hidden">
                <button className="relative flex items-center gap-1 px-6 py-3 bg-purple-500 text-base  rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all hover:text-black group hover:transition-all duration-700 hover:duration-700">
                  <span className="relative inline-block z-1 transition-all duration-700 font-normal leading-tight text-sm group-hover:-translate-x-3 uppercase">
                    sign in
                  </span>
                  <svg
                    className="w-5 absolute fill-white z-10 font-normal transition-all duration-700 -right-1/2 group-hover:right-1/12 group-hover:fill-black"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16a.999.999 0 01-.707-1.707L11.586 10 7.293 5.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 018 16z" />
                  </svg>
                </button>
              </div>

              <div className="xl:hidden block">
                <button
                  type="button"
                  onClick={() => handleToggle("show")}
                  className="flex flex-col gap-1 size-12 bg-gray-300 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer"
                >
                  <span className="sr-only">Menu</span>
                  <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                  <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                  <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <aside
          className={
            "sidebar fixed top-0 isolate inset-0 right-0 w-full xl:hidden md:translate-x-full sm:w-1/2 transition-all duration-300 h-screen bg-[#f9fafb] dark:bg-gray-600 z-50"
          }
        >
          <div className="lg:p-9 sm:p-8 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <a href="#">
                <span className="sr-only">Home</span>
                <figure className="max-w-11">
                  <img src={mlogo} alt="" className="w-full" />
                </figure>
              </a>
              <button
                type="button"
                onClick={() => handleToggle("hide")}
                className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative"
              >
                <span className="sr-only">Close Menu</span>
                <span className="block w-4 h-0.5 bg-white dark:bg-black rotate-45 absolute"></span>
                <span className="block w-4 h-0.5 bg-white dark:bg-black -rotate-45 absolute"></span>
              </button>
            </div>
            <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
              <ul>
                {[
                  "home",
                  "features",
                  "how it works",
                  "pricing",
                  "faq",
                  "contact",
                ].map((item) => (
                  <li className="relative space-y-0">
                    <a
                      href={`#${item}`}
                      onClick={handleClose}
                      className="text-tagline-1 font-normal transition-all duration-200 py-3 border-b text-black border-black dark:border-white w-full text-left flex items-center justify-between cursor-pointer uppercase"
                    >
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      )}
    </header>
  );
}
