import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="p-4 md:max-w-[1300px] max-w-[400px] mx-auto flex justify-between items-center h-[80px]">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="SHELTERLY Logo" className="h-7 md:h-8" />
          <span className="text-xl md:text-2xl font-bold text-[#208486] tracking-wide">SHELTERLY</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <li className="hover:text-[#208486] cursor-pointer transition">Home</li>
          <li className="hover:text-[#208486] cursor-pointer transition">About</li>
          <li className="hover:text-[#208486] cursor-pointer transition">Products</li>
          <li className="hover:text-[#208486] cursor-pointer transition">Reviews</li>
          <li className="hover:text-[#208486] cursor-pointer transition">Contact</li>
        </ul>

        {/* Hamburger Button */}
        <motion.div whileTap={{ scale: 0.8 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
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
            className="absolute right-0 top-[80px] bg-white w-3/4 h-screen shadow-lg flex flex-col gap-2 p-6 text-gray-800 font-semibold text-base md:hidden rounded-l-lg"
          >
            <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">Home</li>
            <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">About</li>
            <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">Products</li>
            <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">Reviews</li>
            <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
