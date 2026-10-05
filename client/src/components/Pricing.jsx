import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  const plans=[
    {
      id:1,
      PricingType:"Free",
      Price:50,
      expiration:"forever",
      feature:[
        "access to basic feature",
        "limited storage space",
        "community support"
      ]
    },

        {
      id:2,
      PricingType:"Pro",
      Price:50,
      expiration:"forever",
      feature:[
        "access to basic feature",
        "limited storage space",
        "community support"
      ]
    },
  ]
  return (
    <div className='container mx-auto text-center mt-6'>
      <h1 className='font-bold'>Pricing</h1>
      <p>pricing details</p>

<div className='grid grid-cols-2 gap-4 max-w-[700px]'>
  {plans.map((data,index)=>(
 <div
  key={index}
  className={`p-6 mb-4 bg-white border rounded-xl ${
    data.PricingType === "Pro"
      ? "border-green-600"
      : "border-gray-300"
  }`}
>

       <p>{data.PricingType}</p>
     <p>{data.Price}/{data.expiration}</p>

     <ul >
     {
      data.feature.map((features,index)=>(
<li key={index} className='flex items-center'><FaCheck className='text-green-700 text-center'/>{features}</li>
      ))
     }
     </ul>

<button className={`btn ${data.PricingType==="Pro"? "bg-green-600":"bg-white"}`}>Get started</button>

    </div>
  ))}
</div>


    </div>



  )
}

export default Pricing
