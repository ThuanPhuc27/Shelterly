import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/logo.png';  // Đảm bảo bạn có logo trong thư mục assets

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo và thông tin liên hệ */}
          <div className="space-y-6">
            <img src={Logo} alt="Logo" className="h-14" />
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-400">Phone: 123-456-7890</p>
            <p className="text-sm text-gray-400">Email: contact@yourdomain.com</p>
          </div>

          {/* Liên kết */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex gap-6 justify-start">
              <a href="#" className="text-white p-4 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white p-4 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white p-4 rounded-full bg-blue-800 hover:bg-blue-900 transition duration-300 ease-in-out">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white p-4 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
