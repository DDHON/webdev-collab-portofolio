import { useState } from "react";

import { navLinks } from "../constants";
import { menu } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="w-full flex py-[33px] justify-between items-center navbar">
        <h2 className="font-poppins font-bold text-[35px]">webDev</h2>
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold text-[18px] leading-[22px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-secondary`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white border-[1px] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-secondary `}
                >
                  <a href={`#${nav.id}`}> {nav.title}</a>
                </li>
              ))}
              <Button styles={`mt-4`} />
            </ul>
          </div>
        </div>
        <Button styles={`max-sm:hidden max-lg:inline-block `} />
      </nav>
    </div>
  );
};

export default Navbar;
