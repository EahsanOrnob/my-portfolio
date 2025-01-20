import React from "react";
import achievements from "../public/data/achievement.json"; // Assuming this contains your experiences data
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Achievement = () => {
  return (
    <div className="flex flex-1 flex-col text-3xl items-start justify-start w-full min-h-full">
    {/* achievements */}
    {achievements.map((achievement, index) => (
    
      <Card
        key={index}
        className="w-full flex flex-row justify-start bg-transparent hover:bg-slate-300 hover:bg-opacity-10 mb-4 text-white border-none"
      >
        <CardHeader className="w-1/4 pr-0 flex justify-start items-start">
          <Image
            src={achievement.images}
            width={500}
            height={500}
            alt={achievement.title}
            className=" border-2 rounded-sm h-24"
          />
        </CardHeader>
        <div className="w-3/4 ">
          <CardHeader>
            <CardTitle className=" flex flex-row gap-1 items-center text-sm text-cyan-300">
              {achievement.title} 
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs font-thin text-slate-300">
               {achievement.description}
          </CardContent>
        </div>
      </Card>
  
    ))}
  </div>
  )
}

export default Achievement