
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
        <span className="inline-block animate-float" style={{ animationDelay: "0.4s" }}>of Gayu & Namu</span>
      </h1>
    </div>
  );
};

export default AnimatedTitle;

