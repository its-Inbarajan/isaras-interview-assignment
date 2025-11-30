import { BrowserRouter } from "react-router-dom";
import "@/App.css";
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/pages/hero-section";
import EcoSystemSection from "@/pages/eco-system-section";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <EcoSystemSection />
    </BrowserRouter>
  );
}

export default App;
