import React from 'react'

const goal = () => {
  return (

    
    <div>

      <div className='flex items-center justify-between mb-8'>

        <div>
          <h1 className='text-3xl'>Goal</h1>
          <p>set your goal</p>
        </div>

         <div>
          <button className='btn btn-primary'>Add Goal</button>
         </div>
        
      </div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Xsmall Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default goal
