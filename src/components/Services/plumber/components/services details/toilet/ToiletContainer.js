import React from 'react'
import ToiletCard from './ToiletCard';
import { toiletservices } from '../../../constants/data';

const ToiletContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="toilet-container"className="text-4xl font-bold">TOILET REPAIR</h1>
        </div>

        {
    toiletservices.map((toiletdetail)=> (
        <ToiletCard key={toiletdetail.id} toiletdetail={toiletdetail}/>
     ))

        }
        
    </div>
  )
}

export default ToiletContainer;