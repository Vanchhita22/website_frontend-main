import React from 'react'
import { sidebysideservices } from '../../../constants/data';
import SideCard from './SideCard';

const SideContainer = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
        <h1 id="side-by-side-container" className="text-4xl font-bold">SIDE BY SIDE DOOR </h1>
        </div>
       <div >
        {
   sidebysideservices.map((sidedetail)=> (
        <SideCard key={sidedetail.id} sidedetail={sidedetail}/>
     ))

        }
       </div>
    </div>
  )
}

export default SideContainer;