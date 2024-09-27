import React from 'react'
import CostumerSupportCard from './CostumerSupportCard';
import { costumersupport } from '../../constants/data';

const CostumerSupport = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>
     {

        costumersupport.map((support) => (
            <CostumerSupportCard key={support.id} support={support}/>
        ))
     }
      
    </div>
  )
}

export default CostumerSupport