import React from "react";
import projects from "../public/data/project.json"; // Assuming this contains your experiences data
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Projects = () => {
  return (
    <div className="flex flex-1 flex-col text-3xl items-start justify-start w-full min-h-full">
      {/* Experiences */}
      {projects.map((project, index) => (
        <a  href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
        key={index}
        >
        <Card
         
          className=" group w-full flex flex-row justify-start bg-transparent hover:bg-slate-300 hover:bg-opacity-10 mb-4 text-white border-none"
        >
          <CardHeader className="w-1/4 pr-0 flex justify-start items-start">
            <Image
              src={project.images}
              width={500}
              height={500}
              alt={project.title}
              className=" border-2 rounded-sm"
            />
          </CardHeader>
          <div className="w-3/4 ">
            <CardHeader>
              <CardTitle className=" flex flex-row gap-1 items-center text-sm text-cyan-300">
                {project.title} • {project.subtitle} <ArrowUpRight className=" w-4 group-hover:translate-x-1 group-hover:-translate-y-1  " />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-thin text-slate-300">
                 {project.description}
            </CardContent>
            <CardFooter className="flex flex-row gap-2 flex-wrap ">
              {project.technologies.map((technology, technologyIndex) => (
                <Badge
                  key={technologyIndex}
                  variant="outline"
                  className=" text-cyan-300 border-none bg-opacity-50 bg-slate-600 rounded-full"
                >
                  {technology}
                </Badge>
              ))}
            </CardFooter>
          </div>
        </Card>
        </a>
      ))}
    </div>
  );
};

export default Projects;
