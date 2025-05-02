import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f5fdfa] to-white py-20 px-4 md:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#208486] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors ${activeIndex === index ? 'bg-[#20B486]/10' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-[#208486] transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600">
                      {faq.answer}
                      {index === 0 && (
                        <div className="mt-4 p-3 bg-[#e9f8f3] rounded-lg text-sm flex items-start">
                          <span className="mr-2">💡</span>
                          <span>Pro Tip: Test waterproofing by pouring water on the surface - it should bead and roll off completely.</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center flex justify-center items-center align-middle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mr-4">Still have questions?</p>
          <button className="bg-[#208486] hover:bg-[#186b6b] text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"  onClick={() => scrollToSection('contact')}>
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;