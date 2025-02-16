'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HashLoader } from 'react-spinners';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ threshold: 0.1 });
  const [mainRef, mainInView] = useInView({ threshold: 0.1 });

  const mainControls = useAnimation();
  const skillsControls = useAnimation();
  const educationControls = useAnimation();

  useEffect(() => {
    if (mainInView) mainControls.start('visible');
    else mainControls.start('hidden');
  }, [mainInView, mainControls]);

  useEffect(() => {
    if (skillsInView) skillsControls.start('visible');
    else skillsControls.start('hidden');
  }, [skillsInView, skillsControls]);

  useEffect(() => {
    if (educationInView) educationControls.start('visible');
    else educationControls.start('hidden');
  }, [educationInView, educationControls]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Math Game for Kids',
      description: 'A fun game for kids to learn basic math operations.',
      image: '/assets/images/project1.png',
      technologies: ['Flutter'],
      link: '#'
    },
    {
      title: 'Grade Management System',
      description: 'Manage and generate student grades efficiently.',
      image: '/assets/images/project2.png',
      technologies: ['PHP', 'MySQL', 'HTML'],
      link: '#'
    },
    {
      title: 'Dental Clinic System',
      description: 'Profile and manage patient appointments seamlessly.',
      image: '/assets/images/project3.png',
      technologies: ['HTML', 'CSS', 'MYSQL', 'Javascript'],
      link: '#'
    },
    {
      title: 'Design Thinking App',
      description: 'A platform for instructors to generate innovative teaching ideas.',
      image: '/assets/images/project4.png',
      technologies: ['Flutter', 'Mysql', 'PHP'],
      link: '#'
    },
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React/Next.js',
    'PHP',
    'MySQL',
    'Node.js'
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-gray-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <HashLoader color="#3498db" size={60} />
        </div>
      ) : (
        <>
          <motion.header
            className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </motion.div>
              <ul className="flex space-x-6">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                      }}
                      className="text-sm font-medium hover:text-yellow-500 transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.header>

          <main className="container mx-auto px-6 pt-24 space-y-20">
            <motion.section
              id="home"
              className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12"
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
                  className="text-xl text-gray-300"
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
                      src="/assets/images/joshua.png"
                      alt="Joshua Calma"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.section>

            <motion.section
              id="about"
              ref={mainRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={mainControls}
              className="min-h-screen flex flex-col justify-center items-center text-center space-y-8"
            >
              <motion.h2
                className="text-4xl font-bold text-yellow-500"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-5xl space-y-6"
                variants={containerVariants}
              >
                <motion.p
                  className="text-lg leading-relaxed text-gray-300"
                  variants={itemVariants}
                >
                  Hi, I&apos;m Joshua Calma, a passionate and dedicated web developer with a
                  keen eye for creating responsive, user-friendly applications that make
                  a difference. With a strong foundation in both front-end and back-end
                  development, I take pride in crafting seamless digital experiences
                  that combine aesthetic appeal with functional efficiency.
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed text-gray-300"
                  variants={itemVariants}
                >
                  My journey in web development began with a curiosity about how websites
                  work, which quickly evolved into a deep passion for coding and
                  problem-solving. I&apos;ve since mastered various modern web technologies
                  and frameworks, allowing me to build robust, scalable solutions that
                  meet contemporary web standards.
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed text-gray-300"
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
                  className="text-lg leading-relaxed text-gray-300"
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

            <motion.section
              id="skills"
              className="min-h-screen flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  ref={skillsRef}
                  className="bg-gray-800 p-8 rounded-lg"
                  variants={slideVariants}
                  initial="hidden"
                  animate={skillsControls}
                >
                  <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-700 p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  ref={educationRef}
                  className="bg-gray-800 p-8 rounded-lg"
                  variants={slideVariants}
                  initial="hidden"
                  animate={educationControls}
                >
                  <h3 className="text-2xl font-bold mb-6">Education</h3>
                  <div className="space-y-6">
                    <motion.div
                      variants={itemVariants}
                      className="border-l-2 border-blue-500 pl-4"
                    >
                      <h4 className="text-xl font-semibold">Bachelor&apos;s degree in Information Technology</h4>
                      <p className="text-gray-400">PHINMA Cagayan de Oro College</p>
                      <p className="text-gray-400">Expected 2024</p>
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

            <motion.section
              id="projects"
              className="min-h-screen"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-4xl font-bold mb-12"
                variants={itemVariants}
              >
                Projects
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        className="inline-block bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="contact"
              className="min-h-screen flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-4xl font-bold mb-12"
                variants={itemVariants}
              >
                Contact Me
              </motion.h2>
              <motion.form
                className="max-w-2xl mx-auto w-full space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
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
              </motion.form>
            </motion.section>
          </main>

          <motion.footer
            className="bg-gray-800 mt-20 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Joshua Calma</h3>
                  <p className="text-gray-400">Web Developer</p>
                  <p className="text-gray-400">Creating innovative web solutions</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Quick Links</h3>
                  <ul className="space-y-2">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.toLowerCase());
                          }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Contact Info</h3>
                  <p className="text-gray-400">Cagayan de Oro City, Philippines</p>
                  <p className="text-gray-400">email@example.com</p>
                  <p className="text-gray-400">+63 912 345 6789</p>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                © 2025 Joshua Calma - All Rights Reserved
              </div>
            </div>
          </motion.footer>
        </>
      )}
    </motion.div>
  );
};

export default Portfolio;