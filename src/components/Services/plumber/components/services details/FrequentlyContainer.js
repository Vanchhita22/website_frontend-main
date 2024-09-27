import React from 'react'
import TankContainer from './water tank/TankContainer'
import TapContainer from './tap repair/TapContainer'
import BasinContainer from './basin and sink/BasinContainer'
import ToiletContainer from './toilet/ToiletContainer'
import BathContainer from './bath fitting/BathContainer'


const FrequentlyContainer = () => {
  return (
    <div className='xl:-mt-20'>
  
  <div className='mx-6 mt-2 md:mr-4 '>
           <img src="./image/plumber.png"  className="lg:mx-auto md:mx-auto sm:mx-auto xl:mr-8 xl:w-[950px] xl:h-[600px] lg:h-[400px] lg:w-[full] md:h-[400px] md:w-[full] sm:w-[full] sm:h-[300px]  sm:mt-4  rounded-xl   "/>
             </div> 
    <div className='justify-center items-center mr-70'>
    <TankContainer/>
    <TapContainer/>
    <BasinContainer/>
    <ToiletContainer/>
    <BathContainer/>
    </div>
    </div>
  )
}

export default FrequentlyContainer