import React from 'react';
import { motion } from 'framer-motion';
import BagImage from '../assets/bag.gif';
import { FaShoppingBag, FaUsers, FaStore, FaPalette } from 'react-icons/fa';

const Achievement = () => {
  const achievements = [
    { 
      icon: <FaShoppingBag size={24} className="text-[#1a9068]" />,
      value: "10,000+",
      label: "Orders Completed",
      color: "#e9f8f3"
    },
    { 
      icon: <FaUsers size={24} className="text-[#1a9068]" />,
      value: "5,000+",
      label: "Happy Customers",
      color: "#e9f8f3"
    },
    { 
      icon: <FaPalette size={24} className="text-[#208486]" />,
      value: "50+",
      label: "New Designs",
      color: "#e6f4f4"
    },
    { 
      icon: <FaStore size={24} className="text-[#ed4459]" />,
      value: "20+",
      label: "Retail Stores",
      color: "#feecee"
    }
  ];

  return (
    <section className='w-full bg-gradient-to-b from-white to-[#f8fbfb] py-16 md:py-24 px-4 md:px-8' id="about">
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
        {/* Left Section */}
        <motion.div 
          className='flex flex-col gap-8'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h1 
              className='text-4xl md:text-5xl font-bold text-[#208486] mb-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className='text-[#20B486]'>Us</span>
            </motion.h1>
            <motion.p 
              className='text-lg text-gray-600 leading-relaxed'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              SHELTERLY is a pioneering brand specializing in smart backpack rain covers – an optimal solution to protect backpacks and personal belongings from unpredictable weather, especially during the rainy season.
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <motion.div 
            className='grid grid-cols-2 gap-4 md:gap-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md"
                style={{ backgroundColor: item.color }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-800'>{item.value}</h3>
                  <p className='text-gray-600 text-sm'>{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section with Image */}
        <motion.div 
          className='relative'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#208486]/10 to-[#20B486]/10 rounded-3xl rotate-1 -z-10"></div>
          <img 
            src={BagImage} 
            alt="SHELTERLY backpack covers" 
            className='w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform transition-all hover:scale-[1.02]' 
          />
          <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="font-bold text-[#208486]">SHELTERLY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievement;