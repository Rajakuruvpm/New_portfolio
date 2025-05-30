import React from 'react';
import HeroImage from '../assets/raja.jpg';
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <div className="bg-black text-white py-16 w-full" id="home">
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          
          {/* Left Part: Text Content */}
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 block sm:inline">
                RAJAKURU
                
                <span className="sm:ml-2">  PM</span>
              </span>
            </h1>
            
            <h1 className="text-4xl font-bold">
              <span className="typing-effect">FULLSTACK DEVELOPER</span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-110">
                Contact With Me
              </button>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-110 inline-block"
                download={true}
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Part: Image */}
          <div className="flex-1 flex justify-center w-full">
            <img
              src={HeroImage}
              alt="Profile"
              className="w-72 h-72 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
