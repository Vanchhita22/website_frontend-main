import React from 'react';


function Card({reviews}) {

  return (
     
    <div className='flex flex-wrap mt-8'>
         <div className='cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border border-white shadow-lg h-4/4'>
               <div>
               <div className='flex justify-center items-center mt-5'>
                <img src={reviews.image} width="90" height="90" className=' rounded-full max-w-full h-auto align-middle border-none  '/>
                </div>
                <h1 className='text-neutral-700 font-bold text-xl text-center mt-5 font-philosopher'>{reviews.name}</h1>
              <div className="flex items-center justify-center mt-4">
            <h5 className='w-5 h-5 justify-center items-center flex '>{reviews.ratings}</h5>
    </div>
    <p className='text-md text-black text-center mx-10 mt-5 font-philosopher'>{reviews.desc}</p>
   <div>
               <div className='flex justify-center items-center py-4'>
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="40" height="40" className='rounded-lg  '/>
                <p className='text-sm text-gray-600 text-center mx-1'>{reviews.time}</p>
                </div>
                
                </div>
                
              </div>
              </div>
              </div>
  )
}



export default Card;