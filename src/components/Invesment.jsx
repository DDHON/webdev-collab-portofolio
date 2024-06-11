/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { Button } from "flowbite-react";
import ButtonSection from "./ButtonSection";
const invesment = () => (
  <section className={`mt-[50px]`}>
    <div className="flex flex-col items-center">
      <h1 className={`${styles.heading1} max-sm:my-[20px] my-[30px]`}>
        Everything you need to grow <br className="max-md:hidden" /> building
        your business
      </h1>
      <h3 className={`${styles.heading3} text-center`}>
        webDev have everything you need to grow your business. Attract clients
        through engaging website or app and simplify your business operations.
      </h3>
    </div>
    <div className="flex flex-col items-center justify-center">
      <ButtonSection styles={"mt-[100px]"} />
    </div>
  </section>
);

export default invesment;
