import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LandingPage() {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 8,
      smooth: true,
      smoothTouch: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Client />
      <Testimonial /> 
      <Footer />
    </>
  );
}
