"use client";

import { projects } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const project = projects.find((p) => p.title === params.id);

  if (!project) {
    return <div>oops!, something went wrong please return to home page</div>;
  }

  return (
    <main className="padding-x">
      <div className="w-full md:h-[35rem] h-[15rem] mt-[1rem]">
        <video
          width="1440"
          height="840"
          controls
          preload="none"
          autoPlay
          muted
          className="w-full h-full">
          <source
            src={`https://firebasestorage.googleapis.com/v0/b/my-blog-3507b.appspot.com/o/${project.videoName}?alt=media&token=ece1d28f-9cff-4aa9-936c-6a5730b853aa`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between w-full"> 
          <h3 className="text-xl mb-6 font-semibold capitalize">
            {project.title}
            <span className=" font-normal text-color-sm text-sm">
              {" "}
              - {project.subtitle}
            </span>
          </h3>
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
        </div>
        {project.longText}
        
      </div>
    </main>
  );
};

export default Page;
