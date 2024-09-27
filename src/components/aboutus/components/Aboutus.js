import React from 'react'
import ReviewContainer from './ReviewContainer'
import { AnalyticData } from '../constants/data'
import { Container } from '../constants/data';
import Question from './FAQs/Question';



const Aboutus = () => {
  return (
    <div>
    <div className= 'p-4 shadow-md w-[full]'>
        <h1 className='text-5xl font-bold p-2 justify-center text-center font-philosopher'>About Us</h1>
    </div>
    
       {
        Container.map((item,id)=> (
            <div key={id}>
            <div className='w-[full] h-[full] border border-slate-200 mt-8 shadow-md py-8'>
            <h1 className='text-4xl font-bold  justify-center text-center font-philosopher mt-8 p-4'>{item.heading}</h1>
            <p className='text-4xl mt-8 mx-16 text-gray-500 font-philosopher'>{item.paragraph} </p>
            </div>
            </div>
        ))
       }
       
        <div className='flex flex-wrap py-8 mx-25 px-8 justify-center items-center'>
        { AnalyticData.map((item, id)=> (
           <div key={id}>
            <div className='mt-16 mx-16 px-8  '>
          <p className='text-5xl text-gray-600 font-bold  '>{item.Value}</p>
                <p className='text-4xl p-2 font-philosopher'>{item.Heading}</p>
                </div>
                </div>
            ))
            
        }
        </div>
       
    <ReviewContainer/>
  <Question/>
     </div>
   );
}

export default Aboutus