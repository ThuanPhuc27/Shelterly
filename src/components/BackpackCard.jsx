import React from 'react'
import Rating from './Rating' // Assuming Rating component works for backpack ratings
import { FaShoppingCart } from 'react-icons/fa' // For the cart icon (optional)

const BackpackCard = ({ title, category, rating, price, linkImg }) => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden my-4 mr-2 relative rounded-lg">
      <img src={linkImg} alt="backpack" className="h-40 w-full object-cover" />
      <div className="p-5">
        <h1 className="py-2 truncate font-semibold">{title}</h1>
        <Rating rating={rating} />
      </div>
      <div className="p-5 text-xl font-bold text-[#208486]">{price}</div>

      {/* Category badge */}
      <div className="absolute top-0 left-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold text-[#208486]">
        {category}
      </div>

      {/* Optionally, add a cart button */}
      <button className="absolute bottom-3 right-3 bg-[#208486] text-white py-2 px-4 rounded-full flex items-center gap-2">
        <FaShoppingCart />
        Review
      </button>
    </div>
  );
};

export default BackpackCard;
