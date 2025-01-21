"use client";

import React, { useEffect, useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Profile = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set the initial hash when the component mounts
    setCurrentHash(window.location.hash.slice(1));

    // Update the hash dynamically when it changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const links = [
    { id: "about", href: "#about", label: "About" },
    { id: "experience", href: "#experience", label: "Experience" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "thesis", href: "#thesis", label: "Thesis" },
    { id: "achievement", href: "#achievement", label: "Achievements" },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Profile Info */}
      <div className="flex flex-col gap-3 flex-wrap w-full">
        <h1 className="text-gray-200 font-bold text-4xl">
          Jamal Mostafa Eahsan
        </h1>
        <h2 className="text-gray-200 font-thin text-lg">Full Stack Developer</h2>
        <p className="font-thin text-sm text-gray-400">
        I build accessible, pixel-perfect digital experiences for the web and develop robust, scalable backend APIs for seamless system communication.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-4 font-sans">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`text-sm flex flex-row gap-2 cursor-pointer ${
              currentHash === link.id
                ? "text-gray-200"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex flex-row gap-4 w-full">
        <a
          className="font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JMEO-dev"
        >
          <Github className="text-gray-400 hover:text-gray-200" />
        </a>
        <a
          className="font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jamalmostafaeahsan/"
        >
          <Linkedin className="text-gray-400 hover:text-gray-200" />
        </a>
        <a
          className="font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/eahsan.ornob29"
        >
          <Facebook className="text-gray-400 hover:text-gray-200" />
        </a>
        <a
          className="font-semibold text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/jmeornob/"
        >
          <Instagram className="text-gray-400 hover:text-gray-200" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
