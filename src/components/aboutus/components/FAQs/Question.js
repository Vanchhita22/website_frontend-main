import React, { useState } from 'react';
import { questionsData } from '../../constants/data';
import QuestionItem from './QuestionItem';

const Question = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  return (
    <div>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold lg:text-4xl mt-16 font-philosopher md:text-2xl sm:text-xl'>Frequently Asked Questions</h1>
      </div>
      <section className='bg-gray-200 mt-20 grid place-items-center'>
      <div className='px-[40px] max-w-[800px]'>
       {questionsData.map((data, index) =>  {
        return <QuestionItem
         key={index}
          open={index === open}
           question={data.question}
            answer={data.answer}
             toggle={()=>toggle(index)} />
       }
       )
       }
       
      </div>
      </section>
    </div>
  )
}

export default Question