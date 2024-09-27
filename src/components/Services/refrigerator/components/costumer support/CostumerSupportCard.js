import React from 'react'

const CostumerSupportCard = ({support}) => {
  return (
    <div className=' mt-12 flex justify-center items-center '>
      
        <div className="max-w-sm  overflow-hidden bg-white shadow-lg rounded-lg  cursor-pointer">
  <img className="w-[150px] h-[150px] mx-8 mt-4 items-center" src={support.image} alt="image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{support.name}</div>
        
    </div>
    </div>
    </div>
   
  )
}

export default CostumerSupportCard