import React from 'react';
import { FaHeartbeat, FaBook, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Medical Support',
    description: 'Access to comprehensive medical support and resources.',
    icon: <FaHeartbeat className="text-primaryColor w-12 h-12 mb-4" />,
  },
  {
    title: 'Educational Resources',
    description: 'In-depth articles, guides, and resources about endometriosis.',
    icon: <FaBook className="text-primaryColor w-12 h-12 mb-4" />,
  },
  {
    title: 'Community Support',
    description: 'Join a supportive community of women who understand your journey.',
    icon: <FaUsers className="text-primaryColor w-12 h-12 mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="md:w-1/3 p-4">
              <div className="bg-lightYellow rounded-lg shadow-md p-8 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
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
