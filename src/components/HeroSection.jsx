import React from 'react';
import bgImg from '../assets/bg.png';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
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


  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#e6f4f4] py-20 px-4 md:py-28" id="home" >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#208486]/10 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-72 h-72 rounded-full bg-[#208486]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text content */}
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#208486] leading-tight"
              variants={itemVariants}
            >
              PROTECTION  FOR <br />YOUR  BACKPACK
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700"
              variants={itemVariants}
            >
              Stay dry and ready — with <span className="text-[#208486] font-bold">SHELTERLY</span>, the smart rain cover for backpacks.
            </motion.p>
            
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              Lightweight, waterproof, and stylish — designed to protect your essentials in any weather.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <button className="relative overflow-hidden bg-[#208486] text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:bg-[#186b6b] transition-all duration-300 shadow-lg hover:shadow-xl group" onClick={() => scrollToSection('products')}
              >
                <span className="relative z-10">Shop Now</span>
                <span className="absolute inset-0 bg-[#186b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

              <img
                src={bgImg}
                alt="SHELTERLY backpack cover in action"
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110"
              />


          </motion.div>


          </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;