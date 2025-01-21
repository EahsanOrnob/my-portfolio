
"use client";

import Profile from "@/components/profile";
import About from "@/components/about";
import Achievement from "@/components/achievement";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Theses from "@/components/thesis";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full ">
      {/* Profile Section */}
      <div className="flex max-w-full md:w-1/3 h-screen items-center justify-start relative md:fixed top-0 left-0 px-16">
        <Profile />
      </div>

      {/* Links Section */}
      <div className="relative top-full md:top-0 left-0 md:left-1/3 w-full md:w-2/3 min-h-screen md:px-16 md:py-8 flex flex-col gap-16 ">
        <section
          id="about"
        >
          <About />
        </section>
        <section
          id="experience"
        >
          <Experience/>
        </section>
        <section
          id="projects"
        >
          <Projects/>
        </section>
        <section
          id="thesis"
        >
          <Theses />
        </section>
        <section
          id="achievement"
        >
          <Achievement/>
        </section>
        <section
        >
          <Footer/>
        </section>
      </div>
    </main>
  );
}
