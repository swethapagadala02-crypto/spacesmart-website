
import { useState } from "react";
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
  <>
    <Navbar openPopup={() => setShowPopup(true)} />

    <Hero openPopup={() => setShowPopup(true)} />

    <About />
    <Services />
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <Achievements />
    <Contact />
    <Footer />

    <WhatsAppButton />

    <Popup
      isOpen={showPopup}
      onClose={() => setShowPopup(false)}
    />
  </>
);
}

export default App;