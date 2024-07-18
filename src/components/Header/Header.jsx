import React, { useState } from 'react'
import logo from '../../assets/images/logo4.jpeg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EndoCare Logo" className="h-20" />
          <nav className="hidden md:flex space-x-4 ml-10">
            <a href="/" className="text-green hover:text-primaryColor">Home</a>
            <a href="/#services" className="text-green hover:text-primaryColor">Services</a>
            <a href="/#blog" className="text-green hover:text-primaryColor">Blogs</a>
            <a href="/#contact-us" className="text-green hover:text-primaryColor">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-green hover:text-primaryColor">Login</a>
          <a href="/register" className="text-green hover:text-primaryColor">Sign Up</a>
          <a href="/donations" className="bg-green text-white px-4 py-2 rounded-md hover:bg-primaryColor">Donate</a>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="/" className="block px-4 py-2 text-green hover:text-primaryColor">Home</a>
          <a href="/about" className="block px-4 py-2 text-green hover:text-primaryColor">About</a>
          <a href="/services" className="block px-4 py-2 text-green hover:text-primaryColor">Services</a>
          <a href="/contact" className="block px-4 py-2 text-green hover:text-primaryColor">Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header
