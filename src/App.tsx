import { BrowserRouter } from "react-router-dom";
import "@/App.css";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/pages/hero-section";
import EcoSystemSection from "@/pages/eco-system-section";
import FeaturesSection from "@/pages/features-section";
import HowItsWorkSection from "@/pages/how-its-work-section";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <EcoSystemSection />
      <FeaturesSection />
      <HowItsWorkSection />
    </BrowserRouter>
  );
}

export default App;
