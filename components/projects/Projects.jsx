"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(projects[0].id);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 4;

      // Filter refs that are not null
      const topPosition = projectRefs.current
        .filter((ref) => ref !== null)
        .map((ref) => {
          const rect = ref.getBoundingClientRect();
          return rect.top + rect.height / 4 - viewportMiddle;
        });

      if (topPosition.length === 0) return;

      const closestIndex = topPosition.reduce(
        (closestIdx, currPos, idx, arr) => {
          return Math.abs(currPos) < Math.abs(arr[closestIdx])
            ? idx
            : closestIdx;
        },
        0
      );

      setVisibleProject(projects[closestIndex]?.id);
    };

    console.log(visibleProject);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section id="projects" className=" flex md:flex-row flex-col-reverse md:gap-16 gap-4 relative justify-between md:mt-20 mt-6 mb-20 md:items-start ">
      {/* project content/details */}
      <div className="md:w-[49.5rem] w-full bg-blur md:pt-24 pt-8 pb-10 md:pl-8 md:mr-0 mr-4 rounded-tr-[3rem] rounded-br-[3rem] relative">
        <article className="w-full lg:pl-8 lg:pr-16 base:pr-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleProject === project.id ? 1 : 0.25 }}
              transition={{ duration: 0.5 }}
              className={`h-fit pl-6 pr-7 ${
                index !== 0 ? " pt-10 border-t-[0.075rem]" : ""
              } pb-14 border-color`}
              ref={(el) => (projectRefs.current[index] = el)}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale:
                    visibleProject === project.id ? [0.95, 1.025, 1] : 0.95,
                }}
                transition={{ duration: 0.5 }}>
                <h3 className="md:text-xl text-lg mb-6 font-semibold capitalize">
                  {project.title}
                  <span className=" font-normal text-color-sm text-sm">
                    {" "}
                    - {project.subtitle}
                  </span>
                </h3>
                <p className="leading-[2rem] line-clamp-6 text-color">
                  {project.text}
                </p>
                <div className="w-full flex justify-between mt-8 ">
                  <div className="flex gap-8">
                    <Link href={`${project.source}`}>
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[1.8rem] h-[1.8rem] svg-project">
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%">
                          <stop
                            offset="0%"
                            style={{ stopColor: "#b32aee", stopOpacity: "1" }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#676cff", stopOpacity: "1" }}
                          />
                        </linearGradient>
                        <path
                          d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                    <Link href={`${project.link}`}>
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[1.8rem] h-[1.8rem] svg-project">
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%">
                          <stop
                            offset="0%"
                            style={{ stopColor: "#b32aee", stopOpacity: "1" }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#676cff", stopOpacity: "1" }}
                          />
                        </linearGradient>
                        <path
                          d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10 12C10 8.68629 12.6863 6 16 6M16 18C19.3137 18 22 15.3137 22 12C22 10.7733 21.6318 9.63251 21 8.68221"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <Link
                    href={`project/${project.title}`}
                    className="text-[1.1rem] font-semibold cursor-pointer border-b-2 border-transparent hover:border-purple_600 transition-all">
                    see more
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className=" rounded-full px-4 py-2 tool-bg text-white text-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </article>
      </div>

      {/* project images */}
      <div className="md:w-[40.5rem] md:px-0 px-5 w-full md:pt-14 pt-16 md:pb-20 pb-0 sticky md:top-10 -top-6 md:pr-16">
        <h2 className=" md:ml-[2rem] md:text-start text-center md:top-0 -top-6 relative">
          Personal <span className="linear-text">Projects</span>
        </h2>

        {/* image container */}
        {/* desktop display */}
        <motion.div
          className="relative md:top-0 -top-6 md:mt-0 mt-6 md:-left-[5rem] border-[0.25rem] rounded-[1rem] border-color md:h-[21rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Image
            src={
              projects.find((project) => project.id == visibleProject).imgUrl
            }
            alt="project image"
            width={500}
            height={500}
            className="rounded-[0.75rem] w-full h-full object-cover"
          />
        </motion.div>

        {/* mobile display */}
        <motion.div
          className="md:block hidden absolute right-[3rem] -bottom-[1rem] border-[0.25rem] rounded-[1rem] border-color w-[11rem] h-[22rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Image
            src={
              projects.find((project) => project.id == visibleProject).mobileImgUrl
            }
            alt="project image"
            width={500}
            height={500}
            className="rounded-[0.75rem] w-full h-full object-cover"
          />
        </motion.div>
        <div className=" md:block hidden absolute rounded-[50%] w-[30rem] h-[20rem] -left-[8rem] -bottom-[12rem] bg-blur-colored -rotate-12 -z-[2]"></div>
      </div>
    </section>
  );
};
