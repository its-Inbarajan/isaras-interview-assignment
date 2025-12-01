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

function App() {
  return (
    <main>
      <Navbar />
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
    </main>
  );
}

export default App;
