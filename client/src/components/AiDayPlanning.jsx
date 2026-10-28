import React from 'react'

const AiDayPlanning = () => {
  return (
    <div className='container bg-black mx-auto mt-6 grid grid-cols-2 gap-4 p-4 items-center '>
      
      <div className='space-y-2 text-white'>
        <h1>AI Day Planning</h1>
        <h1>Plan Your Day Smarter</h1>
        <p>Let AI organize your tasks, set priorities and build a daily schedule that fits your goals.</p>
      </div>

      <div className='space-y-4 text-white'>
        <div className='border bg-gray-500 p-2 max-w-xl'>
          <h2>Key Features</h2>
          <ul>
            <li>Smart task prioritization</li>
            <li>Automatic time-blocking</li>
            <li>Daily progress insights</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AiDayPlanning
