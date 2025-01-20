import React from "react";
import thesis from "../public/data/thesis.json"; // Assuming this contains your experiences data
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Thesis = () => {
  return (
    <div className="flex flex-1 flex-col text-3xl items-start justify-start w-full min-h-full">
    {/* Experiences */}
    {thesis.map((thesis, index) => (
     
      <Card
        key={index}
        className=" group w-full flex flex-row justify-start bg-transparent hover:bg-slate-300 hover:bg-opacity-10 mb-4 text-white border-none"
      >
        <CardHeader className="w-1/4 pr-0 flex justify-start items-start">
          <Image
            src={thesis.images}
            width={500}
            height={500}
            alt={thesis.title}
            className=" border-2 rounded-sm"
          />
        </CardHeader>
        <div className="w-3/4 ">
          <CardHeader>
            <CardTitle className="text-sm text-cyan-300">
              {thesis.title} 
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs font-thin text-slate-300">
               {thesis.description}
          </CardContent>
          <CardFooter className="flex flex-row gap-2 flex-wrap">
            {thesis.technologies.map((technology, technologyIndex) => (
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
    
    ))}
  </div>
  )
}

export default Thesis