import "./App.css";
import Hero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import OurProjects from "./components/OurProjects";
import OurReviews from "./components/OurReviews";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />
      <OurProjects/>
      <OurProcess />
      <Pricing />
      <OurReviews />
    </div>
  );
}

export default App;
