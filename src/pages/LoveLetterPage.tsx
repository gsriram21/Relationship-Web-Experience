
import React from "react";
import { Link } from "react-router-dom";

// Create a placeholder love letter page for now
const LoveLetterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dustyblue-700 font-serif">Love Letter from Gayu</h1>
        <p className="text-lg text-dustyblue-600 mt-2 font-handwritten">
          Written with love, just for you
        </p>
      </div>

      <div className="scrapbook-card p-8 max-w-2xl mx-auto mb-8">
        <div className="border-4 border-softpink-200 rounded-xl p-6 md:p-8 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover before:content-[''] before:absolute before:inset-0 before:bg-white/70 relative">
          <div className="relative z-10 font-handwritten text-xl">
            <p className="text-2xl text-dustyblue-700 mb-6">
              Dear Namu,
            </p>
            
            <p className="text-dustyblue-700 mb-6 leading-relaxed">
              This is where a heartfelt love letter will go, expressing all the beautiful moments
              we've shared over the past 15 months. Our journey together has been filled with laughter,
              growth, and countless precious memories.
            </p>
            
            <p className="text-dustyblue-700 mb-6 leading-relaxed">
              From our first meeting to where we are now, every step has been a blessing.
              I cherish every moment we've spent together and look forward to many more.
            </p>
            
            <p className="text-dustyblue-700 mb-8 leading-relaxed">
              Thank you for being you, and for being mine.
            </p>
            
            <p className="text-right text-2xl text-softpink-600">
              With all my love,<br />
              Gayu
            </p>
          </div>
        </div>
      </div>

      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default LoveLetterPage;
