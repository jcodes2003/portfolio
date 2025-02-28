import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ theme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
  return (
    <motion.header
      className={`${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-md fixed top-0 left-0 right-0 z-10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-4">
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
              priority
            />
          </motion.div>
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-blue-50 hover:bg-blue-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </motion.button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6">
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
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`absolute top-full left-0 right-0 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto`}
            >
              <ul className="py-2 px-4 space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block py-2 text-sm font-medium hover:text-yellow-500 transition-colors ${
                        theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                      }`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
