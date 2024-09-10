"use client";

import { techStack } from "@/constant";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { useEffect, useRef } from "react";

const Hero = () => {
  const techStackRef = useRef([]);

  console.log(techStackRef);

  useEffect(() => {
    const totalItems = techStack.length;
    techStackRef.current.forEach((item, index) => {
      if (item) {
        // Calculate the final left position using rem units
        const finalLeft = `calc(${index} * var(--techstack-width) + var(--initial-left) + (${index} * var(--techstack-width) / 1.5))`;
        item.style.setProperty("--final-left", finalLeft);

        // Set the animation delay based on the index
        const delay = `${(totalItems - index - 1) * 0.3}s`;
        const maxDelay = `${(totalItems - 1) * 0.3 + 0.75}s`;
        item.style.animation = `iconAnimation 0.3s ${delay} linear forwards, 
                                spinAround 1s ${maxDelay} linear forwards`;
      }
    });
  }, []);

  return (
      <section className=" padding-x md:pt-24 pt-10 md:pb-20 pb-16 flex justify-between items-center md:flex-row flex-col">
        <div className="md:w-[55%] w-full grid  gap-4 lg:pl-10">
          <span className="font-bold md:justify-start justify-center uppercase tracking-widest md:text-md text-sm flex text-color">
            Hello
            <Image
              src="/assets/images/hello.gif"
              alt="hello"
              width={25}
              height={25}
              className=" base:w-7 base:h-7 w-5 h-5 relative -top-1"
            />
            , I&apos;m Gloria Ugwuanyi.
          </span>
          <h1 className="font-semibold md:text-start text-center md:text-[3rem] base:text-[2.5rem] text-[1.65rem] linear-text">
            <ReactTyped
              strings={["Frontend Web Developer"]}
              typeSpeed={100}
              // loop
              backSpeed={50}
              cursorChar="|"
              showCursor={true}
            />
          </h1>
          <p className="md:leading-7 md:text-start text-center text-color-sm font-medium base-text">
            Solving problems creatively & building dynamic user interfaces with
            React and modern web technologies. Let&apos;s collaborate!{" "}
          </p>

          {/* tech stack */}
          <div className="flex gap-8 items-center md:ml-0 base:ml-5 ml-3 mt-2 relative">
            <div className="pr-3 border-r-2 img-border font-semibold text-color font-subjectivity md:text-md text-sm">
              Tech Stack
            </div>
            <div className="flex gap-6 items-center">
              {techStack.map((stack, index) => (
                <div
                  key={index}
                  className="tech-item"
                  ref={(el) => (techStackRef.current[index] = el)}>
                  <Image
                    src={stack.imgUrl}
                    alt={stack.id}
                    width={30}
                    height={30}
                    className={`${
                      stack.border ? "bg-white p-[1px] rounded-full" : ""
                    } hover:scale-110 transition-all duration-300`}
                    style={{
                      height: "var(--techstack-width)",
                      width: "var(--techstack-width)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* download cv button */}
          <a href="./Gloria Ugwuanyi (resume PDF).pdf" download="./Gloria Ugwuanyi (resume PDF).pdf"><button className="btn-secondary btn md:mt-10 mt-7 w-fit md:mx-0 mx-auto">Download CV</button></a>
        </div>

        {/* hero section image only visible on large screen */}
        <div className="md:w-[28rem] w-0 md:h-[25rem] h-0 md:block hidden flex-center">
          <Image
            src="/assets/images/hero-image.gif"
            alt="Gloria Ugwuanyi"
            width={1000}
            height={1000}
            className="w-full h-full md:block hidden object-contain "
          />
        </div>
      </section>
  );
};

export default Hero;
