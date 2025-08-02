import { Children, createContext } from "react";

export const InfoContext = createContext();

const data = {
  fullName: "Aditya Mallick",
  email: "beingaditya198@gmail.com",
  github: "https://github.com/Ui-Adiii",
  shortDescription:"I’m a full stack developer and a B.Tech student in Computer Science at C.V. Raman Global University.",
  description:"I’m a full stack developer and B.Tech Computer Science student at C.V. Raman Global University, passionate about building accessible, user-friendly websites, exploring Next.js and design, and always eager to grow as a developer.",
  linkedin: "https://www.linkedin.com/in/aditya-mallick-",
  skills: [
    "Html",
    "Css",
    "JS",
    "React JS",
    "Node JS",
    "Express JS",
    "Mongo Db",
    "Java",
    "C",
    "MySql",
    "Git",
    "Github",
    "Tailwind Css",
    "Redux",
    "Oop",
    "Shadcn Ui",
    "BootStrap"
  ],
  experiences: [
    {
      role: "Frontend Devloper",
      time: "May 2025-June 2025",
      companyName: "HARISIDDHI TECHNOLOGY PVT LTD.",
      description:
        "I worked as a Frontend Intern at a private limited company, where I focused on building responsive and user-friendly web interfaces using React.js, Tailwind CSS, and other modern frontend technologies. During my internship, I developed reusable components, optimized UI performance, and collaborated with design and backend teams to deliver seamless user experiences.",
    },
  ],
  projects: [
    {
      title: "Full-Stack E-Commerce Platform",
      number: 1,
      description:
        "Full-Stack E-Commerce Platform is a comprehensive and modern e-commerce solution designed to deliver a seamless shopping experience for users and robust management tools for administrators. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform showcases full-stack development skills and real-world application of modern web technologies",
      projectInfo: {
        year: 2025,
        role: "Front-end Developer",
      },
      teckStack:['react js','node js','express js','tailwind','flow-bite'],
      links: {
        liveDemo: "https://frontend-ecommerce-gamma-beryl.vercel.app",
        github: "https://github.com/Ui-Adiii/Ecommerce",
      },
    },
    {
      title: "Full-Stack Blog App",
      number: 2,
      description:
        "A modern full-stack blogging platform built with MongoDB, Express.js, React.js, and Node.js. It features secure authentication (JWT & OAuth), rich post creation with image uploads, real-time comments, user/admin dashboards, and a clean UI for writing and reading blogs.",
      projectInfo: {
        year: 2025,
        role: "Full Stack Developer",
      },
      teckStack:['react js','node js','express js','tailwind','mongodb','shadcn ui'],
      links: {
        liveDemo: "https://frontend-blog-rho.vercel.app/",
        github: "https://github.com/Ui-Adiii/Blog-App",
      },
    },
  ],
};

const ContextProvider = ({ children }) => {
  return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>;
};
export default ContextProvider;
