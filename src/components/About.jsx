import React from "react";

const About = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fullscreen Background Image */}
      <img
        src="https://www.gtavice.net/content/images/rockstar-games-official-street-artwork-with-trees-and-background.png"
        alt="Company Background"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-6">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
          About Us
        </h1>
        <p className="mt-4 text-lg lg:text-xl font-medium max-w-2xl drop-shadow-md">
          At Rocketbrain, we are driven by innovation and creativity. Our
          mission is to help you embark on the next big adventure with
          cutting-edge technology and extraordinary experiences. Together, we
          redefine what’s possible, making every step of your journey
          unforgettable.
        </p>

        {/* Optional Call-to-Action */}
        <button
          className="mt-8 py-3 px-6 bg-white transition rounded-lg text-black font-semibold shadow-lg"
          onClick={() => alert("Join the Rocketbrain Revolution!")}
        >
          Join Us
        </button>
      </div>
    </div>
  );
};

export default About;
