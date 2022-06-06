import React, { useState } from "react";
import LogoMobile from "../svg/logoMobile";
import Logo from "../svg/logo";
import HamburgerMenu from "../svg/hamburgerMenu";
import styles from "./index.module.css";
import IconClose from "../svg/IconClose";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const { navigation, customSidebar, nav, border } = styles;
  const [sidebar, setSidebar] = useState(false);

  const toggleMenu = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {sidebar && (
        <div className={customSidebar}>
          <div className="relative w-full h-24">
            <IconClose mobileMenu={toggleMenu} />
          </div>

          <ul className="text-white ml-8 uppercase">
            <li className="mb-8 flex">
              <span className="font-barlowcondensed font-bold tracking-[2.7px] pr-3">
                00
              </span>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? "border-r-4" : "") + " flex w-full"
                }
              >
                <span className="font-barlowcondensed tracking-[2.7px]">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="mb-8 flex">
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                01
              </span>

              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  (isActive ? "border-r-4" : "") + " flex w-full"
                }
              >
                <span className="font-barlowcondensed tracking-[2.7px]">
                  Destination
                </span>
              </NavLink>
            </li>
            <li className="flex mb-8">
              <span className="pr-3 font-barlowcondensed font-bold tracking-[2.7px]">
                02
              </span>
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  (isActive ? "border-r-4" : "") + " flex w-full"
                }
              >
                <span className="font-barlowcondensed tracking-[2.7px]">
                  Crew
                </span>
              </NavLink>
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
          <Link to="/">
            <Logo />
          </Link>
        </span>
        <span className="block md:hidden">
          <HamburgerMenu mobileMenu={toggleMenu} />
        </span>
        <div className={border}></div>
        <nav className={nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-4" : "")}
          >
            <span className="font-bold 2xl:inline hidden">00</span> Home
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "border-b-4" : "")}
          >
            <span className="font-bold 2xl:inline hidden">01</span> Destination
          </NavLink>
        
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "border-b-4" : "")}
          >
            <span className="font-bold 2xl:inline hidden">02</span> Crew
          </NavLink>

          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "border-b-4" : "")}
          >
            <span className="font-bold 2xl:inline hidden">03</span> Technology
          </NavLink>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
