import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Progress from "../../components/Progress";
import Stat from "../../components/Stat";
import Studying from "../../components/Studying";
import HowItWorks from "../../components/HowItWorks";
import AiDayPlanning from "../../components/AiDayPlanning";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import NextStudy from "../../components/NextStudy";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      
      <Hero />
      <Progress />
      <Stat />
      <Studying />
      <HowItWorks />
      <AiDayPlanning />
      <Pricing />
      <FAQ />
      <NextStudy />
    
    </div>
  );
};

export default HomePage;
