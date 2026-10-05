import React from 'react'
import { FaCheck } from "react-icons/fa";
const Progress = () => {
  return (
    <div className='container mx-auto'>
          <div className='w-74 border border-black mx-auto rounded-md bg-white space-y-2'>
        <div className='flex justify-between py-2 px-2'>
          <h1 className='text-sm'>Todays progress</h1>
          <h1 className='font-bold'>66%</h1>
     
        </div>
             <progress className="progress progress-accent w-69 " value="66" max="100"></progress>
        <ul className='space-y-3 px-2'>
          <li className='flex items-center gap-5 border border-black px-2'><FaCheck />solve 5 math question</li>
          <li className='flex items-center gap-5 border border-black px-2'><FaCheck />solve 5 math question</li>
          <li className='flex items-center gap-5 border border-black px-2'><FaCheck />solve 5 math question</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Progress
