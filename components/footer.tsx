import React from "react";
import Image from "next/image";
import technologies from "../public/data/technologies.json"; // Assuming this contains your experiences data

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 px-6 py-6">
      <h1 className=" text-cyan-300 text-lg font-semibold">
        What is in my mind?
      </h1>
      <div className=" flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology, index) => (
          <a
            className=" max-h-8 max-w-12 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={technology.link}
          >
            <Image
              src={technology.images}
              width={500}
              height={500}
              alt={technology.title}
            />
          </a>
        ))}
      </div>

      <p className="text-gray-400 text-xs">
        Loosely designed in{" "}
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          className=" font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com/"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
