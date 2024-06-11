/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../style";

import { bigSlider } from "../constants";
import { Carousel } from "flowbite-react";

import { next } from "../assets";
const BigSlider = () => {
  return (
    <section id="bigslider" className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="max-md:h-[112px] h-[300px] w-full ">
        <Carousel slide={false}>
          {bigSlider.map((slider) => (
            <div key={slider.id}>
              <img
                src={slider.img}
                alt=""
                className="max-md:h-[112px] h-[300px] w-full rounded-[5px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BigSlider;
