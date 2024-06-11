/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./style";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Services from "./components/Services";
import LatestTechnology from "./components/LatestTechnology";
import { prev, next } from "./assets";
import LatestTechnologyy from "./components/LatestTechnologyy";
import WhyUs from "./components/WhyUs";
import BigSlider from "./components/BigSlider";
import CategorySection from "./components/CategorySection";
import Support from "./components/Support";
import Question from "./components/Question";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Services />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <LatestTechnology />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WhyUs />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BigSlider />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <OurWork />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CategorySection />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Support />
        </div>
      </div>
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Question />
        </div>
      </div>
      <div className={`bg-secondary ${styles.flexCenter} mt-[50px]`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
