/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../style";
import { services } from "../constants";
const Services = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.paddingX} w-full flex flex-wrap justify-center gap-3  `}
    >
      <h2 className={`${styles.heading2} text-center`}> Services</h2>
      {services.map((service) => (
        <div
          key={service.id}
          className="flex-1 md:w-min-[300px] lg:w-[25%] max-sm:px-[30px] max-lg:px-[20px] px-[12px] py-[50px] rounded-3xl services-card"
        >
          <div className="flex justify-center items-center">
            <img src={service.icon} alt="" className="w-[100px] h-[100px]" />
          </div>
          <h3 className={`${styles.heading3} mt-5 text-center my-5`}>
            {service.title}
          </h3>
          <p className={`${styles.paragraph} mt-5  text-center max-w-[500px]:`}>
            {service.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
