import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#208486] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1 - Branding */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={Logo} 
                alt="Shelterly Logo" 
                className="h-14 w-14 object-contain rounded-lg shadow-md"
                loading="lazy"
              />
              <div>
                <h2 className="text-xl font-bold tracking-tight">SHELTERLY</h2>
                <p className="text-sm text-white/80 italic">PROTECTION FOR YOUR BACKPACK</p>
              </div>
            </div>
            <p className="text-white/80 text-sm text-center md:text-left">
              We provide high-quality backpack protection solutions with the most advanced technology.
            </p>
          </div>

          {/* Column 2 - Contact Information */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/20">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-white/80" />
                <span className="text-sm text-white/80">279 Nguyen Tri Phuong, Ward 8, District 10, HCMC</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-white/80" />
                <span className="text-sm text-white/80">ecommercest3@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-white/80" />
                <span className="text-sm text-white/80">0855 111 237</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-white/80" />
                <span className="text-sm text-white/80">08:00 – 22:00 (Monday – Friday)</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/20">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: FaFacebook, name: "Facebook", link: "https://www.facebook.com/profile.php?id=61575510338154"},
                { icon: FaTwitter, name: "Twitter", link: "https://www.facebook.com/profile.php?id=61575510338154" },
                { icon: FaLinkedin, name: "LinkedIn", link: "https://www.facebook.com/profile.php?id=61575510338154" },
                { icon: FaYoutube, name: "YouTube", link: "https://www.facebook.com/profile.php?id=61575510338154" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
            
            <h4 className="text-sm font-medium mb-2">Customer Support</h4>
            <p className="text-white/80 text-sm">
              Our team is available to assist you with any questions about our products and services.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/70">
          <p>&copy; {currentYear} SHELTERLY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;