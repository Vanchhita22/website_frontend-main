import React from 'react'
import SingleContainer from './single door/SingleContainer'
import DoubleContainer from './double door/DoubleContainer'
import SideContainer from './side by side/SideContainer'



const ServiceContainer = () => {
  return (
  <div className='xl:-mt-20'>
  
     <div className='mx-6 mt-2 md:mr-4 '>
           <img src="./image/header.png"  className="lg:mx-auto md:mx-auto sm:mx-auto xl:mr-8 xl:w-[950px] xl:h-[600px] lg:h-[400px] lg:w-[full] md:h-[400px] md:w-[full] sm:w-[full] sm:h-[300px]  sm:mt-4  rounded-xl   "/>
             </div> 
    <div className='justify-center items-center mr-70'>
        <SingleContainer/>
        <DoubleContainer/>
        <SideContainer/>
   
    </div>
    </div>
  )
}

export default ServiceContainer;