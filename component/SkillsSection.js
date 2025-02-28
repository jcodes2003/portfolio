import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ theme, skills, skillsRef, skillsControls, educationRef, educationControls, containerVariants, slideVariants, itemVariants }) => {
  return (
    <motion.section
      id="skills"
      className="min-h-[80vh] flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          ref={skillsRef}
          className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-blue-100'
          } p-8 rounded-lg shadow-lg`}
          variants={slideVariants}
          initial="hidden"
          animate={skillsControls}
        >
          <h3 className={`text-2xl font-bold mb-6 ${
            theme === 'dark' ? 'text-gray-100' : 'text-black'
          }`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className={`${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
                } p-4 rounded-lg`}
                whileHover={{ scale: 1.05 }}
              >
                <span className={theme === 'dark' ? 'text-gray-100' : 'text-black'}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={educationRef}
          className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-lg shadow-lg`}
          variants={slideVariants}
          initial="hidden"
          animate={educationControls}
        >
          <h3 className={`text-2xl font-bold mb-6 ${
            theme === 'dark' ? 'text-gray-100' : 'text-black'
          }`}>
            Education
          </h3>
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-blue-500 pl-4"
            >
              <h4 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-gray-100' : 'text-black'
              }`}>
                Bachelor&apos;s degree in Information Technology
              </h4>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-black'}>
                PHINMA Cagayan de Oro College
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-black'}>
                Expected 2024
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-blue-500 pl-4"
            >
              <h4 className="text-xl font-semibold">ICT</h4>
              <p className="text-gray-400">Liceo de Cagayan University</p>
              <p className="text-gray-400">Graduated 2021</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
