import { Children, createContext } from "react";

export const InfoContext = createContext();

const data = {
  fullName: "Aditya Mallick",
  email: "beingaditya198@gmail.com",
  github: "https://github.com/Ui-Adiii",
  shortDescription:"I’m a full stack developer and B.Tech Computer Science student at C.V. Raman Global University.",
  description:"I specialize in building clean, responsive, and user-centric web applications using modern technologies like React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. With a strong foundation in Data Structures, Algorithms, DBMS, and Operating Systems, I’m always eager to bridge theoretical knowledge with real-world development. I’ve worked on full-stack projects such as e-commerce platforms and blog apps, implementing authentication, RESTful APIs, and interactive UIs. Currently focused on enhancing my design skills and exploring scalable architecture, I’m driven by curiosity, collaboration, and a commitment to continuous learning.",
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
