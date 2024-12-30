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
    text: "Project Barta is a peer-to-peer platform designed for seamless fiat-to-crypto and crypto-to-fiat currency conversions, addressing the high costs associated with receiving foreign payments in many African countries. By offering a more affordable and efficient alternative to traditional third-party applications with exorbitant fees, Barta empowers individuals and businesses with quick, cost-effective currency conversion solutions. Conceived by a UI/UX designer, I am bringing the frontend to life as part of my portfolio. Currently, the project is in progress, with the landing page successfully completed.",
    longText: (
      <article>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">Overview:</h3>
        <p className="base-text leading-7 text-color">
          Project Barta is a peer-to-peer currency conversion platform tailored
          to address the challenges many African countries face when receiving
          payments in foreign currencies. Traditional third-party services often
          impose steep fees, making transactions costly for users. Barta aims to
          disrupt this norm by providing a fast, efficient, and budget-friendly
          alternative for individuals and businesses alike. <br /> Developed in
          collaboration with a UI/UX designer who envisioned the idea, I am
          building the frontend as a showcase of my development expertise. With
          the landing page complete, the project remains a work in progress.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Technologies Used:
        </h3>
        <ul className="base-text flex flex-col gap-3 leading-7 text-color">
          <li className="list-disc my-1">
            <b>Next.js:</b> Leveraged for its advanced capabilities, enabling
            efficient development with server-side rendering and performance
            optimization.
          </li>
          <li className="list-disc my-1">
            <b>Tailwind CSS:</b> Utilized for its utility-first approach, making
            it easy to craft responsive, visually appealing designs quickly.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Project Features:
        </h3>
        <p className="base-text leading-7 text-color">
          The dashboard is designed to provide users with detailed insights into
          sales history and performance metrics. While the design is
          intentionally clean and simple, it required solving intricate
          technical challenges, especially in the analytics section.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Challenges and Solutions:
        </h3>
        <ul className="flex flex-col gap-3 base-text leading-7 text-color">
          <li className="list-disc">
            <b>Crafting an Animated Dashed Line:</b> This project expanded my
            understanding of SVGs, showcasing their versatility in creating
            lightweight yet dynamic animations. I used an SVG rectangle to
            achieve a responsive and visually appealing animated line effect.
          </li>
          <li className="list-disc">
            <b>Improving Animation Techniques:</b> Embracing animations, once a
            challenge for me, became a rewarding experience. I integrated subtle
            transitions and effects that greatly enhanced the overall user
            experience, reinforcing the importance of such details in modern
            design.
          </li>
          <li className="list-disc">
            <b>Mastering Linear Gradients and Backdrop Filters:</b> Working on
            Barta allowed me to explore these powerful CSS tools, adding depth
            and sophistication to the design while strengthening my confidence
            in advanced frontend styling.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">Reflection:</h3>
        <p className="base-text leading-7 text-color">
          Though still in development, Project Barta has been a journey of
          growth and discovery. From improving my animation skills to deepening
          my understanding of modern frontend technologies, this experience has
          been invaluable. It continues to be a creative playground for refining
          my technical expertise and delivering innovative solutions.
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
    text: "Project Dashboard was developed for a hackathon challenge and serves as a comprehensive application for businesses to track sales history and performance. It features a robust analytics section and a recent orders table built with HTML, designed to meet the needs of business owners and sales teams. The project focuses on delivering a user-friendly interface for efficient sales monitoring and analysis. Although the project wasn’t submitted due to a missed deadline, it proved to be a significant learning experience. I personally tackled challenges such as building the analytics section, designing the sidebar, and creating the recent orders table, greatly enhancing my frontend development skills.",
    longText: (
      <article>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Overview:
        </h3>
        <p className="base-text leading-7 text-color">
          Developed for a hackathon challenge, this project aimed to create a
          dashboard application for businesses to efficiently track sales
          history and performance. Despite missing the submission deadline due
          to a late discovery of the competition, the project became a valuable
          learning experience, expanding my skills in Next.js and Tailwind
          CSS—both new tools for me at the time.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Technologies Used:
        </h3>
        <ul className="base-text flex flex-col gap-3 leading-7 text-color">
          <li className="list-disc my-1">
            <b>React.js:</b> Chosen to deepen my understanding of the framework
            and its component-based architecture.
          </li>
          <li className="list-disc my-1">
            
            <b>Tailwind CSS:</b> A new styling tool I explored, which
            significantly improved my ability to create responsive and clean
            designs efficiently.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Project Features:
        </h3>
        <p className="base-text leading-7 text-color">
          The dashboard is designed to display sales history and track sales
          performance. While the design is straightforward, implementing the
          analytics section and recent orders table presented exciting technical
          challenges that helped me grow as a developer.
        </p>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">
          Challenges and Solutions:
        </h3>
        <ul className="flex flex-col gap-3 base-text leading-7 text-color">
          <li className="list-disc">
            <b>Building the Analytics Section:</b> Creating a bar chart in the
            analytics section was challenging due to my lack of experience with
            libraries like Chart.js. Instead of relying on external tools, I
            used CSS to tackle the problem, improving my problem-solving skills
            and building confidence in crafting complex visualizations
            independently.
          </li>
          <li className="list-disc">
            <b>Designing the Sidebar:</b> As my first dashboard project, I faced
            the challenge of creating a responsive design without a mobile
            layout from the provided Figma file. I designed a mini sidebar for
            mobile, replacing the traditional hamburger menu with an original
            and practical solution.
          </li>
          <li className="list-disc">
            <b>Developing the Recent Orders Section:</b> To refine my skills
            with HTML tables, I opted to use table elements rather than CSS
            Grid. This decision introduced its own challenges but ultimately
            enhanced my understanding of how to structure and display tabular
            data effectively.
          </li>
        </ul>
        <h3 className="semibold mt-4 mb-3 md:text-xl text-md">Reflection:</h3>
        <p className="base-text leading-7 text-color">
          Though the project wasn’t submitted, it was an immensely rewarding
          experience. Tackling the analytics section, refining the sidebar, and
          structuring the recent orders table pushed me to grow as a developer.
          This project not only strengthened my technical abilities but also
          solidified my confidence in exploring and applying new tools and
          techniques in web development.
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
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
          fill="currentColor"></path>
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
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      "I&apos;m a Front-End Developer I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
  {
    id: 2,
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
  {
    id: 3,
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      " I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
  {
    id: 4,
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
  {
    id: 5,
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. I don&apos;t just code, I craft – fusing beautiful design with intuitive interfaces that make users smile. My secret weapon? A keen eye for usability.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
  {
    id: 6,
    testifier: "jhon does",
    occupation: "UX/UI designer",
    profilePic: "/assets/images/profile-img.jpeg",
    testimony:
      "I&apos;m a Front-End Developer who thrives on creating web applications that people love to use. My secret weapon? A keen eye for usability. Translating complex requirements into user-friendly experiences is my superpower, and it&apos;s what keeps users engaged and coming back for more.",
    socialMedia: {
      twitter: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
      linkedin: {
        link: "https://www.linkedin.com/in/gloria-ugwuanyi-buberrie",
      },
    },
  },
];
