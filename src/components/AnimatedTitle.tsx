
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ className }) => {
  return (
    <div className={cn("text-center mb-8", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dustyblue-700 mb-2 animate-fade-in font-serif">
        <span className="inline-block animate-float">15</span>{" "}
        <span className="inline-block animate-float" style={{ animationDelay: "0.2s" }}>months</span>{" "}
        <span className="inline-block animate-float" style={{ animationDelay: "0.4s" }}>of</span>
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-dustyblue-500 to-softpink-500 bg-clip-text text-transparent mb-4 animate-fade-in font-serif">
        <span className="inline-block animate-pulse-gentle">Gayu</span>{" "}
        <span className="inline-block animate-heart-beat text-red-500">&hearts;</span>{" "}
        <span className="inline-block animate-pulse-gentle" style={{ animationDelay: "0.3s" }}>Namu</span>
      </h1>
      <div className="relative h-16 overflow-hidden animate-fade-in">
        <div className="absolute w-full flex justify-center">
          <div className="h-12 w-12 rounded-full bg-dustyblue-200 animate-spin-slow opacity-70"></div>
          <div className="h-12 w-12 rounded-full bg-softpink-200 animate-spin-slow opacity-70" style={{ animationDelay: "2s" }}></div>
          <div className="h-12 w-12 rounded-full bg-dustyblue-300 animate-spin-slow opacity-70" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute top-6 w-full text-center">
          <span className="text-xl text-dustyblue-600 italic animate-pulse-gentle font-handwritten">a sweet journey of love</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTitle;
