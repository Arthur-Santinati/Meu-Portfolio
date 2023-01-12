import React from "react";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { WhyMe } from "../../components/WhyMe";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { Contact } from "../../components/Contact";
import { Social } from "../../components/Social";
import { MyServices } from "../../components/MyServices";

export const Home = () => {

    return (
        <div>
          <Header />
          <Hero />
          <WhyMe />
          <About />
          <MyServices />
          <Contact />
          <Social />
          <Footer />
        </div>
    )
}