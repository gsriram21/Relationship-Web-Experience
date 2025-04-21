
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MainButtonProps {
  to: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

// Only blue shades for all button variants
const MainButton: React.FC<MainButtonProps> = ({
  to,
  variant = "primary",
  children,
  className,
}) => {
  const baseClasses = "rounded-2xl flex items-center justify-center py-6 px-8 text-xl font-medium transition-all duration-300 hover:scale-105 shadow-md";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-dustyblue-400 to-dustyblue-500 text-white hover:shadow-lg",
    secondary: "bg-gradient-to-r from-dustyblue-200 to-dustyblue-300 text-dustyblue-900 hover:shadow-lg",
    outline: "border-2 border-dustyblue-300 text-dustyblue-700 hover:bg-dustyblue-50 hover:border-dustyblue-400"
  };

  return (
    <Link 
      to={to} 
      className={cn(
        baseClasses,
        variantClasses[variant],
        "w-full md:w-80 h-40 text-center",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default MainButton;
