import { type ReactElement } from "react";
import Header from "src/components/Header";
import Hero from "./components/Hero";
import Planner from "./components/Planner";
import Features from "./components/Features";
import HowWorks from "./components/HowItWorks";
import QualityOverQuantity from "./components/Quality";
import Footer from "src/components/Footer";

const Main = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <Planner />
      <Features />
      <HowWorks />
      <QualityOverQuantity />
      <Footer />
    </>
  );
};

export default Main;
