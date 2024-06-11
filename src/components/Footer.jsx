/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";
import { footerCall, footerMedia, footerNav } from "../constants";
import { media } from "../assets";

const Footer = () => (
  <section id="footer" className="">
    <div className="bg-primary pt-[15px] mb-4">
      <div className="bg-secondary h-full pt-[100px] text-white text-center justify-center">
        <h2
          className={`${styles.heading2} text-white text-center justify-center mb-[20px]`}
        >
          webDev
        </h2>
        <p
          className={`${styles.paragraph} text-center text-white justify-center `}
        >
          Design amazing product experiences that <br /> create more happy in
          the world
        </p>
        <div className="mt-[50px] flex flex-row  justify-center gap-5">
          {footerCall.map((call) => (
            <div
              key={call.id}
              className="flex flex-row gap-4 justify-center items-center"
            >
              <img key={call.id} src={call.img} alt="" className=" ml-2" />
              <p className={`${styles.paragraph} text-white`}>{call.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-[50px] flex flex-row gap-5 justify-center pb-[100px] ">
          {footerNav.map((footnav) => (
            <div key={footnav.id} className="flex flex-row">
              <p
                key={footnav.id}
                className={`${styles.paragraph} text-white font-bold`}
              >
                {footnav.content}
              </p>
            </div>
          ))}
        </div>
        <div className="px-16 pt-[50px] flex flex-row flex-1 justify-between items-center border-t-2 border-[#444444] mb-[50px]">
          <p className={`${styles.paragraph} text-white`}>
            2023 webDev. All rights reserved{" "}
          </p>
          <div className="flex flex-row gap-4 ">
            {footerMedia.map((media) => (
              <img
                key={media.id}
                src={media.content}
                alt=""
                className="object-contain w-[25px] h-[25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
