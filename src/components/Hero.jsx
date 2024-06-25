import React from 'react';
import heroImg from './../assets/images/hero.jpeg';

const Hero = () => {
  return (
    <section className="bg-lightYellow">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green leading-tight mb-4">
            Welcome to EndoCare
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Supporting women with endometriosis through education, resources, and community support.
          </p>
          <a href="#learn-more" className="bg-green text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2">
          <img src={heroImg} alt="EndoCare Hero" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
