import React from 'react'
import {FaSearchPlus} from "react-icons/fa"
const Allevent = ({event}) => {
  return (
    <div>
        <div className='relative  group'>
            <div className='absolute  rounded-3xl   cursor-pointer h-full w-full group-hover:bg-[#D4A762] group-hover:bg-opacity-70  flex text-3xl items-center justify-center'>      
                <FaSearchPlus className='opacity-0 group-hover:opacity-100'/></div>
            <img src={event.img} alt='event-img' className='rounded-3xl'/>
        </div>
    </div>
  )
}
export default Allevent