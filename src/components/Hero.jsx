import React from 'react'
import heroImage from '../assets/Group4028.png'
import frame1 from '../assets/Frame1.png'

const Hero = () => {
  return (
    <div className='sm:min-w-[90%] lg:min-w-[70%] xl:max-w-[70%] mx-auto items-center p-4 lg:mt-20'>
        <div className='sm:flex'>
            <div className='sm:hidden'>
                <img src={frame1} alt='/' className='w-full'/>
            </div>
            <div className='sm:w-[50%] xl:w-[50%]'>
                <h1 className='text-3xl lg:text-4xl 2xl:text-6xl my-3 lg:my-10'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p className='text-sm sm:text-base lg:text-xl 2xl:text-2xl my-3 lg:my-14'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className='flex lg:my-10'>
                    <input className='sm: w-[200px] lg:w-[390px] lg:h-[54px] border border-[#A3A3A3] py-1 px-3 rounded-tl-lg rounded-bl-lg text-[#BBBBBB] text-sm' placeholder='Search for location' />
                    <button className='lg:w-[230px] lg:h-[54px] bg-[#A02279] py-1 px-3 text-white rounded-tr-lg rounded-br-lg'>Search</button>
                </div>
            </div>

            <div className='hidden sm:flex ml-[5%]'>
                <img src={heroImage} alt='/' className='' />
            </div>
        </div>
    </div>
  )
}

export default Hero