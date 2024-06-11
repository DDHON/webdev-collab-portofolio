/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { ecommerce, food, invesment, education } from "../assets";
import { useState } from "react";
import styles from "../style";
import Slider from "react-slick";
import Ecommerce from "./Ecommerce";
import Food from "./Food";
import Invesment from "./Invesment";
import Education from "./Education";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("invesment");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section
      className={`${styles.paddingX} max-md:mt-[-100px] flex  flex-col items-center justify-center gap-8`}
    >
      <div className="flex flex-row items-center justify-center gap-8">
        <button onClick={() => handleCategoryClick("invesment")}>
          <img src={invesment} alt="" />
        </button>
        <button onClick={() => handleCategoryClick("food")}>
          <img src={food} alt="" />
        </button>
        <button onClick={() => handleCategoryClick("ecommerce")}>
          <img src={ecommerce} alt="" />
        </button>
        <button onClick={() => handleCategoryClick("education")}>
          <img src={education} alt="" />
        </button>
      </div>
      <div>
        {selectedCategory === "invesment" && <Invesment />}
        {selectedCategory === "food" && <Food />}
        {selectedCategory === "ecommerce" && <Ecommerce />}
        {selectedCategory === "education" && <Education />}
      </div>
    </section>
  );
};
export default CategorySection;
