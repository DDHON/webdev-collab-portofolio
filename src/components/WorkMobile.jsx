/* eslint-disable no-unused-vars */
// GalleryComponent.jsx
import React from "react";
import { Carousel } from "flowbite-react";
import styles from "../style";
import { potraitSlider, workMobile } from "../constants";
import Slider from "react-slick";
const WorkMobile = () => {
  return (
    <section id="mobile" className={` mb-[50px] max-lg:mb-0`}>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {workMobile.map((mobile, index) => (
          <img
            key={mobile.id}
            src={mobile.img}
            alt={mobile.id}
            className={` w-full ${
              index === workMobile.length - 1
                ? "h-full rounded-lg aspect-[5/3] max-lg:h-[50%] xl:aspect-[5/3] max-lg:row-span-1 row-span-3 max-lg:col-start-1 max-lg:row-start-4 max-lg:col-span-2 max-sm:rotate-180"
                : "h-[260px] rounded-lg aspect-[5/3] md:aspcet-[3/4]  "
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkMobile;
