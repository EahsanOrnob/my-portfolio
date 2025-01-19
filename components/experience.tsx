import React from "react";
import experiences from "../public/data/experience.json"; // Assuming this contains your experiences data
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <div className="flex flex-1 flex-col text-3xl items-center justify-center w-full min-h-full">
      {/* Experiences */}
      {experiences.map((experience, index) => (
        <Card
          key={index}
          className="w-full flex flex-row justify-start bg-transparent hover:bg-slate-300 hover:bg-opacity-10 mb-4 text-white border-none"
        >
          <CardHeader className="w-1/4 pr-0 flex justify-start items-start">
            <CardDescription className="text-xs">
              {experience.duration}
            </CardDescription>
          </CardHeader>
          <div className=" w-3/4">
            <CardHeader>
              <CardTitle className=" text-sm text-cyan-300">
                {experience.designation}  •  {experience.company}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-thin text-slate-300">
              <ol className="flex flex-col gap-2">
                {experience.description.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ol>
            </CardContent>
            <CardFooter className="flex flex-row gap-2 flex-wrap ">
              {experience.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className=" text-cyan-300 border-none bg-opacity-50 bg-slate-600 rounded-full">
                  {skill}
                </Badge>
              ))}
            </CardFooter>
          </div>
        </Card>
      ))}
      <a  href="/pdf/resume.pdf"
        target="_blank" 
        rel="noopener noreferrer" 
        className="block">

      <h1 className="group flex flex-row justify-center items-center text-cyan-300 text-lg font-semibold">view full resume <ArrowUpRight className=" w-4 group-hover:translate-x-1 group-hover:-translate-y-1  " /></h1> 
        </a>
       
    </div>
  );
};

export default Experience;
