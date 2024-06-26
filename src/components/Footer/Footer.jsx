import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-lightYellow">Home</a></li>
              <li><a href="/services" className="hover:text-lightYellow">Services</a></li>
              <li><a href="/blog" className="hover:text-lightYellow">Blog</a></li>
              <li><a href="/contact" className="hover:text-lightYellow">Contact Us</a></li>
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
            <ul className="flex space-x-4">
              <li><a href="#" className="text-primaryColor hover:text-lightYellow"><FaFacebookF /></a></li>
              <li><a href="#" className="text-primaryColor hover:text-lightYellow"><FaTwitter /></a></li>
              <li><a href="#" className="text-primaryColor hover:text-lightYellow"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-400">© 2024 EndoCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
