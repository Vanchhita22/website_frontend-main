import React from 'react'
import BathCard from './BathCard';
import { bathservices } from '../../../constants/data';

const BathContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="bath-container" className="text-4xl font-bold">BATH FITTING </h1>
        </div>

        {
    bathservices.map((bathdetail)=> (
        <BathCard key={bathdetail.id} bathdetail={bathdetail}/>
     ))

        }
        
    </div>
  )
}

export default BathContainer;