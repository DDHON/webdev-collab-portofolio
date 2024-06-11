/* eslint-disable no-unused-vars */
// GalleryComponent.jsx
import React from "react";
import { Carousel } from "flowbite-react";
import styles from "../style";
import { useState } from "react";
import WorkDesign from "./WorkDesign";
import WorkMobile from "./WorkMobile";
import WorkWebsite from "./WorkWebsite";
const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mobile");

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case "Mobile":
        return <WorkMobile />;
      case "Design":
        return <WorkDesign />;
      case "Website":
        return <WorkWebsite />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className={`${styles.paddingX} `}>
      <div className="flex flex-col items-center">
        <h2 className={`${styles.heading2} text-center mb-[50px]`}>Why Us?</h2>
      </div>
      <div className="flex flex-row justify-center items-center gap-9 mb-[50px]">
        <button
          type="button"
          onClick={() => setSelectedCategory("Mobile")}
          className={`${styles.paragraph} text-center font-bold ${
            selectedCategory === "Mobile" ? "text-primary" : ""
          }`}
        >
          Mobile
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory("Design")}
          className={`${styles.paragraph} text-center font-bold ${
            selectedCategory === "Design" ? "text-primary" : ""
          }`}
        >
          Design
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory("Website")}
          className={`${styles.paragraph} text-center font-bold ${
            selectedCategory === "Website" ? "text-primary" : ""
          }`}
        >
          Website
        </button>
      </div>

      {/* Tampilkan konten sesuai dengan kategori yang dipilih */}
      {renderSelectedCategory()}
    </section>
  );
};

export default OurWork;
