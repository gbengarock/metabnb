import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/Group.png'
import metaimage from '../assets/metamask.png'
import walletimage from '../assets/wallet.png'
import {IoIosArrowForward} from 'react-icons/io'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [wallet, setWallet] = useState(false);

    function handleClick(){
        setNav(!nav)
    } 

    
    function handleWallet(e){
        setWallet(!wallet)
        
    }
    

  return (
    <div className='sm:min-w-[90%] lg:min-w-[70%] xl:max-w-[70%] mx-auto items-center p-4'>
        {/* Nav */}
        <div className='w-full'>
            <div className='flex w-full justify-between'>
                <div className='flex'>
                    <AiOutlineMenu onClick={handleClick} size={25} className='mt-2 md:hidden z-10 cursor-pointer' />
                    <img src={brandLogo} alt='/' className='w-[100px] lg:w-[188px] h-[20px] lg:h-[32px] m-2'/>
                
                </div>
                
                {/* menu */}
                <div className='sm:text-sm lg:text-base xl:text-xl sm:mx-8 lg:mx-2 my-2'>
                    <ul className='hidden md:flex mt-2'>
                        <li className='sm:mx-2 lg:mx-3'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                            Home
                        </Link></li>
                        <li className='sm:mx-2 lg:mx-3'><Link activeclass="active" to="/places" spy='true' smooth='true' offset={50} duration={500} >
                            Place to stay
                        </Link></li>
                        <li className='sm:mx-2 lg:mx-3'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                            NFTs
                        </Link></li>
                        <li className='sm:mx-2 lg:mx-3'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                            Community
                        </Link></li>
                       
                    </ul>
                </div>

                <div className='my-2'>
                    <button onClick={handleWallet} className='sm:min-w-[120px] sm:h-[48px] px-4 py-2 rounded-lg bg-[#A02279] text-white text-xs sm:text-sm text-center'>Connect wallet</button>

                </div>
            </div>

            {/* mobile */}
            {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> </div>: '' }
           
                <div className={nav ? 'fixed top-0 left-0 w-[300px] duration-300 z-10 h-screen bg-[#A02279]' : 'fixed top-0 left-[-300px] w-[300px] duration-300 z-10 h-screen bg-white'}>
                    <FaTimes onClick={handleClick} size={25} className='absolute left-4 top-5 cursor-pointer' />
                    <nav className='mt-16 ml-1'>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='my-3 font-bold text-white'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                                Home
                            </Link></li>
                            <li className='my-3 font-bold text-white'><Link activeclass="active" to="/places" spy='true' smooth='true' offset={50} duration={500} >
                                Place to stay
                            </Link></li>
                            <li className='my-3 font-bold text-white'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                                NFTs
                            </Link></li>
                            <li className='my-3 font-bold text-white'><Link activeclass="active" to="/" spy='true' smooth='true' offset={50} duration={500} >
                                Community
                            </Link></li>
                        </ul>
                    </nav>
                </div>

            {/* pop-up overlay */}
            {wallet ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> </div>: '' }
            
            <div className={wallet ? 'fixed top-[30%] left-10 lg:left-[30%] w-[300px] sm:w-[600px] z-10 h-[220px] sm:h-[300px] bg-white rounded-2xl' : 'hidden'}>
                
                <div className='w-[90%] mx-auto p-1 sm:p-5'>
                    <div className='flex justify-between border-b-2'>  
                        <h1 className='my-2 text-sm sm:text-2xl font-bold'>Connect Wallet</h1>
                        <FaTimes onClick={handleWallet} size={20} className='cursor-pointer mt-3' />
                    </div>
                    <p className='my-5 text-xs sm:text-base'>Choose your preferred wallet:</p>
                    <div className='p-2 sm:p-3 my-3 border border-[#CFD8DC] rounded-xl bg-[#F8F9FA]'>
                        <Link to='/'>
                            <div className='flex justify-between'>
                                <p className='flex text-xs sm:text-lg font-bold mt-1 sm:mt-0'><img src={metaimage} alt='/' className='w-[20px] sm:w-[30px] mr-5' /> Metamask</p>
                                <IoIosArrowForward className='mt-2' />
                            </div>                        
                        </Link>
                    </div>
                    <div className='p-2 sm:p-3 my-3 border border-[#CFD8DC] rounded-xl bg-[#F8F9FA]'>
                        <Link to='/'>
                            <div className='flex justify-between'>
                                <p className='flex text-xs sm:text-lg font-bold mt-1 sm:mt-0'><img src={walletimage} alt='/' className='w-[20px] sm:w-[30px] mr-5' />WalletConnect</p>
                                <IoIosArrowForward className='mt-2' />
                            </div>                        
                        </Link>
                    </div>
                </div>
            </div>
            
                
        </div>
        
    </div>
  )
}

export default Navbar