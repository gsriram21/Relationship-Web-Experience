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
        <div className="border-4 border-dustyblue-200 rounded-xl p-6 md:p-8 bg-white relative">
          <div className="relative z-10 font-handwritten text-xl">
            <p className="text-2xl text-dustyblue-700 mb-6">
              Hi youuuuuuuuuuu,
            </p>
            
            <p className="text-dustyblue-700 mb-6 leading-relaxed">
              Happy 15 months Namu! I love you so so so so so so so so so so so much!
              This past month has truly been amazing for us! We've somehow gotten EVEN closer
              to eachother, which at this point I don't even know how it's possible hehe. So
              much has happened and through it all, we've been by eachother's side and there's
              nothing more special to me than that.
            </p>
            
            <p className="text-dustyblue-700 mb-6 leading-relaxed">
              For our 15 months, since you taught me so much about VIBE coding and new AI
              tools to streamline productivity, I wanted to give you this VIBE coded project! This
              is a webapp with multiple different games and ACCHHHTIVITIES that you can play and enjoy!
              I HOPE YOU LIKEEEE IT!!!
            </p>
            
            <p className="text-dustyblue-700 mb-8 leading-relaxed">
              YUHHHSSTERDAYYYY you didn't scream at me, you HUGGGIEIEEDDDDD ME!!
              Thank you for being you, and thank you for being mine!
            </p>
            
            <p className="text-right text-2xl text-dustyblue-600">
              I LOVE YOU SOOOOOOOOOO MUCH,<br />
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
