import { Button } from "@/components/ui/button";
import { InfoContext } from "@/context/Context";
import { Github, Linkedin } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { email, github, linkedin } = useContext(InfoContext);
  return (
    <div className="flex  py-20 md:py-44  max-h-screen text-white flex-col  sm:flex-row gap-10 lg:gap-0">
      <div className="w-full sm:w-1/2 ">
        <h1 className="text-7xl tracking-tighter font-semibold leading-none">
          Let’s connect
        </h1>
        <p className="mt-5 text-lg text-white/40">
          Say hello at{" "}
          <span className="text-white border-b-yellow-200 border-b">
            {email}
          </span>
        </p>
        <p className="text-lg text-white/40">
          For more info, here’s my{" "}
          <a
            className="text-white border-b-yellow-200 border-b"
            href="resume.pdf"
            download
          >
            resume
          </a>
        </p>
        <div className="flex gap-5 mt-4  text-yellow-400">
          <Link to={github}>
            <Github />
          </Link>
          <Link to={linkedin}>
            <Linkedin />
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 ">
    <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="flex flex-col"
>
  <input
    type="hidden"
    name="access_key"
    value="77795928-691c-4b61-8e0e-05837848679e"
  />
  
  <label htmlFor="name">Name</label>
  <input
    name="name"
    required
    type="text"
    id="name"
    className="bg-[#1a1a1a] p-3 rounded-md text-white"
    placeholder="Enter Your Name"
  />

  <label htmlFor="email">Email</label>
  <input
    name="email"
    required
    type="email"
    id="email"
    className="bg-[#1a1a1a] p-3 rounded-md text-white"
    placeholder="Enter Your Email"
  />

  <label htmlFor="subject">Subject</label>
  <input
    name="subject"
    required
    type="text"
    id="subject"
    className="bg-[#1a1a1a] p-3 rounded-md text-white"
    placeholder="Enter the Subject"
  />

  <label htmlFor="message">Message</label>
  <textarea
    name="message"
    required
    id="message"
    rows="5"
    className="bg-[#1a1a1a] p-3 rounded-md text-white"
    placeholder="Enter the message here"
  ></textarea>

  <Button
    type="submit"
    className={'w-fit px-5 py-2 mt-2'}
    variant={'secondary'}
  >
    SUBMIT
  </Button>
</form>

      </div>
    </div>
  );
};

export default Contact;
