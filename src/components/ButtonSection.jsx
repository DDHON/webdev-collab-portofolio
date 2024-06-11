/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ButtonSection = ({ styles }) => (
  <button
    type="button"
    className={`py-[20px] px-[30px] rounded-[8px] font-poppins font-medium text-white bg-primary outline-none flex flex-col items-center justify-center text-[20px] ${styles}`}
  >
    Get Started with WebDev Today
  </button>
);

export default ButtonSection;
