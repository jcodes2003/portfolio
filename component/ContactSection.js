import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa6";

const ContactSection = ({ theme, sendEmail, containerVariants, itemVariants }) => {
  return (
    <motion.section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        variants={itemVariants}
      >
        Contact Me
      </motion.h2>
      <motion.form
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto w-full space-y-6"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="user_name" className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-100' : 'text-black'
          }`}>
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className={`w-full px-4 py-2 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-blue-100'
            } border focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="user_email" className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-100' : 'text-black'
          }`}>
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className={`w-full px-4 py-2 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-blue-100'
            } border focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-100' : 'text-black'
          }`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className={`w-full px-4 py-2 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-blue-100'
            } border focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
        >
          Send Message
        </motion.button>
        
        <a
          href="/assets/images/resumes.pdf" // Update with the actual path to your resume
          className="flex items-center justify-center w-full bg-green-600 py-3 rounded-lg font-medium hover:bg-green-500 transition-colors text-center"
          download
        >
          <span className="mr-2">
            <FaDownload />
          </span>
          Download Resume
        </a>
      </motion.form>
    </motion.section>
  );
};

export default ContactSection;
