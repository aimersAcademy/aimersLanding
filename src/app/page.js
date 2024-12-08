import About from "@/components/about/About";
import Stats from "@/components/about/Stats";
import Contact from "@/components/contact/Contact";
import Courses from "@/components/courses/Courses";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricings/Pricing";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import React from "react";

function page() {
  return (
    <>
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="courses" className="min-h-screen">
        <Courses />
      </section>
      <section id="pricing" className="min-h-screen">
        <Pricing />
      </section>
      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </>
  );
}

export default page;
