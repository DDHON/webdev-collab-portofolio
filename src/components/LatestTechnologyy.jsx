/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import styles from "../style";
import { technology } from "../constants";
import { next, prev } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row py-[30px] px-[40px] rounded-2xl bg-primary ml-3
      }`}
  >
    <div className="w-[60px] h-[60px] rounded-full flex flex-row mt-3 justify-start">
      <img src={icon} alt="icon" className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h3 className={`${styles.heading3} text-white`}>{title}</h3>
      <p className={`${styles.paragraph} text-white`}>{content} </p>
    </div>
  </div>
);

const LatestTechnologyy = () => {
  const sliderRef = useRef(null);

  const nexts = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={`${styles.paddingX} mt-[-50px]`}>
      <div className="flex flex-col items-center">
        <h1 className={`${styles.heading1} max-sm:my-[20px] my-[30px]`}>
          The latest technology for <br className="max-md:hidden" /> building
          competitive products
        </h1>
        <h3 className={`${styles.heading3} text-center`}>
          Unsure how to lead development forward? Your future team will guide
          you to the most optimal software solutions and strategies.
        </h3>
        <h2 className={`${styles.heading2} text-center my-7`}>
          Future technologies
        </h2>
      </div>
      <div className=" flex flex-col justify-center">
        <Slider ref={sliderRef} {...settings}>
          {technology.map((tech, index) => (
            <TechCard key={tech.id} {...tech} index={index} />
          ))}
        </Slider>
      </div>
      {/* ... tombol untuk navigasi carousel */}
      <div className="flex justify-center mt-3 gap-6">
        <img src={prev} alt="" onClick={previous} />
        <img src={next} alt="" onClick={nexts} />
      </div>
    </section>
  );
};

export default LatestTechnologyy;
