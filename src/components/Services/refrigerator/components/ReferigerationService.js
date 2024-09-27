import React from 'react'
// import CostumerSupport from './costumer support/CostumerSupport'
// import FrequentlyContainer from './frequentlybooked/FrequentlyContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ServicePage from './ServicePage'
import ServiceContainer from './service details/ServiceContainer'
import CostumerSupport from './costumer support/CostumerSupport'
// import ServiceContainer from './ServiceContainer'



const ReferigerationService = () => {
  return (
    <div>
    <div className=' mx-20 p-2 mt-10'>
      <h1 className='font-bold text-4xl '>Refrigerator Repair</h1>
      
    </div>
    <div className='flex mx-20  '>
    
    <FontAwesomeIcon className='text-2xl' icon={faStar} />
    <h1 className='text-3xl'>4.1 (2.3M bookings)</h1>
    </div>
   
  
  
    <div className='xl:flex  xl:flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap  justify-between   mt-10   '>
   <div>
   <ServicePage />
   
   </div>
    
   
    

    <ServiceContainer/>
   
    </div>
   
 <CostumerSupport/>


    </div>
  )
}

export default ReferigerationService