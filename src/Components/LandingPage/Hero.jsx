import React from 'react';
import heroImg from './../../assets/images/hero.jpeg';

const Hero = () => {
  return (
    <section className="bg-lightYellow">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-green leading-tight mb-4">
            Welcome to EndoCare
          </h1>
          <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
            Supporting women with endometriosis through education, resources, and community support.
          </p>
          <p className="text-sm md:text-md text-gray-600 mb-6 leading-relaxed">
            Join our community to gain access to personalized advice, connect with others, and explore the latest research and treatment options. We are here to help you navigate your journey with endometriosis.
          </p>
          <a href="#learn-more" className="bg-green text-white px-6 py-2 rounded-full text-md font-semibold shadow-md hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2">
          <img src={heroImg} alt="EndoCare Hero" className="w-full md:w-3/4 rounded-lg shadow-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

