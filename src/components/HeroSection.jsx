import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-60"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 sm:py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Premium Custom Packaging That Defines Your Brand’s Identity
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 mb-8">
            Discover packaging solutions that go beyond aesthetics—built to enhance your brand presence, protect your products, and impress your customers.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Right Image or Illustration (Optional) */}
        <div className="hidden lg:block">
          <img
            src="/images/custom-packaging.png"
            alt="Custom Packaging"
            className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
