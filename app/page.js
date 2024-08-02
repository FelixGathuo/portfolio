'use client';
import React, { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJsSquare,
  FaDocker,
  FaGitAlt,
  FaToggleOn,
  FaToggleOff
} from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTheme = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-10 md:ml-64">
      <button onClick={toggleTheme}>
        <FaToggleOn className={`${isOpen ? 'block' : 'hidden'}`}/>
        <FaToggleOff className={`${!isOpen ? 'block' : 'hidden'}`}/>
      </button>
      <section
        id="home"
        className="bg-white shadow-lg rounded-lg p-6 mb-6 border-x-4 border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>
          Welcome to my portfolio website. Here you can find my resume and
          contact information.
        </p>
      </section>

      <section
        id="skills"
        className="bg-white shadow-lg rounded-lg p-6 mb-6 border-b border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">
          Skills
        </h2>
        <ul className="list-disc pl-5 mt-2">
          <div className="flex gap-5">
            <FaReact className="text-blue-400 text-4xl" />
            <FaPython className="text-blue-400 text-4xl" />
            <FaNodeJs className="text-blue-400 text-4xl" />
            <FaJsSquare className="text-yellow-500 text-4xl" />
            <FaDocker className="text-blue-600 text-4xl" />
            <FaGitAlt className="text-orange-600 text-4xl" />
          </div>
          <li>
            Full-stack web application development using HTML, CSS, JavaScript.
          </li>
          <li>Web development using React and Next.js</li>
          <li>Integrating Odoo with other systems and services</li>
          <li>
            Developing and customizing Odoo modules to meet business
            requirements, working across the full stack
          </li>
          <li>Containerization using Docker.</li>
          <li>SQL and database modeling.</li>
        </ul>
      </section>

      <section
        id="resume"
        className="bg-white shadow-lg rounded-lg p-6 mb-6 border-r-8 border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">
          Resume
        </h2>
        <p>Software Engineer with 3+ years of experience in building systems</p>
        <h2 className="text-3xl text-gray-800 mt-4">Education</h2>
        <p>
          <i className="">
            BACHELOR OF SCIENCE - MATHEMATICS AND COMPUTER SCIENCE
          </i>
          <br />
          2015-2019
          <br />
          <i>Kenyatta University</i>
        </p>
        <h2 className="text-3xl text-gray-800 mt-4">Experience</h2>
        <p>
          Software Developer at Ministry of Education
          <br />
          May 2024 - Current <br />
          Nairobi, Kenya
        </p>
      </section>

      <section
        id="contact"
        className="bg-white shadow-lg rounded-lg p-6 mb-6 border-b border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">
          Contact
        </h2>
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-2xl">Email:</p>
            <Link href="mailto:gathuofelix@gmail.com" className="text-blue-600">
              gathuofelix@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-900" />
            <Link
              href="https://github.com/FelixGathuo"
              className="text-blue-950"
            >
              FelixGathuo
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <Link
              href="https://www.linkedin.com/in/felixgathuo"
              className="text-blue-950"
            >
              Felix Gathuo
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter className="text-blue-400" />
            <Link href="https://x.com/masterchief_F" className="text-blue-950">
              @FelixG
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
