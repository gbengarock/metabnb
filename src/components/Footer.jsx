import React from 'react'
import logo2 from '../assets/logo2.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineTwitter, AiFillCopyrightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='sm:h-[280px] bg-[#1D1D1E] text-white'>
        <div className='min-w-[90%] lg:min-w-[70%] xl:max-w-[70%] mx-auto'>
            <div className='w-[95%] mx-auto py-10 flex justify-between'>
                <div>
                    <img src={logo2} alt='/' className='w-[100px]' />
                    <div className='flex mt-10 sm:mt-20'>
                        <FaFacebookF color='white' className='mr-3'/>
                        <AiFillInstagram color='white' className='mr-3'/>
                        <AiOutlineTwitter color='white' className='mr-3'/>
                    </div>
                    <p className='flex my-5 text-xs sm:text-base'><AiFillCopyrightCircle size={18} color='white' className='lg:mt-1 lg:mr-2' /> 2022 Metabnb</p>
                </div>

                <div className=''>
                    <p><Link className='text-xs sm:text-lg font-bold' to='/'>Community</Link></p>
                    <p className='mt-5'><Link className='text-xs sm:text-sm' to='/'>NFT</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Tokens</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Landlords</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Discord</Link></p>
                </div>

                <div className=''>
                    <p><Link className='text-xs sm:text-lg font-bold' to='/'>Places</Link></p>
                    <p className='mt-5'><Link className='text-xs sm:text-sm' to='/'>Castle</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Farms</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Beach</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Learn more</Link></p>
                </div>

                <div className=''>
                    <p><Link className='text-xs sm:text-lg font-bold' to='/'>About us</Link></p>
                    <p className='mt-5'><Link className='text-xs sm:text-sm' to='/'>Road map</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Creators</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Career</Link></p>
                    <p><Link className='text-xs sm:text-sm' to='/'>Contact us</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer