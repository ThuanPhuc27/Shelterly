import React from 'react'
import BackpackCard from './BackpackCard'
import { backpacks } from '../data/backpacks'
import Slider from 'react-slick'

const Backpacks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <section className='w-full bg-[#f9f9f9] py-16 px-4'>
      <div className='md:max-w-[1100px] mx-auto text-center'>
        <h1 className='text-3xl font-extrabold text-[#208486]'>
          Popular <span className='text-[#20B486]'>Backpacks</span>
        </h1>
        <p className='text-[#6D737A] py-3 text-lg'>
          Explore our premium collection of backpack covers, designed to keep your gear dry and stylish in any weather.
        </p>
      </div>

      <div className='md:max-w-[1100px] mx-auto gap-5'>
        <Slider {...settings} className='px-5'>
          {backpacks &&
            backpacks.map((backpack) => (
              <BackpackCard
                key={backpack.id}
                title={backpack.title}
                category={backpack.category}
                rating={backpack.rating}
                price={backpack.price}
                linkImg={backpack.linkImg}
              />
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default Backpacks
