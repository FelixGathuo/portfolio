import React from "react";
import Image from "next/image";
import profile from "@/public/images/profile.jpg";

const Home = () => {
  return (
    <div className="flex-1 p-10">
      <section id="home" className="center">
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>
          Welcome to my portfolio website. Here you can find my resume and
          contact information.
        </p>
      </section>
      <section id="skills" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Skills</h2>
        <p>
          <li>
            Full-stack web application development using HTML, CSS, JavaScript.
          </li>
          <li>Web develepoment using react and Next js</li>
          <li>Integrating Odoo with other systems and services</li>
          <li>
            Developing and customizing Odoo modules to meet business
            requirements, working across the full stack from front-end to
            back-end
          </li>
          <li>Test-driven development using Python.</li>
          <li>SQL and database modeling.</li>
        </p>
      </section>
      <section id="resume" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Resume</h2>
        <p>Here is my resume.</p>
      </section>
      <section id="contact" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Contact</h2>
        <p>Contact me at email@example.com.</p>
      </section>
    </div>
  );
};

export default Home;
