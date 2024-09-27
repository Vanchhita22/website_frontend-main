import React from 'react'
// import CostumerSupport from './costumer support/CostumerSupport'
import FrequentlyContainer from './services details/FrequentlyContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ServicePagePlumber from './ServicePagePlumber'




const PlumberService = () => {
  return (
    <div>
   <div className=' mx-20 p-2 mt-10'>
      <h1 className='font-bold text-4xl '>Plumber</h1>
      
    </div>
    <div className='flex mx-20  '>
    
    <FontAwesomeIcon className='text-4xl' icon={faStar} />
    <h1 className='text-4xl'>4.1 (4.3M bookings)</h1>
    </div>
   
   {/* <ServicePage/> */}
   
    {/* <CostumerSupport/> */}
  
  
    <div className='xl:flex  xl:flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap  justify-between   mt-10   '>
   <div>
   <ServicePagePlumber />
   
   </div>
    
   
    
    < FrequentlyContainer />
   
    </div>
   
      {/* <CostumerSupport/>  */}
    </div>
  )
}

export default PlumberService