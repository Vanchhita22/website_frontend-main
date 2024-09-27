import React from 'react'
import TankCard from './TankCard';
import { tankservices } from '../../../constants/data';

const TankContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="water-tank-container" className="text-4xl font-bold">WATER TANK</h1>
        </div>
        
        {
     tankservices.map((tankdetail)=> (
        <TankCard key={tankdetail.id} tankdetail={tankdetail}/>
     ))

        }
       
    </div>
  )
}

export default TankContainer