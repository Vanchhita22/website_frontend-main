 import React from 'react'
 import Card from './Card';
  import { data } from '../constants/data';

const ReviewContainer = () => {
  return (
    <div>
        <div className='mt-8 p-8'>
            <h1 className='text-4xl font-bold justify-center text-center font-philosopher'>OUR GOOGLE REVIEWS</h1>         </div>
        <div className='flex flex-wrap mx-16 justify-center text-center gap-5 mt-6'>

       {

        data.map(reviews => (
          <Card key={reviews.id} reviews={reviews}/>
        ))
       }
         </div>
      
     </div>
   )}
 export default ReviewContainer;

