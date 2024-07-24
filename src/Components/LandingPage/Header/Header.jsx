import React, { useState } from 'react';
import logo from '../../../assets/images/logo4.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EndoCare Logo" className="h-16" />
          <nav className="hidden md:flex space-x-6 ml-6">
            <a href="/" className="text-green font-semibold hover:text-primaryColor transition duration-300">Home</a>
            <a href="/#services" className="text-green font-semibold hover:text-primaryColor transition duration-300">Services</a>
            <a href="/#blog" className="text-green font-semibold hover:text-primaryColor transition duration-300">Blogs</a>
            <a href="/#contact-us" className="text-green font-semibold hover:text-primaryColor transition duration-300">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <a href="/login" className="text-green font-semibold hover:text-primaryColor transition duration-300">Login</a>
          <a href="/register" className="text-green font-semibold hover:text-primaryColor transition duration-300">Register</a>
          <a href="/donations" className="bg-green text-white px-3 py-1 rounded-md font-semibold hover:bg-primaryColor transition duration-300">Donate</a>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="/" className="block text-green font-semibold hover:text-primaryColor transition duration-300">Home</a>
          <a href="/#services" className="block text-green font-semibold hover:text-primaryColor transition duration-300">Services</a>
          <a href="/#blog" className="block text-green font-semibold hover:text-primaryColor transition duration-300">Blogs</a>
          <a href="/#contact-us" className="block text-green font-semibold hover:text-primaryColor transition duration-300">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;

