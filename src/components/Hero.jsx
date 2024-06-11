/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "../style";
import { arrowDown, arrowUp, heroBanner, imgSlider1 } from "../assets";

const Hero = () => {
  const [showCard, setShowCard] = useState(false);
  const toggleShowCard = () => {
    setShowCard(!showCard);
  };
  return (
    <section
      id="home"
      className={` ${styles.paddingX} flex flex-col items-center justify-center `}
    >
      <div className="flex flex-col items-center">
        <h3
          className={`${styles.heading3} font-poppins text-[20px] text-center px-3 py-2 text-white bg-secondary rounded-[5px] `}
        >
          webDev
        </h3>
        <h1
          className={`${styles.heading1} max-sm:my-[20px] my-[30px]  max-w-[755px] `}
        >
          Build or scale up your <br /> development team
        </h1>
        <h3 className={`${styles.heading3} text-center`}>
          We choose scalable and flexible technologies. The engineering mindset{" "}
          <br />
          our talents have already solved the challenges of 200+ clients.
        </h3>
      </div>
      <div className="flex flex-col items-center  ">
        <img
          src={showCard ? arrowUp : arrowDown}
          alt="arrow"
          className={`cursor-pointer max-sm:w-[15px] w-[30px]  max-sm:h-[15px] h-[30px] z-[5]`}
          onClick={toggleShowCard}
        />
      </div>
      {showCard && (
        <div className="w-full max-sm:h-[130px] h-[225px] bg-[#f1f1f1] max-sm:mt-[-7.5px] mt-[-15px] rounded-[10px]">
          <h3
            className={`${styles.heading3} max-sm:mt-[20px] mt-[50px]  max-sm:mb-[8px] mb-[20px] text-center`}
          >
            Who We Are?
          </h3>
          <p className={`${styles.paragraphCard} text-center`}>
            <b>webDev</b> is a professional Jogja IT company with Android and
            IOS / Mobile App development services and also helps{" "}
            <br className="sm:hidden" /> digitize your business from digital
            planning to digital business promotion
          </p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <img src={heroBanner} alt="slider" className="mt-[30px]" />
      </div>
    </section>
  );
};

export default Hero;
