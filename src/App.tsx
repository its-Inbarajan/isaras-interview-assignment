import "@/App.css";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/pages/hero-section";
import EcoSystemSection from "@/pages/eco-system-section";
import FeaturesSection from "@/pages/features-section";
import HowItsWorkSection from "@/pages/how-its-work-section";
import Testmonials from "@/pages/testmonials-section";
import PricingSection from "@/pages/pricing-section";
import Faq from "@/pages/faq-section";
import Partner from "@/pages/partner-and-support";
import Contact from "@/pages/contact-section";
import Footer from "@/components/ui/footer";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const mainRef = React.useRef<HTMLDivElement | null>(null);
  const parentContentRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    let smoother: ReturnType<typeof ScrollSmoother.create> | null = null;
    if (!mainRef.current || !parentContentRef.current) return;

    try {
      smoother = ScrollSmoother.create({
        wrapper: mainRef.current,
        content: parentContentRef.current,
        smooth: 1, // How long (in seconds) it takes to "catch up" to the native scroll position.

        effects: true, // Enables data-speed and data-lag attributes for parallax effects.

        smoothTouch: 0.1, // Shorter smoothing time on touch devices.
      });
    } catch (err) {
      console.warn("ScrollSmoother failed to initialize", err);
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <main ref={mainRef} className="smooth-wrapper">
      <Navbar />
      <div ref={parentContentRef}>
        <HeroSection />
        <EcoSystemSection />
        <FeaturesSection />
        <HowItsWorkSection />
        <Testmonials />
        <PricingSection />
        <Faq />
        <Partner />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
