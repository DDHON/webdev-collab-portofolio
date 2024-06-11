/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { Button } from "flowbite-react";
import ButtonSection from "./ButtonSection";
const Ecommerce = () => (
  <section className={` mt-[50px]`}>
    <div className="flex flex-col items-center">
      <h1 className={`${styles.heading1} max-sm:my-[20px] my-[30px]`}>
        Discover the latest products with <br className="max-md:hidden" /> ease
        and security.
      </h1>
      <h3 className={`${styles.heading3} text-center`}>
        Unsure how to lead development forward? Your future team will guide you
        to the most optimal software solutions and strategies.
      </h3>
    </div>
    <div className="flex flex-col items-center justify-center">
      <ButtonSection styles={"mt-[100px]"} />
    </div>
  </section>
);

export default Ecommerce;
