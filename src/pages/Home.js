import React from 'react'
import Band from '../components/Band'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Navbar from '../components/Navbar'
import NFT from '../components/NFT'

const Home = () => {
    
  return (
    <div className=''>
        <Navbar />
        <Hero />
        <Band />
        <Locations />
        <NFT />
         
    </div>
  )
}

export default Home