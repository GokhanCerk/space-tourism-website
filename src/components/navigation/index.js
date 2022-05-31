import React, { useState } from "react";
import LogoMobile from "../svg/logoMobile";
import Logo from "../svg/logo";
import HamburgerMenu from "../svg/hamburgerMenu";
import styles from "./index.module.css";
import IconClose from "../svg/IconClose";

const Navigation = () => {
  const { navigation, customSidebar } = styles;
  const [sidebar, setSidebar] = useState(false);

  const toggleMenu = () => {
    setSidebar(!sidebar);
  };

  // toDo: GökhanÇ: font barlow bold regular

  return (
    <>
      {sidebar && (
        <div className={customSidebar}>
          <div className="relative w-full h-24">
            <IconClose mobileMenu={toggleMenu} />
          </div>

          <ul className="text-white ml-8 uppercase">
            <li className="py-5 ">
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                00
              </span>
              <a href="#" className="font-barlowcondensed tracking-[2.7px]">
                Home
              </a>
            </li>
            <li>
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                01
              </span>
              <a href="#" className="font-barlowcondensed tracking-[2.7px]">
                Destination
              </a>
            </li>
            <li className="py-5 ">
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                02
              </span>
              <a href="#" className="font-barlowcondensed tracking-[2.7px]">
                Crew
              </a>
            </li>
            <li>
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                03
              </span>
              <a href="#" className="font-barlowcondensed tracking-[2.7px]">
                Technology
              </a>
            </li>
          </ul>
        </div>
      )}

      <section className={navigation}>
        <span className="block md:hidden">
          <LogoMobile />
        </span>
        <span className="hidden md:block">
          <Logo />
        </span>
        <span className="block md:hidden">
          <HamburgerMenu mobileMenu={toggleMenu} />
        </span>
      </section>
    </>
  );
};

export default Navigation;
