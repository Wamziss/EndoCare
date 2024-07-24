import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='mx-auto'>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-white hover:text-lightYellow transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-white hover:text-lightYellow transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/blog"
                  className="text-white hover:text-lightYellow transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-white hover:text-lightYellow transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@endocare.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex list-none p-0 m-0 gap-4">
              <li>
                <a
                  href="#"
                  className="text-primaryColor hover:text-lightYellow transition-colors duration-200 text-2xl"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primaryColor hover:text-lightYellow transition-colors duration-200 text-2xl"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primaryColor hover:text-lightYellow transition-colors duration-200 text-2xl"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-8">© 2024 EndoCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
