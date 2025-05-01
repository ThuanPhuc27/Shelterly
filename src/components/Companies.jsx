import React from 'react'
import Company1 from '../assets/company-logo-1.png'
import Company2 from '../assets/company-logo-2.png'
import Company3 from '../assets/company-logo-3.png'
import Company4 from '../assets/company-logo-4.png'

const Companies = () => {
  return (
    <section className='w-full bg-[#f4f9f9] py-[60px] px-4'>
        <div className='md:max-w-[1100px] mx-auto max-w-[400px] text-center'>
            <h1 className='text-2xl font-extrabold text-[#208486] mb-4'>
                Trusted by Leading Teams Worldwide
            </h1>
            <p className='text-[#536e96] text-lg py-2'>
                Over 25,000 teams trust SHELTERLY to protect their gear in any weather.
            </p>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-6 lg:gap-x-12'>
                <img src={Company1} alt="company1" className="object-contain mx-auto max-h-[50px]" />
                <img src={Company2} alt="company2" className="object-contain mx-auto max-h-[50px]" />
                <img src={Company3} alt="company3" className="object-contain mx-auto max-h-[50px]" />
                <img src={Company4} alt="company4" className="object-contain mx-auto max-h-[50px]" />
            </div>
        </div>
    </section>
  )
}

export default Companies
