import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {[
        "home",
        "about",
        "features",
        "how it works",
        "pricing",
        "faq",
        "contact",
      ].map((item) => (
        <div
          id={item}
          key={item}
          className="bg-[#f9fafb] w-full flex items-center text-black h-screen"
        >
          {item}
        </div>
      ))}
    </BrowserRouter>
  );
}

export default App;
