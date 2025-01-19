import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full min-h-screen gap-6 px-6">
      <div className=" text-base text-slate-300">
        Software Engineer skilled in backend development, specializing in
        Node.js, React, and Next.js. Proven expertise in building secure,
        scalable applications across e-commerce, tracking, and event management.
        Known for optimizing server logic, creating efficient APIs, and
        implementing user-friendly designs. Graduated with a B.Sc. in Computer
        Science and Engineering from{" "}
        <a
          className=" font-semibold text-cyan-600"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ewubd.edu/"
        >
          East West University, Dhaka
        </a>
        . Passionate about leveraging technology to solve real-world challenges
        and deliver impactful solutions. Open to new opportunities to drive
        innovation and improve user experiences.
      </div>
    </div>
  );
};

export default About;
