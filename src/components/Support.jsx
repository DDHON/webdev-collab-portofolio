/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../style";

const Support = () => (
  <section
    id="support"
    className={`${styles.paddingX} ${styles.marginY} flex md:flex-row flex-col`}
  >
    <div className="flex flex-1 flex-col justify-start">
      <h1 className={`${styles.heading1} text-start max-sm:mb-2 mb-[50px]`}>
        You won't have <br className="max-sm:hidden" /> to do it alone
      </h1>
      <h3
        className={`${styles.heading3} text-start max-w-[500px] max-sm:mb-2 mb-[50px]`}
      >
        We are here to support your business to grow. Contact us for cooperation
        :{")"}
      </h3>
    </div>
    <div className="flex flex-1 flex-col gap-5 justify-start">
      <input
        type="text"
        className="form-input block border-secondary border-[2px] h-[70px] rounded-[5px] w-full placeholder:text-[18px]"
        placeholder="Full Name"
      />
      <input
        type="email"
        className="form-input block border-secondary border-[2px] h-[70px] rounded-[5px] w-full placeholder:text-[18px]"
        placeholder="Email"
      />
      <input
        type="number"
        className="form-input block border-secondary border-[2px] h-[70px] rounded-[5px] w-full placeholder:text-[18px]"
        placeholder="Phone Number"
      />
      <textarea
        className="form-textarea block border-secondary border-[2px] h-[180px] rounded-[5px] w-full placeholder:text-[18px]"
        placeholder="Tell us abou project"
      ></textarea>
      <button
        type="button"
        className="w-full py-[15px] text-[20px] text-white font-medium bg-primary rounded-[5px]"
      >
        Send Massage
      </button>
    </div>
  </section>
);

export default Support;
