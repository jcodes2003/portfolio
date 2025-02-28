import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HomeSection = ({ theme, scrollToSection, containerVariants, fadeInVariants, itemVariants }) => {
  return (
    <motion.section
      id="home"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center md:text-left space-y-6"
        variants={fadeInVariants}
      >
        <motion.h1
          className="text-5xl font-bold"
          variants={itemVariants}
        >
          Hi There,
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold"
          variants={itemVariants}
        >
          I&apos;m <span className="text-yellow-500">Joshua Calma</span>
        </motion.h2>
        <motion.p
          className={`text-xl text-gray-300${
            theme === 'dark' ? 'text-gray-300' : 'text-black'
          }`}
          variants={itemVariants}
        >
          I specialize in Web Development!
        </motion.p>
        <motion.button
          onClick={() => scrollToSection('about')}
          className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Learn More
        </motion.button>
      </motion.div>
      <motion.div
        className="relative w-72 h-72 sm:w-96 sm:h-96"
        variants={fadeInVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 p-2">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/assets/images/me.png"
              alt="Joshua Calma"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
