import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Service from "../components/sections/Service";
import Testimonials from "../components/sections/Testimonials";
// import Blog from "../components/sections/Blog";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Service />
      <Testimonials />
      {/* <Blog /> */}
    </>
  );
};

export default HomePage;
