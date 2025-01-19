import React from "react";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
const profile = () => {
  return (
    <div className=" flex flex-col gap-12 ">
      <div className="flex flex-col gap-3 flex-wrap w-full">
        <h1 className="text-gray-200 font-bold text-4xl ">
          Jamal Mostafa Eahsan
        </h1>
        <h2 className=" text-gray-200 font-thin text-lg">
          Full Stack Developer
        </h2>
        <p className=" font-thin text- text-sm text-gray-400">
          I build accessible, pixel-perfect digital <br /> experiences for the
          web.
        </p>
      </div>
      <div className="flex flex-col gap-4 font-sans">
        <a
          href="#about"
          className="text-gray-400 hover:text-gray-200 text-sm flex flex-row gap-2"
        >
          About
        </a>
        <a
          href="#experience"
          className="text-gray-400 hover:text-gray-200 text-sm"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-gray-400 hover:text-gray-200 text-sm"
        >
          Projects
        </a>
        <a href="#Theses" className="text-gray-400 hover:text-gray-200 text-sm">
          Theses
        </a>
        <a
          href="#achievement"
          className="text-gray-400 hover:text-gray-200 text-sm"
        >
          Achievements
        </a>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JMEO-dev"
        >
          <Github className=" text-gray-400  hover:text-gray-200" />
        </a>
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jamalmostafaeahsan/"
        >
          <Linkedin className=" text-gray-400  hover:text-gray-200" />
        </a>
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/eahsan.ornob29"
        >
          <Facebook className=" text-gray-400 hover:text-gray-200" />
        </a>
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/jmeornob/"
        >
          <Instagram className=" text-gray-400  hover:text-gray-200" />
        </a>
      </div>
    </div>
  );
};

export default profile;
