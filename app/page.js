import React from "react";
import Image from "next/image";
import profile from "@/public/images/profile.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex-1 p-10 ml-64">
      <section id="home" className="text-white">
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>
          Welcome to my portfolio website. Here you can find my resume and
          contact information.
        </p>

        
        <i class="fa-brands fa-square-github"></i>
        {/* <FontAwesomeIcon icon="fa-brands fa-square-github" /> */}
      </section>
      <section id="skills" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Skills</h2>
        <div>
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
        </div>
      </section>
      <section id="resume" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Resume</h2>
        <p>Software Engineer with 3+ years of experience in building systems</p>
        <h2 className="text-2xl">Education</h2>
        <p>
          <i>BACHELOR OF SCIENCE - MATHEMATICS AND COMPUTER SCIENCE</i>
          <br />
          2015-2019<br/>
          <i>Kenyatta University</i>
        </p>
      </section>
      <section id="contact" className="mt-10">
        <h2 className="text-4xl font-bold mb-4 border-b">Contact</h2>
        <div className="col-lg-6 d-flex align-items-stretch">
          <p className="text-2xl">Email</p>
          <Link href="emailt0:gathuofelix@gmail.com">
            gathuofelix@gmail.com
          </Link>
          <h2 className="text-2xl">Github</h2>
          <Link href="https://github.com/FelixGathuo">FelixGathuo</Link>
          <i className="fa-brands fa-linkedin"></i>
          <p>LinkedIn</p>
          <Link href="https://www.linkedin.com/in/felixgathuo">
            Felix Gathuo
          </Link>
          <i className="fa-brands fa-x-twitter"></i>
          <p className="text-2xl">X</p>
          <Link href="https://x.com/masterchief_F">@masterchief_F</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
