import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cer1 from "../../src/assets/cer1.jpg";
import cer2 from "../../src/assets/cer2.jpg";
import cer3 from "../../src/assets/cer3.jpg";
import cer4 from "../../src/assets/cer4.jpg";
import cer5 from "../../src/assets/cer5.jpg";
import cer6 from "../../src/assets/cer6.jpg";

const certificates = [
  { id: 1, title: "Web Development Certificate", image: cer1 },
  { id: 2, title: "ReactJS Certificate", image: cer2 },
  { id: 3, title: "Backend with Node.js", image: cer3 },
  { id: 4, title: "Frontend Mastery", image: cer4 },
  { id: 5, title: "JavaScript Expert", image: cer5 },
  { id: 6, title: "Full Stack Developer", image: cer6 },
];

const Certificates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white py-20" id="certificates">
      <div className="container mx-auto px-6 md:px-16">
        <h2
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          data-aos="fade-up"
        >
          My Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 w-72"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
