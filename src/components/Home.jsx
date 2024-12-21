import React from "react";
import User from "./User";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fullscreen Background Image */}
      <img
        src="https://www.rockstaruniverse.co.uk/wp-content/gallery/gta-vi-artworks/Debut-Trailer-Palm-Trees.jpg"
        alt="Beautiful Landscape"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
          Welcome to Your Next Adventure
        </h1>
        <p className="mt-4 text-lg lg:text-xl font-medium max-w-2xl drop-shadow-md">
          Explore the beauty of the world with our curated destinations and
          experiences. Let’s make every moment unforgettable.
        </p>

        {/* Optional Call-to-Action */}
        <button
          className="mt-8 py-3 px-6 bg-white hover:bg-blue-700 transition rounded-lg text-black font-semibold shadow-lg"
          onClick={() => alert("Start Exploring!")}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Home;
