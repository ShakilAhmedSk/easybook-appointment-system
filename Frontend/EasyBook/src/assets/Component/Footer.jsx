import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-200 pt-12 pb-6 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-red-500 mb-2">EasyBook</h2>
          <p className="text-gray-400 max-w-sm">
            Effortless appointment scheduling for health, wellness, and beauty. Trusted by top service providers in Kolkata.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/services" className="hover:text-white">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-400"><FiMail /> support@easybook.com</p>
          <p className="flex items-center gap-2 text-gray-400 mt-2"><FiPhone /> +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400"><FiFacebook /></a>
            <a href="#" className="hover:text-pink-400"><FiInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FiTwitter /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-600 mb-4" />

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EasyBook. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
