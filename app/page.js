'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState('skills');
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash on page load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const projects = [
    { title: "Math Game for Kids", description: "a game for kids to learn math basic operations like addition, subtraction, multiplication, and division", image: "/assets/images/project1.png" },
    { title: "Grademanagement System", description: "teacher can easily manage the grades of their students grades and also able to generate total average of the students", image: "/assets/images/project2.png" },
    { title: "Clinica Dentista profiling and appointment System", description: "a system that allows the clinic to manage their patients and appointments and also able to generate reports", image: "/assets/images/project3.png" },
    { title: "Design thinking app", description: "an app that allows users to create their own design thinking projects and to let the instructors generate new ideas of teaching", image: "/assets/images/project4.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <Image src="/assets/images/logo.png" alt="Logo" width={50} height={50} className="mb-4 sm:mb-0" />
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6">
            {['Home','About','Skills','Projects','Contact'].map((item) => (
              <li key={item} className="mb-2 sm:mb-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                  className="text-sm sm:text-base text-gray-300 hover:text-white cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-8 md:px-12 py-8 mt-20">
        <section id="home" className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">Hi There,</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">I'm <span className="text-yellow-500">Joshua Calma</span></h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              I Am Into Web Development!
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              About Me
            </button>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {['github', 'instagram', 'twitter', 'email'].map((social) => (
                <a key={social} href={`#${social}`} className="text-gray-400 hover:text-gray-200">
                  <Image src={`/assets/images/${social}-icon.png`} alt={social} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-yellow-400 rounded-full overflow-hidden">
              <Image src="/assets/images/joshua.png" alt="Joshua Calma" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/assets/images/joshua.jpg" alt="Wave" width={32} height={32} />
            </div>
          </div>
        </section>
       
        <section id="about" className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <p className="text-gray-300 text-sm sm:text-md">
            Hi, I'm Joshua A. Calma, a passionate web developer with a focus on building responsive and user-friendly applications. With expertise in both front-end and back-end development, I specialize in creating seamless user experiences using modern web technologies. On the backend, I enjoy working with PHP to build dynamic, secure, and scalable applications.
            <br /><br />
            I am currently pursuing my studies at PHINMA Cagayan de Oro College, and at 21 years old, I am eager to continue growing my skills and knowledge in the field of web development. I am always looking for opportunities to improve and take on exciting projects that challenge me to learn more.
            Let's build something great together!
          </p>
        </section>

        <div className="mb-12">
          <div className="flex mb-4">
            <button
              onClick={() => setActiveCard('skills')}
              className={`flex-1 py-2 px-4 ${activeCard === 'skills' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} rounded-tl-lg rounded-tr-lg`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveCard('education')}
              className={`flex-1 py-2 px-4 ${activeCard === 'education' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} rounded-tl-lg rounded-tr-lg`}
            >
              Education
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-b-lg">
            {activeCard === 'skills' && (
              <div id="skills">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Skills</h2>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Next.js</li>
                  <li>PHP, MySQL</li>
                  <li>Responsive Web Design</li>
                  <li>MySQL</li>
                </ul>
              </div>
            )}
            {activeCard === 'education' && (
              <div id="education">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Education</h2>
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">Liceo de Cagayan University</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Information Communication Technology(ICT)</p>
                  <p className="text-gray-300 text-sm sm:text-base">Graduated 2021</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">Bachelor of Science in Information Technology</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Bachelor of Science in Information Technology</p>
                  <p className="text-gray-300 text-sm sm:text-base">Expected Graduation: 2024</p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">Relevant Coursework</h3>
                  <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                    <li>Web Development</li>
                    <li>Database Management</li>
                    <li>Object-Oriented Programming</li>
                    <li>Data Structures and Algorithms</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => setSelectedProject(project)}>
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">{selectedProject.title}</h3>
              <Image src={selectedProject.image} alt={selectedProject.title} width={400} height={200} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <button onClick={() => setSelectedProject(null)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Close</button>
            </div>
          </div>
        )}

        <section id="contact" className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-300 text-sm sm:text-base">
          <p>&copy; 2023 Joshua Calma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
