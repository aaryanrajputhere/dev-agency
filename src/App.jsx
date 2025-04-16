import "./App.css";
import CallToActionButton from "./components/CallToActionButton";
import Hero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <OurProcess />
      <Pricing />
    </div>
  );
}

export default App;
