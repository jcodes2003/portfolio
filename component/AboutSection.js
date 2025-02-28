import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ theme, mainRef, mainControls, containerVariants, itemVariants }) => {
  return (
    <motion.section
      id="about"
      ref={mainRef}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-8"
    >
      <motion.h2
        className="text-4xl font-bold text-yellow-500"
        variants={itemVariants}
      >
        About Me
      </motion.h2>
      <motion.div
        className={`${
          theme === 'dark' 
            ? 'bg-gray-800' 
            : 'bg-white border border-blue-100'
        } p-10 rounded-2xl shadow-lg w-full max-w-5xl space-y-6`}
        variants={containerVariants}
      >
        <motion.p
          className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-black'
          }`}
          variants={itemVariants}
        >
          Hi, I&apos;m Joshua Calma, a passionate and dedicated web developer with a
          keen eye for creating responsive, user-friendly applications that make
          a difference. With a strong foundation in both front-end and back-end
          development, I take pride in crafting seamless digital experiences
          that combine aesthetic appeal with functional efficiency.
        </motion.p>
        <motion.p
          className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-black'
          }`}
          variants={itemVariants}
        >
          My journey in web development began with a curiosity about how websites
          work, which quickly evolved into a deep passion for coding and
          problem-solving. I&apos;ve since mastered various modern web technologies
          and frameworks, allowing me to build robust, scalable solutions that
          meet contemporary web standards.
        </motion.p>
        <motion.p
          className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-black'
          }`}
          variants={itemVariants}
        >
          Currently pursuing my Bachelor&apos;s degree in Information Technology at
          PHINMA Cagayan de Oro College, I&apos;m constantly expanding my knowledge
          and staying updated with the latest industry trends. My academic
          journey has not only equipped me with theoretical knowledge but also
          provided practical experience through various projects and
          collaborations.
        </motion.p>
        <motion.p
          className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-black'
          }`}
          variants={itemVariants}
        >
          When I&apos;m not coding, you&apos;ll find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge with
          fellow developers. I believe in continuous learning and am always
          excited to take on new challenges that push my creative and technical
          boundaries.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
