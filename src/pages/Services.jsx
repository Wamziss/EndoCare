import React from 'react';
import { FaHeartbeat, FaBook, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Medical Support',
    description: 'Access to comprehensive medical support and resources.',
    icon: <FaHeartbeat className="text-green w-12 h-12 mb-4" />,
  },
  {
    title: 'Educational Resources',
    description: 'In-depth articles, guides, and resources about endometriosis.',
    icon: <FaBook className="text-green w-12 h-12 mb-4" />,
  },
  {
    title: 'Community Support',
    description: 'Join a supportive community of women who understand your journey.',
    icon: <FaUsers className="text-green w-12 h-12 mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 font-el-messiri">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-lightYellow rounded-lg shadow-lg p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

