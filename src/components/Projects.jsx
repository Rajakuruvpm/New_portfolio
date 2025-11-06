import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import employeeMSImage from "../assets/bus.png";
import bookMSImage from "../assets/hero.png";
import puzzleImage from "../assets/puzzle.png";
import cart from "../assets/cart.jpg";
import course from "../assets/course.jpeg";

const projects = [
  {
    id: 1,
    name: "Bus Ticket Reservation System",
    technologies: "java, mysql",
    image: employeeMSImage,
    github: "https://github.com/Rajakuruvpm/BusReservationProject",
  },
  {
    id: 2,
    name: "QR Code Generator with React.js",
    technologies: "reactjs, html, css,bootstrap",
    image: bookMSImage,
    github: "https://github.com/Rajakuruvpm/QrcodeApp",
  },
  {
    id: 3,
    name: "Puzzle Game Using Python",
    technologies: "python",
    image: puzzleImage,
    github: "#",
  },
  {
    id: 4,
    name: "Shopping Cart",
    technologies: "reactjs, html, css,bootstrap",
    image: cart,
    github: "https://github.com/Rajakuruvpm/ShoppingCart",
   
  },
   {
    id: 5,
    name: "Course Registration system",
    technologies: "reactjs, springboot, mysql",
    image: course,
    github: "https://github.com/Rajakuruvpm/Course_Registration_project",
   
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
