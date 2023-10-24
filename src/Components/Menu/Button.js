import React, { useState } from 'react'
import f from "aos"
function Button({btn,filItem , setFilItem ,food}) {
  f.init({duration:1000})

  const [click,setClick]=useState(null)
  // const [filter,setFilter]=useState()
function handlefilter(l){
  setClick(l)
const fil=food.filter(e=>  e.category === l)
//  setFilter(fil)
//  setFood(filter)
setFilItem(fil)
}
  return (
    <div className='flex justify-center items-center gap-4 lg:gap-20 mt-10 lg:flex-row flex-col'>
       {btn.map((e)=>{
        return<div>
             <button data-aos="flip-down" onClick={()=>handlefilter(e.name)} className={click === e.name? "text-2xl bg-[#d4a762] border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40" : "text-2xl bg-white border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40"}>{e.name}</button> 
        </div>   
           })}
    </div>
  )
}

export default Button