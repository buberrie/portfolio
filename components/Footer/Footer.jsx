import { socialIcon } from "@/constant";

export const Footer = () => {
  return (
    <footer className="stick bottom-0 padding-x md:py-3 py-5 bordr-t border-color mt-20 flex md:gap-0 gap-3 md:flex-row flex-col justify-between items-center bg-blur z-50">
      <div className="flex gap-2 items-center contact cursor-pointer">
        <svg
          className="w-[1.2rem] h-[1.2rem]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="underline">oluebubegloria5@gmail.com</span>
      </div>

      <div className="flex gap-4 items-center md:-ml-20">
        {socialIcon.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            key={index}
            className=" border-transparent border hover:border-[0.1rem] transition-all w-[1.5rem] h-[1.5rem] text-color a-social">
            {social.icon}
          </a>
        ))}
      </div>

      <div className="flex gap-2 items-center contact cursor-pointer">
        <svg
          className="w-[1.2rem] h-[1.2rem]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <span className="underline">+2348105961051</span>
      </div>
    </footer>
  );
};
