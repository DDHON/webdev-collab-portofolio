/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-[7px] px-[22px] rounded-[5px] font-poppins font-medium text-white bg-primary outline-none ${styles}`}
    >
      Contact Us
    </button>
  );
};

export default Button;
