import React from 'react';
import { motion } from 'framer-motion';
import BackpackCard from './BackpackCard';
import { backpacks } from '../data/backpacks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Backpacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  };

  return (
    <section className='w-full bg-gradient-to-b from-[#f9f9f9] to-white py-20 px-4 md:px-8' id="products">
      <motion.div 
        className='max-w-7xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className='text-center mb-12'>
          <motion.h1 
            className='text-4xl md:text-5xl font-bold text-[#208486] mb-4'
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Popular <span className='text-[#20B486]'>Backpacks</span>
          </motion.h1>
          <motion.p 
            className='text-lg text-gray-600 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our premium collection of backpack covers, designed to keep your gear dry and stylish in any weather.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className='px-2'>
            {backpacks.map((backpack) => (
              <div key={backpack.id} className='px-3 py-4'>
                <BackpackCard
                  id={backpack.id}
                  title={backpack.title}
                  category={backpack.category}
                  rating={backpack.rating.rate}
                  price={backpack.price}
                  linkImg={backpack.linkImg}
                  colors={backpack.colors}
                  isNew={backpack.isNew}
                  reviews={backpack.rating.count}
                  description={backpack.description}
                  shopeeLink={backpack.shopeeLink}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Backpacks;