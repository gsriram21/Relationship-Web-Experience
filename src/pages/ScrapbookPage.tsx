
import React from "react";
import { Link } from "react-router-dom";

// Create a placeholder scrapbook page for now
const ScrapbookPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dustyblue-700 font-serif">Our Digital Scrapbook</h1>
        <p className="text-lg text-dustyblue-600 mt-2 font-handwritten">
          A collection of our precious memories together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* This is a placeholder for the scrapbook content */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i} 
            className="scrapbook-card p-6 aspect-square flex items-center justify-center"
          >
            <p className="text-dustyblue-500 text-xl">Memory {i+1}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ScrapbookPage;
