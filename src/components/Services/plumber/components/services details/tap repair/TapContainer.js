import React from 'react'
import TapCard from './TapCard';
import { tapservices } from '../../../constants/data';

const TapContainer = () => {
  return (
    <div >
        <div className="flex justify-center items-center mt-10">
        <h1 id="water-tap-container" className="text-4xl font-bold">TAP REPAIR</h1>
        </div>

        {
     tapservices.map((tapdetail)=> (
        <TapCard key={tapdetail.id} tapdetail={tapdetail}/>
     ))

        }
        
    </div>
  )
}

export default TapContainer