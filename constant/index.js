export const techStack = [
  {
    id: "React.js",
    imgUrl: "/assets/svgs/react.svg",
    border: false,
  },
  {
    id: "next.js",
    imgUrl: "/assets/svgs/next.svg",
    border: true,
  },
  {
    id: "html",
    imgUrl: "/assets/svgs/html.svg",
    border: false,
  },
  {
    id: "css",
    imgUrl: "/assets/svgs/css.svg",
    border: false,
  },
  {
    id: "tailwindcss",
    imgUrl: "/assets/svgs/tailwindcss.svg",
    border: false,
  },
  {
    id: "javasript",
    imgUrl: "/assets/svgs/js.svg",
    border: false,
  },
  {
    id: "sass",
    imgUrl: "/assets/svgs/sass.svg",
    border: false,
  },
  {
    id: "vue",
    imgUrl: "/assets/svgs/vue.svg",
    border: false,
  },
  {
    id: "laravel",
    imgUrl: "/assets/svgs/laravel.svg",
    border: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "barta",
    subtitle: "P2P currency exchange platform",
    text: "Project Barta is a peer-to-peer platform for fiat-to-crypto and crypto-to-fiat currency conversion, aimed at solving the high-cost challenges faced by many African countries when receiving payments in foreign currencies. It offers a more efficient and affordable alternative to traditional third-party applications that charge high service fees. Barta serves individuals and businesses needing quick and cost-effective currency conversion channels. The project was conceived by a UI/UX designer, and I am developing the frontend as part of my portfolio. Currently, the project is still in progress, with the landing page completed so far.",
    longText: (
      <article>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">Overview:</h3>
        <p className="base-text leading-7 text-color">
          Project Barta is a peer-to-peer fiat-to-crypto and crypto-to-fiat
          currency conversion platform designed to address the challenges faced
          by many African countries when receiving payments in foreign
          currencies. Traditional third-party applications often charge high
          service fees for currency conversion, making it costly for users.
          Barta aims to provide a more efficient and affordable solution for
          individuals and businesses needing quick and cost-effective currency
          conversion channels.
          <br />
          Developed in collaboration with a UI/UX designer who conceived the
          idea, I am currently building the frontend as part of my portfolio.
          The project is still a work in progress, and so far, I have developed
          the landing page.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Technologies Used:
        </h3>
        <ul className="base-text flex flex-col gap-3 leading-7 text-color">
          <li className="list-disc my-1">
            <b>Next.js:</b> Chosen for its advanced capabilities over React,
            providing enhanced features that make development more efficient.
          </li>
          <li className="list-disc my-1">
            <b>Tailwind CSS:</b> Used for its flexibility and powerful utility
            classes, allowing rapid and responsive design.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Project Features:
        </h3>
        <p className="base-text leading-7 text-color">
          The dashboard is designed to display sales history and track sales
          performance. The simplicity of the design belies the technical
          challenges it presented, particularly the analytics section.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Challenges and Solutions:
        </h3>
        <ul className="flex flex-col gap-3 base-text leading-7 text-color">
          <li className="list-disc">
            <b>developing the dashed animated line:</b> This project taught me
            the value of SVGs beyond their lightweight nature, particularly in
            the line animation section, where I used an SVG rectangle to achieve
            more responsive and dynamic styling.
          </li>
          <li className="list-disc">
            <b>Enhancing Animation Skills:</b> Previously hesitant to work with
            animations, this project pushed me to incorporate subtle animations
            and transitions, demonstrating their significant impact on user
            experience. I learned the importance of these details in enhancing
            interactivity and visual appeal.
          </li>
          <li className="list-disc">
            <b>Exploring Linear Gradients and Backdrop Filters:</b> Working on
            Barta introduced me to the powerful aesthetic capabilities of linear
            gradients and backdrop filters. These tools not only enhanced the
            visual design but also boosted my confidence and understanding of
            modern CSS techniques.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          {" "}
          Reflection:
        </h3>
        <p className="base-text leading-7 text-color">
          Though Barta is still in development, the journey so far has been a
          rewarding learning experience, enhancing my animation skills and
          deepening my appreciation for the flexibility of modern frontend
          technologies. This project continues to be an excellent platform for
          refining my technical skills and exploring creative frontend
          solutions.
        </p>
      </article>
    ),
    imgUrl: "/assets/images/barta-desktop.png",
    mobileImgUrl: "/assets/images/barta-mobile.jpeg",
    videoName: "barta_full_video%20(1080p).mp4",
    token: "d13c8fac-f907-4040-8e58-20469022eb7b",
    source: "https://github.com/buberrie/barta",
    link: "https://barta-hzwq.vercel.app/",
    tools: ["React(next.js)", "tailwindCSS", "CSS Animation", "axois"],
  },
  {
    id: 2,
    title: "dashboard",
    subtitle: "A sales dashboard",
    text: "Project Dashboard, was developed for a hackathon challenge, it is a dashboard application designed to help businesses track their sales history and performance. It features a sophisticated analytics section, and a recent orders section structured with HTML tables. This project is Aimed at business owners and sales teams, it addresses the need for a user-friendly interface to monitor and analyze sales data efficiently. Although the project was not submitted, it served as a valuable learning experience, I personally tackled the challenges of building the analytics section, designing the sidebar, and creating the recent orders table, which significantly advanced my frontend development capabilities.",
    longText: (
      <article>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">Overview:</h3>
        <p className="base-text leading-7 text-color">
          This project was developed as part of a hackathon challenge. Despite
          discovering the competition late and missing the submission deadline,
          the project became a valuable learning experience, pushing the
          boundaries of my skills with Next.js and Tailwind CSS, both of which
          were new to me at the time.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Technologies Used:
        </h3>
        <ul className="base-text flex flex-col gap-3 leading-7 text-color">
          <li className="list-disc my-1">
            <b>React.js:</b> I chose React.js to deepen my understanding of the
            framework.
          </li>
          <li className="list-disc my-1">
            <b>Tailwind CSS:</b> Tailwind was another new tool I explored,
            enhancing my styling capabilities.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Project Features:
        </h3>
        <p className="base-text leading-7 text-color">
          The dashboard is designed to display sales history and track sales
          performance. The simplicity of the design belies the technical
          challenges it presented, particularly the analytics section.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          Challenges and Solutions:
        </h3>
        <ul className="flex flex-col gap-3 base-text leading-7 text-color">
          <li className="list-disc">
            <b>Building the Analytics Section:</b> The most challenging aspect
            was the bar chart in the analytics section. At the time, I was
            unfamiliar with libraries like Chart.js, and my instinct was to
            tackle the problem with CSS rather than immediately relying on
            external tools. This approach tested my problem-solving skills and
            allowed me to gain confidence in creating complex designs using CSS
            alone.
          </li>
          <li className="list-disc">
            <b>Designing the Sidebar:</b> This was my first time working on a
            dashboard, and the lack of a mobile design in the provided Figma
            file inspired me to create a unique solution. Instead of a
            traditional hamburger icon, I designed a mini sidebar for mobile,
            which added a touch of originality to the project.
          </li>
          <li className="list-disc">
            <b>Building the Recent Orders Section:</b> I opted to use HTML table
            elements instead of CSS Grid, as I wanted to improve my proficiency
            with tables. This choice brought its own set of challenges, but
            ultimately, it enriched my understanding of structuring data within
            a web application.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-lg text-base">
          {" "}
          Reflection:
        </h3>
        <p className="base-text leading-7 text-color">
          Although I couldn’t submit the project, the process was incredibly
          rewarding. Each challenge, from implementing the charts to refining
          the sidebar, significantly improved my frontend development skills.
          This project not only tested my technical abilities but also
          solidified my confidence in using new tools and techniques in web
          development.
        </p>
      </article>
    ),
    imgUrl: "/assets/images/dashboard-desktop.png",
    mobileImgUrl: "/assets/images/dashboard-mobile.jpeg",
    videoName: "dashboard-video.mp4",
    token: "ece1d28f-9cff-4aa9-936c-6a5730b853aa",
    source: "https://dashboard-buberries-projects.vercel.app",
    link: "https://dashboard-buberries-projects.vercel.app",
    tools: ["React", "tailwindCSS", "CSS Animation"],
  },

  // {
  //   id: 3,
  //   title: "barta",
  //   subtitle: "P2P currency exchange platform",
  //   text: "Select the crypto, payment method and amount you wish to buy or sell. Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team, say which parts that you built. I like to add a video of how it works like the one below so people don't have to sign up if they don't want to.",
  //   imgUrl: "/assets/images/process-3.png",
  //   tools: ["React(next.js)", "tailwindCSS", "CSS Animation", "axois"],
  // },
  // {
  //   id: 4,
  //   title: "barta",
  //   subtitle: "P2P currency exchange platform",
  //   text: "Select the crypto, payment method and amount you wish to buy or sell. Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team, say which parts that you built. I like to add a video of how it works like the one below so people don't have to sign up if they don't want to.",
  //   imgUrl: "/assets/images/process-4.png",
  //   tools: ["React(next.js)", "tailwindCSS", "CSS Animation", "axois"],
  // },
  // {
  //   id: 5,
  //   title: "barta",
  //   subtitle: "P2P currency exchange platform",
  //   text: "Select the crypto, payment method and amount you wish to buy or sell. Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team, say which parts that you built. I like to add a video of how it works like the one below so people don't have to sign up if they don't want to.",
  //   imgUrl: "/assets/images/process-5.png",
  //   tools: ["React(next.js)", "tailwindCSS", "CSS Animation", "axois"],
  // },
];

export const socialIcon = [
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
    icon: (
      <svg
        className="w-full h-full svg-social"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4ZM6 8.5V22H2V8.5H6ZM9 8.5H13V9.34141C13.6256 9.12031 14.2987 9 15 9C18.3137 9 21 11.6863 21 15V22H17V15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15V22H9V15V8.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "twitter",
    link: "https://x.com/gloria_ugwuanyi",
    icon: (
      <svg
        className="w-full h-full svg-social"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.2861 4C13.1822 4 11.4767 5.79086 11.4767 8C11.4767 8.33382 11.5157 8.65809 11.589 8.96808C9.56611 8.96808 6.51914 8.55908 3.97444 6.00961C3.63605 5.67059 3.01208 5.89726 3.03556 6.37567C3.41268 14.0627 6.70477 16.3049 8.4001 16.4444C7.30535 17.5257 5.7151 18.3791 4.11489 18.7622C3.69256 18.8633 3.58824 19.3256 4.0012 19.4599C5.14623 19.8323 6.78516 19.9758 7.66735 20C13.9082 20 18.9806 14.7471 19.0935 8.22229C19.9129 7.68945 20.4377 6.5325 20.7326 5.71291C20.8044 5.5133 20.4773 5.28073 20.2815 5.36226C19.6694 5.61708 18.8923 5.67749 18.2304 5.46181C17.5318 4.56927 16.4722 4 15.2861 4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "github",
    link: "https://github.com/buberrie",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
        className="w-full h-full svg-social">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="currentColor"></path>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    link: "https://wa.me/+2348105961051?text=Hello+Gloria",
    icon: (
      <svg
        className="w-full h-full svg-social"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C10.4724 22 9.0248 21.6575 7.72982 21.045L3.3745 21.7709C2.69951 21.8834 2.11347 21.3 2.22299 20.6245L2.93562 16.229C2.33532 14.9446 2 13.5114 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 14.6749V15.1111C16 15.602 15.602 16 15.1111 16C11.1837 16 7.99997 12.8162 7.99997 8.88889C7.99997 8.39797 8.39794 8 8.88886 8H9.32506C9.8669 8 10.3541 8.32988 10.5554 8.83296L10.742 9.29949C10.9506 9.82105 10.7246 10.4155 10.2222 10.6667C10.2222 10.6667 10.4444 11.7778 11.3333 12.6667C12.2222 13.5556 13.3333 13.7778 13.3333 13.7778C13.5845 13.2753 14.1789 13.0494 14.7005 13.258L15.167 13.4446C15.6701 13.6458 16 14.1331 16 14.6749Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export const testimonials = [
  {
    id: 1,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: "I&apos;m a Front-End Developer I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  },
  {
    id: 2,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  },
  {
    id: 3,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: " I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  },
  {
    id: 4,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  },
  {
    id: 5,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  },
  {
    id: 6,
    testifier : "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony: "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia : {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie"
      }
    }
  }
];