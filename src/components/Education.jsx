/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { Button } from "flowbite-react";
import ButtonSection from "./ButtonSection";
const Education = () => (
  <section className={` mt-[50px]`}>
    <div className="flex flex-col items-center">
      <h1 className={`${styles.heading1} max-sm:my-[20px] my-[30px]`}>
        The latest technology for <br className="max-md:hidden" /> building
        competitive products
      </h1>
      <h3 className={`${styles.heading3} text-center`}>
        Immerse yourself in our Education Section. Empower minds, facilitate
        learning, and shape the future through innovative educational solutions.
      </h3>
    </div>
    <div className="flex flex-col items-center justify-center">
      <ButtonSection styles={"mt-[100px]"} />
    </div>
  </section>
);

export default Education;
