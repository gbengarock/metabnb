import React from 'react'
import location from '../location'
import Card from '../components/Card'

const Locations = () => {
    const createLocation = (place) => {
        return (
            <Card key={place.id} name={place.name} img={place.img} price={place.price} distance={place.distance} availability={place.availability} rating={place.rating} />
        )
    }
  return (
    <div className='sm:min-w-[90%] lg:min-w-[70%] xl:max-w-[80%] 2xl:max-w-[70%] mx-auto'>
        <div className='items-center'>
        <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold text-center'>Inspiration for your next adventure</h1>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-center py-8'>
                {location.map(createLocation).slice(0,8)}
            </div>                          
        </div>
    </div>
  )
}

export default Locations