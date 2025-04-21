
import React from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import MainButton from "@/components/MainButton";
import FloatingHearts from "@/components/FloatingHearts";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <FloatingHearts />
      <AnimatedTitle className="mb-16" />
      
      <div className="flex justify-center w-full max-w-6xl gap-6 mb-16">
        <MainButton to="/game" variant="primary" className="w-80 h-48 scrapbook-card p-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-full justify-center text-center">
            <span className="text-2xl font-semibold mb-1">Timeline Shuffle Game</span>
            <span className="text-sm opacity-80">Let's test your memory of our journey!</span>
          </div>
        </MainButton>
        
        <MainButton to="/scrapbook" variant="primary" className="w-80 h-48 scrapbook-card p-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-full justify-center text-center">
            <span className="text-2xl font-semibold mb-1">Digital Scrapbook</span>
            <span className="text-sm opacity-80">Relive some fun mems!</span>
          </div>
        </MainButton>
        
        <MainButton to="/love-letter" variant="primary" className="w-80 h-48 scrapbook-card p-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-full justify-center text-center">
            <span className="text-2xl font-semibold mb-1">Love Letter from Gayu</span>
            <span className="text-sm opacity-80">A heartfelt message just for you!</span>
          </div>
        </MainButton>
      </div>
      
      <div className="text-center text-dustyblue-500 animate-pulse-gentle mt-8">
      </div>
    </div>
  );
};

export default Index;

