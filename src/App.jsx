import Navbar from "./Components/Navbar";
import HeroSection from "./Sections/Hero";
import WhatIDo from "./Sections/WhatIDo";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Quote from "./Sections/Quote";
import AboutMe from "./Sections/AboutMe";
import Contact from "./Sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatIDo />
      <FeaturedProjects />
      <Quote />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
