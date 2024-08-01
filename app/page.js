import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="p-10 md:ml-64">
      <section id="home" className="bg-white shadow-lg rounded-lg p-6 mb-6 border-x-4 border-gray-200">
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>
          Welcome to my portfolio website. Here you can find my resume and
          contact information.
        </p>
      </section>

      <section id="skills" className="bg-white shadow-lg rounded-lg p-6 mb-6 border-b border-gray-200">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">Skills</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Full-stack web application development using HTML, CSS, JavaScript.</li>
          <li>Web development using React and Next.js</li>
          <li>Integrating Odoo with other systems and services</li>
          <li>Developing and customizing Odoo modules to meet business requirements, working across the full stack</li>
          <li>5 years experience using Python.</li>
          <li>SQL and database modeling.</li>
        </ul>
      </section>

      <section id="resume" className="bg-white shadow-lg rounded-lg p-6 mb-6 border-r-8 border-gray-200">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">Resume</h2>
        <p>Software Engineer with 3+ years of experience in building systems</p>
        <h2 className="text-2xl text-gray-800 mt-4">Education</h2>
        <p>
          <i>BACHELOR OF SCIENCE - MATHEMATICS AND COMPUTER SCIENCE</i>
          <br />
          2015-2019
          <br />
          <i>Kenyatta University</i>
        </p>
      </section>

      <section id="contact" className="bg-white shadow-lg rounded-lg p-6 mb-6 border-b border-gray-200">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-600 text-cyan-600">Contact</h2>
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-2xl">Email:</p>
            <Link href="mailto:gathuofelix@gmail.com" className="text-blue-600">
              gathuofelix@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-900" />
            <Link href="https://github.com/FelixGathuo" className="text-blue-950">
              FelixGathuo
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-700" />
            <Link href="https://www.linkedin.com/in/felixgathuo" className="text-blue-950">
              Felix Gathuo
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter className="text-blue-400" />
            <Link href="https://x.com/masterchief_F" className="text-blue-950">
              @masterchief_F
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
