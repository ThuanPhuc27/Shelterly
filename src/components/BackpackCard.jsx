import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaEye } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating'; // Tùy chỉnh component này hoặc thay bằng sao cứng

const BackpackCard = ({ 
  id,
  title, 
  category, 
  rating, 
  price, 
  linkImg, 
  reviews,
  description,
  colors = [], 
  isNew = false,
  shopeeLink
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Shelterly/product/${id}`, {
      state: {
        product: { id, title, category, rating, reviews, description, price, linkImg, colors, isNew, shopeeLink }
      }
    });
  };

  const handleBuyNow = () => {
    // Redirect to Shopee product page
    window.location.href = shopeeLink;
  };

  return (
    <motion.div 
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-60 w-full">
        <img 
          src={linkImg} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          onClick={handleClick}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>}
          <span className="bg-white text-[#208486] text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>
        {/* Hover Actions */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="bg-white p-3 rounded-full hover:bg-[#208486] hover:text-white transition-colors" onClick={handleClick}
            >
              <FaEye />
            </button>
            <button className="bg-white p-3 rounded-full hover:bg-[#208486] hover:text-white transition-colors" onClick={handleBuyNow}
            >
              <FiShoppingCart />
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3
          className="font-semibold text-lg mb-1 truncate cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#20B486]"
          onClick={handleClick}
        >
          {title}
        </h3>
        <div className="flex justify-between items-center mb-2">
          <Rating rating={rating} />
          <span className="text-xs text-gray-500">{reviews} reviews</span>
        </div>
        {colors.length > 0 && (
          <div className="flex gap-2 mb-3">
            {colors.map((color, idx) => (
              <span key={idx} className="w-5 h-5 rounded-full border border-gray-200" style={{ backgroundColor: color }} />
            ))}
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-[#208486]">{price}</span>
          <button className="bg-[#208486] hover:bg-[#186b6b] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors" onClick={handleBuyNow}
          >
            <FiShoppingCart />
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BackpackCard;
