'use client';
import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import Header from '@/component/Header';
import HomeSection from '@/component/HomeSection';
import AboutSection from '@/component/AboutSection';
import SkillsSection from '@/component/SkillsSection';
import ContactSection from '@/component/ContactSection';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Image from 'next/image';

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm('service_ob9blbj', 'template_8gabyjk', e.target, {
      publicKey: 'LDqH6U0m4DgFB211x',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again.');
      },
    );
};

const Portfolio = () => {  
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPair, setCurrentPair] = useState(0);
  const [direction, setDirection] = useState(0);

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
    {
      title: 'Musify',
      description: 'Music Player Mobile Application',
      image: '/assets/images/project5.png',
      technologies: ['Flutter', 'Mysql', 'PHP'],
      link: '#'
    },
  ];

  const totalPairs = Math.ceil(projects.length / 2);

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
      setIsMobileMenuOpen(false);
      
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
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

  const nextPair = () => {
    setDirection(1);
    setCurrentPair((prev) => (prev + 1) % totalPairs);
  };

  const previousPair = () => {
    setDirection(-1);
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.div
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'
      }`}
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
          <Header
            theme={theme}
            toggleTheme={toggleTheme}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            scrollToSection={scrollToSection}
          />
          <main className={`container mx-auto px-6 pt-24 space-y-12 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>
            <HomeSection
              theme={theme}
              scrollToSection={scrollToSection}
              containerVariants={containerVariants}
              fadeInVariants={fadeInVariants}
              itemVariants={itemVariants}
            />
            <AboutSection
              theme={theme}
              mainRef={mainRef}
              mainControls={mainControls}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
            <SkillsSection
              theme={theme}
              skills={skills}
              skillsRef={skillsRef}
              skillsControls={skillsControls}
              educationRef={educationRef}
              educationControls={educationControls}
              containerVariants={containerVariants}
              slideVariants={slideVariants}
              itemVariants={itemVariants}
            />
            <motion.section
              id="projects"
              className="min-h-[80vh]"
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                Projects
              </h2>
              <div className="relative max-w-4xl mx-auto px-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPair}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center"
                  >
                    {[0, 1].map((offset) => {
                      const projectIndex = currentPair * 2 + offset;
                      const project = projects[projectIndex];
                      
                      if (!project) return null;
                      
                      return (
                        <div
                          key={projectIndex}
                          className={`${
                            theme === 'dark' 
                              ? 'bg-gray-800' 
                              : 'bg-white border border-blue-100'
                          } rounded-lg overflow-hidden shadow-lg w-full max-w-[350px] mx-auto transition-all hover:shadow-xl ${
                            theme === 'dark' ? 'hover:bg-gray-700' : 'hover:border-blue-200'
                          }`}
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="p-4 space-y-3">
                            <h3 className={`text-xl font-bold ${
                              theme === 'dark' ? 'text-gray-100' : 'text-black'
                            }`}>
                              {project.title}
                            </h3>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-3 py-1 rounded-full text-sm ${
                                    theme === 'dark' 
                                      ? 'bg-blue-600' 
                                      : 'bg-blue-100 text-blue-800'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {/* <a
                              href={project.link}
                              className={`inline-block px-4 py-2 rounded-full transition-colors text-sm ${
                                theme === 'dark'
                                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                              }`}
                            >
                              View Project
                            </a> */}
                          </div>
                        </div>
                      );  
                    })}
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full flex justify-between">
                  <button
                    onClick={previousPair}
                    className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-white transform -translate-x-6"
                  >
                    <IoChevronBackOutline size={24} />
                  </button>
                  <button
                    onClick={nextPair}
                    className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-white transform translate-x-6"
                  >
                    <IoChevronForwardOutline size={24} />
                  </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalPairs }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPair(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentPair === index ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.section>
            <ContactSection
              theme={theme}
              sendEmail={sendEmail}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          </main>
          <motion.footer
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'
            } mt-20 py-8`}
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
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-gray-100' : 'text-black'
                  }`}>
                    Contact Info
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-black'}>
                    Cagayan de Oro City, Philippines
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-black'}>
                    calmaj2003@gmail.com
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-black'}>
                    +63 935 601 3168
                  </p>
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