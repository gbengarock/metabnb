import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card = (props) => {
  return (
    <div className=''>
        <div className='border sm:m-5 text-xs p-2 rounded-2xl'>
            <img className='inline-block w-full cursor-pointer p-2 hover:scale-105 ease-in-out duration-300' src={props.img} alt='/' />  
            <div className='flex justify-between mx-3 my-1'>
                <p>{props.name}</p>
                <p className='font-bold'>{props.price}</p>
            </div>  
            <div className='flex justify-between mx-3 my-1'>
                <p>{props.distance}</p>
                <p>{props.availability}</p>
            </div>
            <div className='flex mx-3 my-1'>
                <p><AiFillStar color='#A02279' className='mr-1' /></p>
                <p><AiFillStar color='#A02279' className='mr-1' /></p>
                <p><AiFillStar color='#A02279' className='mr-1' /></p>
                <p><AiFillStar color='#A02279' className='mr-1' /></p>
                <p><AiFillStar color='#A02279' className='mr-1' /></p>
            </div>
        </div> 
    </div>
  )
}

export default Card