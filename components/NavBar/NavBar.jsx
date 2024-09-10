"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
    // Set initial state, light mode as default
    const [isDarkMode, setDarkMode] = useState(false);
    const [openNav, setOpenNav] = useState(false);
  
    console.log(openNav);
  
    // Sync with localStorage and update document class on mount
    useEffect(() => {
      // Check if we're on the client side before accessing localStorage
      if (typeof window !== 'undefined') {
        const storedDarkMode = localStorage.getItem('darkMode');
        const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
        setDarkMode(initialDarkMode);
      }
    }, []); // Only run on mount
  
    // Update localStorage and document class when dark mode changes
    useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]); // Run whenever isDarkMode changes
  
    // Toggle dark mode state
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };

  return (
    <nav className="flex-between sticky top-0 padding-x py-2 main-bg z-50">
      {/* logo */}
      <a
        href="/"
        className="md:text-xxl text-lg font-['Subjectivity'] font-bold">
        <span className="linear-text">GU</span>.dev
      </a>

      {/* darkmode toggle larger screen */}
      <div
        className="flex md:hidden md:w-[4rem] w-[3.4rem] linear-bg hover:scale-105 rounded-[3rem] transition-all md:px-[0.35rem] px-[0.3rem] md:py-[0.35rem] py-[0.3rem] cursor-pointer"
        onClick={toggleDarkMode}>
        <div
          className={` rounded-[3rem] p-1 bg-white w-fit relative ${
            isDarkMode ? "left-[1.4rem]" : "left-0"
          } transition-all`}>
          <Image
            src="/assets/svgs/light-mode.svg"
            width={25}
            height={25}
            alt="day mode"
            className={`${
              isDarkMode ? "hidden" : "block"
            } md:w-[1.4rem] w-[0.875rem]`}
          />
          <Image
            src="/assets/svgs/dark-mode.svg"
            width={25}
            height={25}
            alt="night mode"
            className={`${
              isDarkMode ? "block" : "hidden"
            } md:w-[1.4rem] w-[0.875rem]`}
          />
        </div>
      </div>

      {/* hamburger menu */}
      <div
        className=" block md:hidden"
        onClick={() => {
          setOpenNav(true);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-8">
          <path
            d="M5.14291 7.42857H18.8572M5.14062 12H18.8515M5.14291 16.5714H18.8515"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {/* nav items */}
      <ul
        className={`flex justify-center items-center ${
          openNav
            ? " opacity-100 pointer-events-auto"
            : "md:opacity-100 opacity-0 md:pointer-events-auto pointer-events-none md:bg-transparent main-bg"
        } md:flex-row flex-col md:relative absolute right-0 md:gap-10 gap-8 text-[1.05rem] top-0 md:p-0 p-10 rounded-bl-xl transition-all duration-500`}>
        <li
          className="md:hidden block absolute w-full text-end top-6 right-6 font-semibold"
          onClick={() => {
            setOpenNav(false);
          }}>
          X
        </li>
        <li className="nav-li font-semibold hover:text-purple_600 cursor-pointer transition-all md:mt-0 mt-4">
          <a href="#about-me">About</a>
        </li>
        <li className="nav-li font-semibold hover:text-purple_600 cursor-pointer transition-all">
          <a href="#projects">Projects</a>
        </li>
        <li
          className="w-[4rem] md:block hidden linear-bg hover:scale-105 rounded-[3rem] transition-all px-[0.35rem] py-[0.35rem] cursor-pointer"
          onClick={toggleDarkMode}>
          <div
            className={` rounded-[3rem] p-1 bg-white w-fit relative ${
              isDarkMode ? "left-[1.4rem]" : "left-0"
            } transition-all`}>
            <Image
              src="/assets/svgs/light-mode.svg"
              width={25}
              height={25}
              alt="day mode"
              className={`${isDarkMode ? "hidden" : "block"} w-[1.4rem]`}
            />
            <Image
              src="/assets/svgs/dark-mode.svg"
              width={25}
              height={25}
              alt="night mode"
              className={`${isDarkMode ? "block" : "hidden"} w-[1.4rem]`}
            />
          </div>
        </li>
        <li>
          <a href="#contact-me">
            <button className="md:hidden block btn-primary btn">
              Contact Me
            </button>
          </a>
        </li>
      </ul>

      {/* contact button */}
      <a href="#contact-me" className="md:block hidden"><button className=" btn-primary btn">Contact Me</button></a>
    </nav>
  );
};

export default NavBar;
