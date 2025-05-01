import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Rating from './Rating';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const BackpackCard = ({ 
  title, 
  category, 
  rating, 
  price, 
  linkImg, 
  colors = [], 
  isNew = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-60 w-full">
        <img 
          src={linkImg} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          <span className="bg-white text-[#208486] text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Favorite Button */}
        <button 
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-300 ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500 bg-white/80'}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart className={isFavorite ? 'fill-current' : ''} />
        </button>

        {/* Quick Actions (shown on hover) */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="bg-white p-3 rounded-full hover:bg-[#208486] hover:text-white transition-colors">
              <FaEye className="text-lg" />
            </button>
            <button className="bg-white p-3 rounded-full hover:bg-[#208486] hover:text-white transition-colors">
              <FiShoppingCart className="text-lg" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 truncate hover:text-clip">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <Rating rating={rating} />
          <span className="text-xs text-gray-500">{rating.count} reviews</span>
        </div>
        
        {/* Color Variants */}
        {colors.length > 0 && (
          <div className="flex gap-2 mb-3">
            {colors.map((color, index) => (
              <span 
                key={index}
                className="w-5 h-5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
                title={color}
              ></span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-[#208486]">{price}</span>
          <button className="bg-[#208486] hover:bg-[#186b6b] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
            <FiShoppingCart />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BackpackCard;