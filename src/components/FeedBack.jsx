import React from 'react'
import Slider from 'react-slick'
import FeedBackCard from './FeedBackCard'

const feedbackData = [
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    feedbackText: "The SHELTERLY rain cover was a game-changer during the monsoon season. I could finally protect my backpack and keep my belongings dry even in the heaviest downpours!",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png", 
    quotationImg: "https://getdrawings.com/free-icon/quotation-marks-icon-57.png"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    feedbackText: "I’ve tried multiple rain covers, but SHELTERLY is by far the most durable and stylish option for keeping my laptop and books dry.",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    quotationImg: "https://getdrawings.com/free-icon/quotation-marks-icon-57.png"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    feedbackText: "I’ve tried multiple rain covers, but SHELTERLY is by far the most durable and stylish option for keeping my laptop and books dry.",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    quotationImg: "https://getdrawings.com/free-icon/quotation-marks-icon-57.png"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    feedbackText: "I’ve tried multiple rain covers, but SHELTERLY is by far the most durable and stylish option for keeping my laptop and books dry.",
    avatarImg: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    quotationImg: "https://getdrawings.com/free-icon/quotation-marks-icon-57.png"
  },
];

const FeedBack = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
    ]
  }

  return (
    <section className='w-full bg-gray-50 py-24 px-4'>
      <div className='md:max-w-[1100px] m-auto'>
        <h1 className='text-4xl font-bold text-center text-[#20B486] py-6'>Student <span className="text-gray-800">Feedback</span></h1>
        <p className='text-gray-600 text-center py-2 mb-8'>What our users say about their experience with our product.</p>
        <Slider {...settings}>
          {feedbackData.map((feedback, index) => (
            <div className="flex justify-center">
              <FeedBackCard
                key={index}
                name={feedback.name}
                role={feedback.role}
                feedbackText={feedback.feedbackText}
                avatarImg={feedback.avatarImg}
                quotationImg={feedback.quotationImg}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FeedBack;
