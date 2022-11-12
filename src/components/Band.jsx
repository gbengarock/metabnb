import React from 'react'
import token1 from '../assets/token1.png'
import token2 from '../assets/token2.png'
import token3 from '../assets/token3.png'

const Band = () => {
  return (
    <div>
        <div className='bg-[#A02279] w-full p-2 my-5 sm:my-16'>
            <div className='sm:w-[70%] flex mx-auto justify-between'>
                <img src={token1} alt='/' className='w-[70px] sm:w-[140px]' />
                <img src={token2} alt='/' className='w-[70px] sm:w-[140px]' />
                <img src={token3} alt='/' className='w-[70px] sm:w-[140px]' />
            </div>

        </div>
    </div>
  )
}

export default Band