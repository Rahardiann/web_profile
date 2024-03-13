import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaImages } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
    <nav className="hidden lg:flex justify-between items-center bg-white text-white py-4 px-6 bg-black shadow-md">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="" className="w-12 h-auto mr-4" />
        <span className="text-orange text-xl mr-4">Raek.<span>ind()</span></span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-hijau hover:text-orange">Home</Link>
        </li>
        <li>
          <Link to="/aboutme" className="text-hijau hover:text-orange">About Me</Link>
        </li>
        <li>
          <Link to="/galerry" className="text-hijau hover:text-orange">My Porto</Link>
        </li>
      </ul>
    </nav>
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white text-white py-4 px-6 bg-hijau shadow-md lg:hidden">
      <div className="flex justify-center">
        <div className="flex justify-around w-full">
          <Link to="/" className="text-black hover:text-orange flex flex-col items-center">
            <FaHome size={24} />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/aboutme" className="text-black hover:text-orange flex flex-col items-center">
            <FaUser size={24} />
            <span className="text-sm">About Me</span>
          </Link>
          <Link to="/galerry" className="text-black hover:text-orange flex flex-col items-center">
            <FaImages size={24} />
            <span className="text-sm">Gallery</span>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
