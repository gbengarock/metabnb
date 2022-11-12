import React from 'react'
import location from '../location'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import setting from '../assets/setting-5.png'

const Place = () => {
    const createLocation = (place) => {
        return (
            <Card key={place.id} name={place.name} img={place.img} price={place.price} distance={place.distance} availability={place.availability} rating={place.rating} />
        )
    }
  return (
    <div className='sm:w-[70%] mx-auto'>
        <div className='items-center sm:my-10'>
            <div className='grid grid-cols-3 text-sm sm:text-xl sm:flex justify-between w-[90%] m-2'>
                <p><Link to='/'>Restaurant</Link></p>
                <p><Link to='/'>Cottage</Link></p>
                <p><Link to='/'>Castle</Link></p>
                <p><Link to='/'>Fantasy city</Link></p>
                <p><Link to='/'>Beach</Link></p>
                <p><Link to='/'>Cabins</Link></p>
                <p><Link to='/'>Off-grid</Link></p>
                <p><Link to='/'>Farm</Link></p>
                <div className='flex justify-between border px-2 sm:px-5 py-1 rounded-lg'>
                    <Link className='sm:mr-5' to='/'>Location</Link>
                    <img src={setting} alt='/' />
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-2 text-center py-8'>
                {location.map(createLocation)}
            </div>                          
        </div>
    </div>
  )
}

export default Place