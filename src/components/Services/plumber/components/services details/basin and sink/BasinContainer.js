import React from 'react'
import BasinCard from './BasinCard';
import { basinservices } from '../../../constants/data';

const BasinContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="wash-basin-container" className="text-4xl font-bold">WASH BASIN REPAIR</h1>
        </div>
       <div >
        {
    basinservices.map((basindetail)=> (
        <BasinCard key={basindetail.id} basindetail={basindetail}/>
     ))

        }
       </div>
    </div>
  )
}

export default BasinContainer;