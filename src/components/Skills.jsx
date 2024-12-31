import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden px-5 md:px-16 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide">
          Experience & Education
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-2 max-w-screen-lg mx-auto w-full">
        {/* Experience - Software Developer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl"
        >
          <div className="absolute -left-5 top-8">
            <FaBriefcase className="text-5xl text-blue-500" />
          </div>
          <span className="text-sm bg-blue-600 px-4 py-1 rounded-full">
            2021 - PRESENT
          </span>
          <h3 className="text-3xl font-bold mt-4">Software Developer</h3>
          <p className="text-lg mt-4 leading-relaxed">
            Crafting intuitive user interfaces and building robust web
            applications. Passionate about solving complex problems with
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Education - High School */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl"
        >
          <div className="absolute -left-5 top-8">
            <FaGraduationCap className="text-5xl text-purple-500" />
          </div>
          <span className="text-sm bg-purple-600 px-4 py-1 rounded-full">
            2022
          </span>
          <h3 className="text-3xl font-bold mt-4">High School</h3>
          <p className="text-lg mt-4 leading-relaxed">
            Graduated from O'tega College in 2022 with a strong interest in technology and software development.
          </p>
        </motion.div>

        {/* Experience - Frontend Developer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl"
        >
          <div className="absolute -left-5 top-8">
            <FaBriefcase className="text-5xl text-blue-500" />
          </div>
          <span className="text-sm bg-blue-600 px-4 py-1 rounded-full">
            2021 - PRESENT
          </span>
          <h3 className="text-3xl font-bold mt-4">Frontend Developer</h3>
          <p className="text-lg mt-4 leading-relaxed">
            Designing responsive, futuristic, and engaging web experiences
            tailored to user needs.
          </p>
        </motion.div>

        {/* Education - Bachelor's Degree */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl"
        >
          <div className="absolute -left-5 top-8">
            <FaGraduationCap className="text-5xl text-purple-500" />
          </div>
          <span className="text-sm bg-purple-600 px-4 py-1 rounded-full">
            3RD YEAR
          </span>
          <h3 className="text-3xl font-bold mt-4">Bachelor's Degree</h3>
          <p className="text-lg mt-4 leading-relaxed">
            Currently in my 3rd year at Caleb University Imota, pursuing a degree in Computer Science. Focused on developing innovative projects and enhancing my software development skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
