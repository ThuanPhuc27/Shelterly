import React from 'react'
import BagImage from '../assets/bag.gif' // Thay ảnh này bằng ảnh liên quan đến túi của bạn
import { FaShoppingBag } from 'react-icons/fa' // Thêm biểu tượng liên quan đến túi
import { FaUsers } from 'react-icons/fa' // Biểu tượng người dùng

const Achievement = () => {
  return (
    <section className='w-full bg-white py-12'>
      <div className='md:max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8'>
        {/* Left Section */}
        <div className='flex flex-col justify-start gap-8'>
          <h1 className='text-3xl font-semibold text-center md:text-left'>
            <span className='text-[#208486]'>About us</span>
          </h1>
          <p className='text-[#536e96] text-lg text-center md:text-left'>
          SHELTERLY is a pioneering brand specializing in smart backpack rain covers – an optimal solution to protect backpacks and personal belongings from unpredictable weather, especially during the rainy season.
          </p>

          {/* Achievements Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Orders */}
            <div className="flex items-center justify-center md:justify-start gap-4 py-4">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaShoppingBag size={30} style={{ color: '#1a9068' }} />
              </div>
              <div>
                <h1 className='text-2xl font-semibold'>10,000 +</h1>
                <p className='text-[#60737a]'>Orders Completed</p>
              </div>
            </div>
            {/* Happy Customers */}
            <div className="flex items-center justify-center md:justify-start gap-4 py-4">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaUsers size={30} style={{ color: '#1a9068' }} />
              </div>
              <div>
                <h1 className='text-2xl font-semibold'>5,000 +</h1>
                <p className='text-[#60737a]'>Happy Customers</p>
              </div>
            </div>
            {/* New Designs */}
            <div className="flex items-center justify-center md:justify-start gap-4 py-4">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaShoppingBag size={30} style={{ color: '#1a9068' }} />
              </div>
              <div>
                <h1 className='text-2xl font-semibold'>50 +</h1>
                <p className='text-[#60737a]'>New Designs</p>
              </div>
            </div>
            {/* Stores */}
            <div className="flex items-center justify-center md:justify-start gap-4 py-4">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <FaShoppingBag size={30} style={{ color: '#ed4459' }} />
              </div>
              <div>
                <h1 className='text-2xl font-semibold'>20 +</h1>
                <p className='text-[#60737a]'>Retail Stores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className='flex justify-center items-center'>
          <img src={BagImage} alt="Bag Products" className='w-[80%] md:w-full rounded-xl' />
        </div>
      </div>
    </section>
  )
}

export default Achievement
