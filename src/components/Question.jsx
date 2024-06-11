/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../style";
import { PlusQuestion } from "../assets";

const Question = () => (
  <section id="question" className={`${styles.paddingX}`}>
    <div className="flex flex-col">
      <h2 className={`${styles.heading2} text-center mb-[50px]`}>
        Have Question?
      </h2>
      <div className="flex flex-row justify-between items-center border-t-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>01.</h3>
          <h3 className={`${styles.heading3} `}>
            how much does it cost for the application?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-t-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>02.</h3>
          <h3 className={`${styles.heading3} `}>
            how long does it take to make the app?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-t-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>03.</h3>
          <h3 className={`${styles.heading3} `}>
            Why make mobile apps expensive?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-t-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>04.</h3>
          <h3 className={`${styles.heading3} `}>
            How much does it cost to build a website?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-t-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>05.</h3>
          <h3 className={`${styles.heading3} `}>
            What is the difference between UI and UX?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center border-t-2 border-b-2  border-secondary">
        <div className="text-start ">
          <h3 className={`${styles.heading3} text-primary`}>06.</h3>
          <h3 className={`${styles.heading3} `}>
            Why is interface design important?
          </h3>
        </div>
        <div>
          <img src={PlusQuestion} alt="" className="object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default Question;
