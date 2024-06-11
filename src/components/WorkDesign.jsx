// GalleryComponent.jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { potraitSlider, workDesign, workMobile } from "../constants";
const WorkDesign = () => {
  return (
    <section id="design" className={`mb-[50px] max-lg:mb-0`}>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {workDesign.map((design, index) => (
          <img
            key={design.id}
            src={design.img}
            alt={design.id}
            className={` w-full ${
              index === workDesign.length - 1
                ? "h-full rounded-lg aspect-[5/3] max-lg:h-[50%] xl:aspect-[5/3] max-lg:row-span-1 row-span-3 max-lg:col-start-1 max-lg:row-start-4 max-lg:col-span-2 max-sm:rotate-180"
                : "h-[260px] rounded-lg aspect-[5/3] md:aspcet-[3/4]  "
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkDesign;
