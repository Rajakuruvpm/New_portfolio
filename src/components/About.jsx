import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Part: Text Content */}
          <div
            className="flex-1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text text-center bg-gradient-to-r from-green-400 to-blue-500">
              ABOUT ME
            </h2>
            <p className="text-lg mb-8 w-full text-left">
              Hi I’m Rajakuru P M
              <br />
              👋 Greetings! I'm Rajakuru P M, a Computer Science student on a
              journey to transform ideas into impactful digital solutions. 💼
              <br />
              🎓 Currently pursuing my B.E. in Computer Science, I've developed
              a solid foundation in programming languages such as C, Java,
              Python, HTML5, CSS, and JavaScript. My academic pursuits have
              fueled my passion for technology and problem-solving.
              <br />
              🚀 Committed to continuous improvement, I've earned multiple
              online certifications, validating my proficiency in both front-end
              and back-end technologies. These certifications are a testament to
              my dedication to staying abreast of industry trends and
              advancements.
              <br />
              💻 Eager to transition from academia to the professional sphere, I
              am actively seeking opportunities in software development. My goal
              is to contribute my technical skills and creativity to a dynamic
              team, making meaningful contributions to innovative projects.
              <br />
              🌐 Let's connect! If you're looking for a dedicated and
              forward-thinking individual with a passion for coding, I'd love to
              explore how I can bring value to your team.
            </p>
          </div>

          {/* Image section if needed */}
          {/* <div className="flex-1 flex justify-center" data-aos="fade-left">
            <img
              src={AboutImage}
              alt="About Me"
              className="w-80 h-96 object-cover rounded-xl shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
