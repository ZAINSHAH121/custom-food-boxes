import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">CustomPackaging</h3>
          <p className="mt-4 text-sm text-gray-400">
            Premium custom packaging solutions tailored to elevate your brand.
            We help you make a lasting impression.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#custom-boxes" className="hover:text-yellow-400 transition">Products</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} CustomPackaging. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
