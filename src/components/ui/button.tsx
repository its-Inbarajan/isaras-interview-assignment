import * as React from "react";
import { cn } from "../../lib/utils";

function Button({
  className,
  children,
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "relative flex items-center gap-1 px-6 py-3 bg-purple-500 text-base group text-center rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all hover:text-black group hover:transition-all duration-700 hover:duration-700",
        className
      )}
    >
      <span className="relative inline-block z-1 transition-all duration-700 font-normal text-center leading-tight text-sm group-hover:-translate-x-3 uppercase">
        {children}
      </span>
      <svg
        className="w-5 absolute fill-white z-10 font-normal transition-all duration-700 -right-1/2 group-hover:right-1/12 "
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16a.999.999 0 01-.707-1.707L11.586 10 7.293 5.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 018 16z" />
      </svg>
    </button>
  );
}

export { Button };
