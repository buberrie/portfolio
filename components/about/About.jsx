import { techStack } from "@/constant";
import Image from "next/image";

const About = () => {
  return (
    <section id="about-me" className="padding-x bg-gradient md:pt-20 pt-12 md:pb-16 pb-10 ">
      <div className="text-center md:mb-16 mb-8">
        <h2>About <span className="linear-text">Me</span></h2>
      </div>

      
      <div className=" flex md:flex-row flex-col justify-between items-center w-full flip-parent">
        {/* image */}
        <div className=" flip-card md:w-[40%] w-[100%] items-center flex flex-col">
          <div className=" w-full md:h-[30rem] h-[25rem] rounded-[10px] img_content">
            <div className="w-full h-full img_front ">
              <Image
                src="/assets/images/profile-img.jpeg"
                alt="Gloria Ugwuanyi"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-[10px] "
              />
            </div>
            <div className="w-full h-full img_back flex-center p-10 rounded-[10px] text-bg-img">
              <p className="text-center base-text card-text text-purple_100 leading-7 tracking-wider font-medium">I enjoy coding, but when I’m not busy developing software, you can often find me in the kitchen developing new recipes. On my lazy days, I’m usually relaxing with a good movie.
              </p>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="md:w-[53%] base:w-[55%] w-full base-text md:mt-0 mt-14 ">
          <p className="leading-7 text-color">
            I&apos;m a Front-End Developer who thrives on creating web
            applications that people love to use. I don&apos;t just code, I
            craft – fusing beautiful design with intuitive interfaces that make
            users smile. My secret weapon? A keen eye for usability. Translating
            complex requirements into user-friendly experiences is my
            superpower, and it&apos;s what keeps users engaged and coming back
            for more.
          </p>
          <br />
          <p className="leading-7 flip-cards text-color">
            More than just a design whiz, I&apos;m also a master of efficiency,
            juggling multiple projects with ease. My skills in resource
            allocation and meeting deadlines ensure timely and smooth
            development. And because clear communication is key, I collaborate
            seamlessly with cross-functional teams, translating technical jargon
            into plain English for everyone to understand. The result?
            High-quality, bug-free applications that exceed expectations.
          </p>

          {/* tech stack */}
          <div className="flex flex-wrap md:gap-5 gap-3 mt-10">
            {techStack.map((skill) => (
              <div key={skill.id} className=" rounded-full tool-bg text-purple_100 capitalize">
                {skill.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
