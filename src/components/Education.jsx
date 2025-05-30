import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // Optional icon lib: lucide-react

const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "IFET College of Engineering",
    year: "2020 – 2024",
    grade: "CGPA: 7.94",
  },
  {
    degree: "HSC",
    institution: "Saraswathi Matric Hr. Sec. School",
    year: "2019 – 2020",
    grade: "68%",
  },
  {
    degree: "SSLC",
    institution: "Sakthi Matric Hr. Sec. School",
    year: "2017 – 2018",
    grade: "88%",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section id="Education" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">🎓 Education</h2>
        <div className="relative border-l border-gray-700 ml-6 space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative pl-10 group"
            >
              {/* Dot and line */}
              <span className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-md transition group-hover:scale-110" />

              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-2 text-blue-400">
                  <GraduationCap size={20} className="text-blue-400" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
                <p className="text-sm text-gray-500 italic">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

