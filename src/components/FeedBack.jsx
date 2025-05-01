import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import FeedBackCard from './FeedBackCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const feedbackData = [
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    feedbackText: "The SHELTERLY rain cover was a game-changer during the monsoon season. I could finally protect my backpack even in the heaviest downpours!",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    rating: 5
  },
  {
    name: "Robert Johnson",
    role: "Outdoor Enthusiast",
    feedbackText: "As someone who hikes frequently, SHELTERLY has been a lifesaver. It's lightweight yet incredibly durable against wind and rain.",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Student",
    feedbackText: "I love how stylish the design is while being completely waterproof. My textbooks and laptop stay dry no matter how hard it rains!",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    rating: 4
  },
  {
    name: "Michael Brown",
    role: "Daily Commuter",
    feedbackText: "The quick-release mechanism makes it so easy to use. I can put it on in seconds when the weather suddenly changes.",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/9210/9210952.png",
    rating: 5
  }
];

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='w-full bg-gradient-to-b from-white to-[#f5fdfa] py-20 px-4 md:px-8' id="reviews">
      <motion.div 
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className='text-center mb-12'
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className='text-4xl md:text-5xl font-bold text-[#20B486] mb-4'>
            Customer <span className="text-gray-800">Testimonials</span>
          </h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Hear what our customers say about their experience with SHELTERLY
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className='px-4'>
            {feedbackData.map((feedback, index) => (
              <div key={index} className='px-3 py-4'>
                <FeedBackCard
                  name={feedback.name}
                  role={feedback.role}
                  feedbackText={feedback.feedbackText}
                  avatarImg={feedback.avatarImg}
                  rating={feedback.rating}
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='bg-white p-6 rounded-xl shadow-sm text-center'>
            <div className='text-3xl font-bold text-[#20B486]'>98%</div>
            <div className='text-gray-600'>Satisfaction Rate</div>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-sm text-center'>
            <div className='text-3xl font-bold text-[#20B486]'>10K+</div>
            <div className='text-gray-600'>Happy Customers</div>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-sm text-center'>
            <div className='text-3xl font-bold text-[#20B486]'>4.9/5</div>
            <div className='text-gray-600'>Average Rating</div>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-sm text-center'>
            <div className='text-3xl font-bold text-[#20B486]'>50+</div>
            <div className='text-gray-600'>Cities Covered</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeedBack;