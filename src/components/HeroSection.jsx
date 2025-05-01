import React from 'react'
import bgImg from '../assets/bg.jpg'

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#e6f4f4] py-16 px-4 mt-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-[#208486] text-4xl md:text-5xl font-extrabold leading-tight">
            PROTECTION FOR YOUR BACKPACK
          </p>
          <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
            Stay dry and ready — with <span className="text-[#208486] font-bold">SHELTERLY</span>, the smart rain cover for backpacks.
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Lightweight, waterproof, and stylish — designed to protect your essentials in any weather.
          </p>

          {/* CTA Button */}
          <div>
            <button className="bg-[#208486] text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#186b6b] transition duration-300 shadow-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full">
          <img
            src={bgImg}
            alt="hero"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
