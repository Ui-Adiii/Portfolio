import { Children, createContext } from "react";

export const InfoContext = createContext();

const data = {
  fullName: "Aditya Mallick",
  email: "beingaditya198@gmail.com",
  github: "https://github.com/Ui-Adiii",
  shortDescription:
    "I’m a full stack developer and B.Tech Computer Science student at C.V. Raman Global University.",
  description:
    "I specialize in building clean, responsive, and user-centric web applications using modern technologies like React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. With a strong foundation in Data Structures, Algorithms, DBMS, and Operating Systems, I’m always eager to bridge theoretical knowledge with real-world development. I’ve worked on full-stack projects such as e-commerce platforms and blog apps, implementing authentication, RESTful APIs, and interactive UIs. Currently focused on enhancing my design skills and exploring scalable architecture, I’m driven by curiosity, collaboration, and a commitment to continuous learning.",
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
    "BootStrap",
  ],
  experiences: [
    {
      role: "Full Stack Devloper",
      time: "June 2025-June 2025",
      companyName: "MINDBRAIN INNOVATIONS PVT. LTD.",
      description:
        "I worked as a Full Stack Development Intern at MindBrain Innovations Pvt. Ltd., where I focused on building full-stack web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. During the internship, I developed responsive user interfaces, implemented server-side logic, integrated RESTful APIs, and performed database operations. I also collaborated with mentors and teammates to solve real-world development challenges, gaining hands-on experience with modern web technologies and best practices in full stack development.",
    },
  ],
  certificates: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2025",
      link: "https://freecodecamp.org/certification/fcc-9636e7de-ba0d-4e9f-92c4-c1fbab8678ba/responsive-web-design",
      image: "Certificate1.png",
    },
    {
      title: "HTML, CSS and JS",
      issuer: "Udemy",
      date: "August 2025",
      link: "https://www.udemy.com/certificate/UC-fc67f7af-2342-47f4-b0e8-a878a0bcc57a",
      image: "Certificate2.jpg",
    },
    {
      title: "Complete Linux Training",
      issuer: "Udemy",
      date: "Oct 2024",
      link: "https://www.udemy.com/certificate/UC-3c60c6c2-8205-45b6-bb79-99bc8766e792",
      image: "Certificate3.png",
    },
    {
      title: "Problem Solving with C",
      issuer: "Udemy",
      date: "Oct 2024",
      link: "https://www.udemy.com/certificate/UC-d80f6d43-2baa-48ce-b1bf-0b776f7999c0",
      image: "Certificate4.png",
    },
    {
      title: "Python for Complete Beginner",
      issuer: "Udemy",
      date: "Oct 2024",
      link: "https://www.udemy.com/certificate/UC-4b2c6ead-0d43-48b7-9b20-d8f525caa49a",
      image: "Certificate5.png",
    },
    {
      title: "The Complete MySQL Bootcamp: Go from Beginner to Expert",
      issuer: "Udemy",
      date: "Jul 2025",
      link: "https://www.udemy.com/certificate/UC-25bd9d30-0727-48dd-a5d3-0b4124fa31af",
      image: "Certificate6.png",
    },
    {
      title: "Git, Github and Md",
      issuer: "Udemy",
      date: "Aug 2025",
      link: "https://www.udemy.com/certificate/UC-5462d415-2978-4b2a-9231-5896a7535e43",
      image: "Certificate7.png",
    },
    {
      title: "Java for Beginners",
      issuer: "Udemy",
      date: "Aug 2025",
      link: "https://www.udemy.com/certificate/UC-71acebc6-85df-49c1-98d5-a1508a421b7d",
      image: "Certificate8.png",
    },
  ],
  projects: [
    {
      title: "Full-Stack E-Commerce Platform",
      image: "Project1.png",
      description:
        "Full-Stack E-Commerce Platform is a comprehensive and modern e-commerce solution designed to deliver a seamless shopping experience for users and robust management tools for administrators. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform showcases full-stack development skills and real-world application of modern web technologies",
      projectInfo: {
        year: 2025,
        role: "Front-end Developer",
      },
      teckStack: [
        "react js",
        "node js",
        "express js",
        "mongodb",
        "tailwind",
        "flow-bite",
      ],
      links: {
        liveDemo: "https://frontend-ecommerce-gamma-beryl.vercel.app",
        github: "https://github.com/Ui-Adiii/Ecommerce",
      },
    },
    {
      title: "Full-Stack Blog App",
      image: "Project2.png",
      description:
        "A modern full-stack blogging platform built with MongoDB, Express.js, React.js, and Node.js. It features secure authentication (JWT & OAuth), rich post creation with image uploads, real-time comments, user/admin dashboards, and a clean UI for writing and reading blogs.",
      projectInfo: {
        year: 2025,
        role: "Full Stack Developer",
      },
      teckStack: [
        "react js",
        "node js",
        "express js",
        "mongodb",
        "tailwind",
        "shadcn ui",
      ],
      links: {
        liveDemo: "https://frontend-blog-rho.vercel.app",
        github: "https://github.com/Ui-Adiii/Blog-App",
      },
    },
    {
      title: "Employee Management System (EMS)",
      image: "Project3.png",
      description:
        "A full-stack Employee Management System built with Next.js, React, Redux Toolkit, and MongoDB. It features secure authentication with JWT, role-based access (Admin & Employee), admin-exclusive employee creation, task assignment with real-time status tracking, personalized dashboards, and a modern responsive UI with Tailwind CSS and toast notifications.",
      projectInfo: {
        year: 2025,
        role: "Full Stack Developer",
      },
      teckStack: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "React Toastify",
      ],
      links: {
        liveDemo: "https://ems-nine-xi.vercel.app",
        github: "https://github.com/Ui-Adiii/EMS",
      },
    },
    {
      title: "Full-Stack Todo App",
      image: "Project4.png",
      description:
        "A modern full-stack Todo Application built with Next.js 15, React 19, and MongoDB — featuring secure authentication (JWT), real-time task management, progress tracking, and a responsive UI with Tailwind CSS.",
      projectInfo: {
        year: 2025,
        role: "Full Stack Developer",
      },
      teckStack: ["next js", "mongodb", "tailwind"],
      links: {
        liveDemo: "https://todo-app-rho-ten-53.vercel.app",
        github: "https://github.com/Ui-Adiii/Todo-App",
      },
    },
  ],
};

const ContextProvider = ({ children }) => {
  return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>;
};
export default ContextProvider;
