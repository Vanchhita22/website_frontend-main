import React from 'react'
import SingleCard from './SingleCard';
import { singleservices } from '../../../constants/data';

const SingleContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="single-container" className="text-4xl font-bold">SINGLE DOOR REPAIR</h1>
        </div>
       <div >
        {
    singleservices.map((singledetail)=> (
        <SingleCard key={singledetail.id} singledetail={singledetail}/>
     ))

        }
       </div>
    </div>
  )
}

export default SingleContainer;