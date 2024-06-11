/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { whyUs } from "../constants";

const WhyCard = ({ id, img, p1, p2 }) => (
  <div className=" flex max-lg:flex-col flex-row rounded-md items-center justify-center">
    <div className="w-[65px] h-[60px] flex flex-row rounded-md mb-3 md:mb-0 md:mr-3">
      <img src={img} alt={id} className="object-contain" />
    </div>
    <div className="flex-1 flex max-md:flex-row flex-col max-lg:ml-0 ml-3 justify-center items-center">
      <p className={`${styles.paragraph}`}>{p1}</p>
      <p className={`${styles.paragraph}`}>{p2}</p>
    </div>
  </div>
);

const WhyUs = () => {
  return (
    <section className={`${styles.paddingX}  my-[50px]`}>
      <div className="flex flex-col items-center">
        <h2 className={`${styles.heading2} text-center mb-[50px]`}>Why Us?</h2>
      </div>
      <div className="flex flex-1 justify-center gap-6 max-lg:flex-col   items-center ">
        {whyUs.map((why) => (
          <WhyCard key={why.id} {...why} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
