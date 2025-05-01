import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FiStar, FiChevronRight } from 'react-icons/fi';

const FeedBackCard = ({ name, role, feedbackText, avatarImg, rating = 5 }) => {
  // Render star rating
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`${i < rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'} w-5 h-5`}
      />
    ));
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Quote icons */}
      <div className="flex justify-between items-start mb-4">
        <FaQuoteLeft className="text-[#20B486] opacity-20 text-3xl" />
        <div className="flex gap-1">
          {renderStars()}
        </div>
      </div>

      {/* Feedback text */}
      <div className="flex-grow px-2 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          {feedbackText}
        </p>
      </div>

      {/* Author section */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
        <div className="flex items-center space-x-4">
          <img 
            src={avatarImg} 
            alt={name} 
            className="h-12 w-12 rounded-full object-cover border-2 border-[#20B486]/20" 
          />
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeedBackCard;