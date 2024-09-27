import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServicePage = () => {
  return (
    <div className=' flex justify-center items-center flex-wrap  '>
      
    <div>
    <div className=" xl:fixed  flex flex-wrap  justify-center items-center xl:w-[20%] lg:w-[full] h-[full] md:w-[full] sm:w-[90%] border border-gray-300 xl:mx-16 md:mr-4 sm:mr-4 md:mx-4 sm:mx-4 rounded-xl  ">
    <div>
    <h1 className=" flex justify-center items-center text-4xl  mt-2">Select a service</h1>
    </div>
      <div className='flex flex-wrap justify-center items-center mt-5 gap-2 mx-2 p-4  '>
     
        <div className='hover:underline'>
        <AnchorLink href='#single-container'><img src="./image/singledoorf.png" className=' flex justify-center items-center w-[50px] h-[50px] border-none    '/></AnchorLink>
                <h1 className='p-2 text-md '>Single door</h1>
                </div>
                <div className='hover:underline'>

                
                <AnchorLink href='#double-container'><img src='./image/doubledoorf.jpg' className=' flex justify-center items-center w-[50px] h-[50px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-md '>Double door</h1>
                </div>
                <div className='hover:underline'>

                <AnchorLink href='#side-by-side-container'><img src="./image/sbys.jpg"  className=' flex justify-center items-center w-[50px] h-[50px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-md '>Side by Side</h1>
                </div>
               
                </div>
              
        </div>
        </div>
        {/* <div className='mx-6 mt-2'>
          <img src="./image/plumber.png"  className="xl:w-[300px] xl:h-[200px] lg:h-[400px] lg:w-[900px] md:h-[400px] md:w-[700px] sm:w-[400px] sm:h-[300px]rounded-lg -mt-2 "/>
            </div>  */}
        </div>
  )
}

export default ServicePage