import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Create a placeholder scrapbook page for now
const ScrapbookPage: React.FC = () => {
  const imageNames = [
    "IMG_9061.JPG", "IMG_9062.JPG", "IMG_9063.JPG", "IMG_9064.JPG", "IMG_9065.JPG",
    "IMG_9066.JPG", "IMG_9067.JPG", "IMG_9068.JPG", "IMG_9069.JPG", "IMG_9070.JPG",
    "IMG_9071.JPG", "IMG_9072.JPG", "IMG_9073.JPG", "IMG_9074.JPG", "IMG_9075.JPG"
  ];

  const captions = [
    "Skagit valley Tulip Festival",
    "Cherry blossoms",
    "Pre holi",
    "Saint Patricks day",
    "VOODOO donuts",
    "capilano suspension bridge",
    "Aspen skiing",
    "Vail Snowmobiling",
    "Iconic Karaoke couple",
    "Enchantmaze",
    "Cuties",
    "Diwali",
    "Gayu Namu in their element",
    "Mount Rainier dreamy",
    "Bridal viel falls (NAUGHTYYY)"
  ];

  // FloatingScrapbookCarousel animates images in mixed paths and shuffles order
  const FloatingScrapbookCarousel: React.FC<{ imageNames: string[], captions: string[] }> = ({ imageNames, captions }) => {
    // Responsive grid: 3 columns on mobile, 4 on md, 5 on lg+
    const imgSize = 260;
    const cols = 3;
    const mdCols = 4;
    const lgCols = 5;
    return (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {imageNames.map((name, i) => (
          <div
            key={i}
            className="relative group"
            style={{
              width: imgSize,
              height: imgSize,
              animation: `carousel-sideways-${i} ${6 + (i % 4)}s ease-in-out infinite`,
              transformOrigin: 'center center',
            }}
          >
            <img
              src={`/scrapbookPics/${name}`}
              alt={captions[i]}
              className="object-cover w-full h-full rounded-2xl shadow-lg border-4 border-white"
              draggable={false}
              style={{ animation: `carousel-tilt-${i} ${3 + (i % 3)}s ease-in-out infinite` }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
              <span className="text-white text-xl font-bold text-center px-2">{captions[i]}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dustyblue-700 font-serif">Our Digital Scrapbook</h1>
        <p className="text-lg text-dustyblue-600 mt-2 font-handwritten">
          A collection of our precious memories together
        </p>
      </div>

      <FloatingScrapbookCarousel imageNames={imageNames} captions={captions} />

      <div className="flex justify-center">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ScrapbookPage;
