import React from 'react'
import {FaShareAlt,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
import f from "aos"
function Teamdata({data}) {
  f.init({duration:1000})

  return (
    <div  className=' flex flex-col flex-wrap lg:flex-nowrap md:flex-row item-center  gap-5 px-4 mt-10 '>
     {data.map((val)=>{
        return <div data-aos="flip-right" className=' relative group '>
            <img className=' rounded-xl' src={val.img}></img>
            <div className='absolute  top-5 right-5 z-20 flex gap-3 flex-col'>
            <div className='bg-[#d4a762] hover:bg-black  flex items-center justify-center h-[40px] w-[40px] rounded-full cursor-pointer'> <FaShareAlt className='text-lg hover:text-[#d4a762] text-black'></FaShareAlt>
            </div>
            <div className='bg-[#d4a762] hover:bg-black opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center h-[40px] w-[40px] rounded-full cursor-pointer'> <FaFacebookF className='text-lg hover:text-[#d4a762] text-black'></FaFacebookF>
            </div>
            <div className='bg-[#d4a762] hover:bg-black opacity-0 group-hover:opacity-100 transition-all duration-1000  flex items-center justify-center h-[40px] w-[40px] rounded-full cursor-pointer'> <FaTwitter className='text-lg hover:text-[#d4a762] text-black'></FaTwitter>
            </div>
            <div className='bg-[#d4a762] hover:bg-black opacity-0 group-hover:opacity-100 transition-all duration-1000  flex items-center justify-center h-[40px] w-[40px] rounded-full cursor-pointer'> <FaInstagram className='text-lg hover:text-[#d4a762] text-black'></FaInstagram>
            </div>
                </div>
            <div className='absolute bottom-0 h-0 group-hover:h-[80px] transition-all duration-1000 z-20 rounded-xl left-0 opacity-0 group-hover:opacity-100 flex bg-black text-white flex-col items-center p-2 w-full lg:w-[312px] '>
                <h1 className='font-[oswald] opacity-0 group-hover:opacity-100 text-2xl text-[#d4a762]'>{val.name}</h1>
                <span>{val.role}</span>
            </div>
        </div>
     })}
    </div>
  )
}

export default Teamdata