import React from 'react'
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const QuestionItem = ({open, toggle, question, answer}) => {
  return (
    <div className='pt-[10px]'>
      <div className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded shadow-lg lg:w-[650px] md:w-[550px] sm:w-[350px]'
      onClick={toggle}>
       <p className='lg:text-3xl font-bold font-philosopher text-sky-500 md:text-xl sm:text-lg'>{question}</p>
       <div className='text=[30px]'>

        {open ? <AiOutlineMinus className='h-5 w-5'/> : <AiOutlinePlus className='h-5 w-5'/>}
       </div>
      </div>

<Collapse  isOpened={open}>
  <div className='bg-white px-[50px] pb-[20px] font-bold lg:text-3xl font-philosopher lg:w-[650px] md:w-[550px] sm:w-[350px] md:text-xl sm:text-lg'>{answer}</div>
</Collapse>

    </div>
  )
}

export default QuestionItem