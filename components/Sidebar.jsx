'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import profile from '@/public/images/profile.jpg';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='hidden'>
      {/* Sidebar for larger screens */}
      <nav className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-between h-40 border-b border-gray-700 p-4">
          <div className="flex items-center">
            <Image src={profile} alt="Profile Picture" className='w-24 h-24 rounded-full' />
            <h1 className="text-2xl font-bold ml-4">Felix Gathuo</h1>
          </div>
        </div>
        <ul className="flex flex-col p-4">
          <li className="mb-2">
            <Link onClick={toggleSidebar} href="#home"className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Home
            </Link>
          </li>
          <li className="mb-2">
            <Link onClick={toggleSidebar} href="#resume"
               className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Resume
            </Link>
          </li>
          <li className="mb-2">
            <Link onClick={toggleSidebar} href="#contact" className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Toggle button for small screens */}
      <button onClick={toggleSidebar} className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full shadow-lg">
        <FaBars />
      </button>
    </div>
  );
};

export default Sidebar;
