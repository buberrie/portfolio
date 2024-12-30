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
                src="/assets/images/profile-img.jpg"
                alt="Gloria Ugwuanyi"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-[10px] "
              />
            </div>
            <div className="w-full h-full img_back flex-center p-10 rounded-[10px] text-bg-img border border-red-500">
              <p className="text-center base-text card-text text-purple_100 leading-7 tracking-wider font-medium">I enjoy coding, but when I’m not busy developing software, you can often find me in the kitchen developing new recipes. On my lazy days, I’m usually relaxing with a good movie.
              </p>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="md:w-[53%] base:w-[55%] w-full base-text md:mt-0 mt-14 ">
        <p className="leading-7 text-color"> I’m a Front-End Developer passionate about building web applications that not only look great but work seamlessly. I combine clean, modern design with user-focused functionality to create interfaces that feel effortless. My strength lies in turning complex ideas into simple, intuitive experiences that keep users engaged and coming back. </p> <br /> <p className="leading-7 flip-cards text-color"> Beyond crafting elegant designs, I excel at delivering efficient, reliable solutions. Whether managing tight deadlines or collaborating with cross-functional teams, I thrive on turning challenges into results. With a sharp eye for detail and clear communication, I ensure every project runs smoothly and exceeds expectations—because great apps don’t just happen; they’re built with purpose. </p>

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
