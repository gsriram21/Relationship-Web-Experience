
import React from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import MainButton from "@/components/MainButton";
import FloatingHearts from "@/components/FloatingHearts";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <FloatingHearts />
      <AnimatedTitle className="mb-16" />
      
      <div className="w-full max-w-3xl flex flex-col gap-6 mb-16">
        <MainButton to="/game" variant="primary">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold mb-1">Timeline Shuffle Game</span>
            <span className="text-sm opacity-80">Test your memory of our journey!</span>
          </div>
        </MainButton>
        
        <MainButton to="/scrapbook" variant="secondary">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold mb-1">Digital Scrapbook</span>
            <span className="text-sm opacity-80">Relive our precious moments</span>
          </div>
        </MainButton>
        
        <MainButton to="/love-letter" variant="outline">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold mb-1">Love Letter from Gayu</span>
            <span className="text-sm opacity-80">A heartfelt message just for you</span>
          </div>
        </MainButton>
      </div>
      
      <div className="text-center text-dustyblue-500 animate-pulse-gentle mt-8">
        <p className="italic text-xl font-handwritten">Happy 15 Months Anniversary!</p>
        <p className="text-sm mt-2">❤️ Forever and always ❤️</p>
      </div>
    </div>
  );
};

export default Index;
