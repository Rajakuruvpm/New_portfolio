import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white py-16 sm:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Part: Text Content */}
          <div className="w-full md:flex-1 text-center md:text-left" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Skills
            </h2>
            <div className="space-y-6">
              {[
                { label: "HTML & CSS", width: "w-10/12" },
                { label: "React JS", width: "w-11/12" },
                { label: "Javascript", width: "w-9/12" },
                { label: "Java", width: "w-10/12" },
                { label: "MySQL", width: "w-11/12" },
                { label: "Python", width: "w-9/12" }
              ].map((skill, index) => (
                <div
                  className="flex flex-col sm:flex-row sm:items-center gap-2"
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <label className="w-full sm:w-3/12 text-sm sm:text-base font-medium">{skill.label}</label>
                  <div className="w-full sm:grow bg-gray-800 rounded-full h-2.5">
                    <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${skill.width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
