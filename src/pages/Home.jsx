import React from "react";
// import Navbar from "../Componets/Navbar";
import HeroSection from "../Componets/HeroSection";
import SoftwareCategories from "../Componets/SoftwareCategories";
import ContactForm from "../Componets/ContactForm";
// import Footer from "../Componets/Footer";
import TestimonialsSection from "../Componets/TestimonialsSection";
// import ParallaxBackground from "../Componets/ParallaxBackground";
import FAQSection from "../Componets/FAQSection";
import CallToAction from "../Componets/CallToAction";
import AboutSection from "../Componets/AboutSection";
import OurClients from "../Componets/OurClients";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SoftwareCategories />
      <TestimonialsSection />
      <CallToAction />
      <OurClients />
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default Home;
