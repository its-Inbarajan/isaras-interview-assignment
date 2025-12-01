import React from "react";
import gsap from "gsap";
const useHeroAnimation = ({
  heroContentRef,
}: {
  heroContentRef: React.RefObject<HTMLDivElement | null>;
}) => {
  React.useEffect(() => {
    if (!heroContentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate badge from bottom with blur
      tl.from(
        "[data-hero='badge']",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      // Animate h1 from bottom with blur
      tl.from(
        "[data-hero='heading']",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        0.2
      );

      // Animate paragraph from bottom with blur
      tl.from(
        "[data-hero='description']",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        0.4
      );

      // Animate first button from left
      tl.from(
        "[data-hero='button-1']",
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.6
      );

      // Animate second button from left with delay
      tl.from(
        "[data-hero='button-2']",
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.8
      );

      // Animate dashboard image from bottom
      tl.from(
        "[data-hero='dashboard']",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        1
      );

      // Animate features list from bottom
      tl.from(
        "[data-hero='features'] li",
        {
          y: 30,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        1.2
      );
    }, heroContentRef);

    return () => ctx.revert();
  }, [heroContentRef]);
};

export default useHeroAnimation;
