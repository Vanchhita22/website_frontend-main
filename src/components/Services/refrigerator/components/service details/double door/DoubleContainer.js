import React from 'react'

import { doubleservices } from '../../../constants/data';
import DoubleCard from './DoubleCard';

const DoubleContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="double-container"  className="text-4xl font-bold">DOUBLE DOOR REPAIR</h1>
        </div>
       <div >
        {
   doubleservices.map((doubledetail)=> (
        <DoubleCard key={doubledetail.id} doubledetail={doubledetail}/>
     ))

        }
       </div>
    </div>
  )
    }

  export default DoubleContainer;