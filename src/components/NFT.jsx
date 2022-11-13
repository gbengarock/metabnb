import React from 'react'
import nftframe from '../assets/nftframe.png'

const NFT = () => {
  return (
    <div className='h-[600px] lg:h-[800px] bg-[#A02279]'>
        <div className='max-w-[90%] lg:max-w-[70%] h-[60%] sm:flex mx-auto sm:py-12 lg-py-24'>
            <div className='text-white lg:w-[30%] lg:mr-[20%]'>
                <h1 className='text-2xl sm:text-5xl font-bold py-5 sm:my-16'>Metabnb NFTs</h1>
                <p className='text-sm sm:text-xl my-5 sm:my-16'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                <a className='text-xs sm:text-sm text-center text-[#A02279] bg-white rounded-lg p-2 sm:p-3' href='/'>Learn more</a> 
            </div>
            <div>
                <img src={nftframe} alt='/' className='w-[90%] sm:w-[1480px] lg:w-[100%] mt-24' />
            </div>
        </div>
    </div>
  )
}

export default NFT