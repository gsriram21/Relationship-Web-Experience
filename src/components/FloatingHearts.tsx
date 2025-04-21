
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingHeartsProps {
  className?: string;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ className }) => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; size: number; speed: number; delay: number }>>([]);

  useEffect(() => {
    // Create 10 hearts with random positions and speeds
    const newHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100, // Random horizontal position
      size: Math.random() * 0.5 + 0.5, // Random size between 0.5 and 1
      speed: Math.random() * 3 + 2, // Random speed
      delay: Math.random() * 8 // Random delay
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-softpink-300 animate-float opacity-70"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            fontSize: `${heart.size * 2}rem`,
            animationDuration: `${heart.speed}s`,
            animationDelay: `${heart.delay}s`,
            animationIterationCount: "infinite"
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
