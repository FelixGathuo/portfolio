import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import profile from '@/public/images/profile.jpg'

const Sidebar = () => {
  return (
    <nav className="fixed w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-40 border-b border-gray-700">  
            <Image src={profile} className='w-24 h-24 rounded-full'/>
            <h1 className="text-2xl font-bold">Felix Gathuo</h1>
        </div>
        <ul className="flex flex-col p-4">
            <li className="mb-2">
                <a href="#home" className="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
            </li>
            <li className="mb-2">
                <a href="#resume" className="block py-2 px-4 rounded hover:bg-gray-700">Resume</a>
            </li>
            <li className="mb-2">
                <a href="#contact" className="block py-2 px-4 rounded hover:bg-gray-700">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar
