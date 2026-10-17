import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const date=new Date()
  return (
    <div className='w-full bg-gray-300  mx-auto py-6 mt-6 '>

     <div className='container mx-auto grid grid-cols-4 gap-8 px-6 '>

  <div>
    <h1 className='font-bold mb-4'>studyFlow</h1>
    <p>akjXHJAH BHJABDX</p>
  </div>

  <div>
    <h2 className='font-bold mb-4'>Product</h2>
    <ul className='flex flex-col gap-2'>
      <li>Features</li>
      <li>pricing</li>
      <li>FAQ</li>
    </ul>
  </div>

  <div>
    <h2 className='font-bold mb-4'>Company</h2>
    <ul className='flex flex-col gap-2'>
      <li>About</li>
      <li>Blog</li>
      <li>Career</li>
    </ul>
  </div>

  <div>
    <h2 className='font-bold mb-4'>Support</h2>
    <ul className='flex flex-col gap-2'>
      <li>Contact</li>
      <li>Help center</li>
      <li>study help</li>
    </ul>
  </div>

</div>

<p className='border-t mt-4 text-center pt-4'>{date.getFullYear()}  shkjksj abdhbs</p>
      
    </div>
  )
}

export default Footer
