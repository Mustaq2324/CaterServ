import React from 'react'
import f from "aos"
function Food({food}) {
  f.init({duration:1000})

   
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 p-10 gap-5  '>
       {food.map((e)=>{
        return (
         <div data-aos="fade-down" className='flex justify-center items-center gap-5 '>
           <div>
            <img className='rounded-full' src={e.img}></img>
           </div>
         <div >
         <div className='flex  justify-between p-3'>
          <h1 className='font-[oswald]  text-3xl'>{e.food}</h1>
          <span className='text-[#D4A762] font-bold text-3xl'>{e.price}</span>
          </div>
          <h1 className='border-dashed border-b border-[#D4A762]'></h1>
          <div>
            <p className='text-gray-500 mt-3'>Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
          </div>
         </div>
         </div>
        )
       })}
    </div>
  )
}

export default Food