import React from 'react';

const Stat = () => {
  return (
    <div className='bg-amber-100 mt-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div>
          <h1 className='text-2xl font-bold'>12400+</h1>
          <p className='text-gray-600'>Complete task</p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>12400+</h1>
          <p className='text-gray-600'>Pending task</p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>12400+</h1>
          <p className='text-gray-600'>In progress</p>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>12400+</h1>
          <p className='text-gray-600'>Total task</p>
        </div>
      </div>
    </div>
  );
};

export default Stat
