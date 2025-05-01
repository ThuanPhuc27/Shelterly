import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setToggle(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Products', sectionId: 'products' },
    { name: 'Reviews', sectionId: 'reviews' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="px-6 py-4 md:max-w-[1300px] mx-auto flex justify-between items-center h-[80px]">
        {/* Logo + Brand */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <img 
            src={Logo} 
            alt="SHELTERLY Logo" 
            className="h-7 md:h-8 w-auto transition-transform hover:scale-105" 
          />
          <span className="text-xl md:text-2xl font-bold text-[#208486] tracking-wide hover:text-[#186b6b] transition">
            SHELTERLY
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          {navItems.map((item) => (
            <li 
              key={item.sectionId}
              className="hover:text-[#208486] cursor-pointer transition px-2 py-1 rounded hover:bg-[#208486]/10"
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <motion.div 
          whileTap={{ scale: 0.8 }} 
          className="md:hidden cursor-pointer z-60"
          onClick={handleToggle}
        >
          <img src={toggle ? Close : Hamburger} alt="menu toggle" />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-[80px] bg-white w-3/4 h-screen shadow-lg flex flex-col gap-1 p-4 text-gray-800 font-semibold text-base md:hidden"
          >
            {navItems.map((item) => (
              <li 
                key={item.sectionId}
                className="p-3 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;