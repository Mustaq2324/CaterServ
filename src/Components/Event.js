import React, { useState } from 'react'
import servicedata from './servicedata'
import Allevent from './Allevent';
import f from "aos"


function Event() {
  f.init({duration:1000})

  const [d,setD]=useState(true)
    const[click,setClick] =useState(null)
    const [events, setEvents] = useState(servicedata);
    const [filteredEvents, setFilteredEvents] = useState(events);
  
    function handleEvent(category) {
      setD(false)
      setClick(category)
      const filterItem = events.filter(event => {
        return event.category === category;   
      });
  
      setFilteredEvents(filterItem);
    }
  
    function resetFilter() {
      setClick(false)
      setD(true)
      setFilteredEvents(events);
    }
    

  return (
    <div className='mt-20'>
      <div className="flex justify-center mt-10">
        <div data-aos="fade-up" className="border-2 p-2 border-[#D4A762] rounded-3xl flex justify-center items-center w-52 bg-[#FFFCF8]">
          <h5 className="font-semibold text-xl">LATEST EVENTS</h5>
        </div>
      </div>
      <h1 data-aos="fade-down" className="font-['Playball',cursive] text-4xl lg:text-5xl mt-5 text-center">
      Our Social & Professional Events Gallery
      </h1>

      <div data-aos="flip-right" className='flex justify-center items-center gap-4 lg:gap-20 mt-10 flex-col lg:flex-row'>
      <div className={d?"cursor-pointer border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#D4A762]":"border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#FFFCF8]"}>
          <button className="text-2xl" onClick={resetFilter} >All Events</button>
        </div>
      <div className={click === "wedding" ? "border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#D4A762]" : "bg-[#FFFCF8] border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 " }>
          <button className="text-2xl"  onClick={()=>handleEvent("wedding")}>Wedding</button>
        </div>
      <div className={click === "Corporate" ? "border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#D4A762]" : "bg-[#FFFCF8] border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40" }>
          <button className=" text-2xl" onClick={()=>handleEvent("Corporate")}>Corporate</button>
        </div>
      <div className={click === "Cocktail" ? "border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#D4A762]" : "bg-[#FFFCF8] border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40" }>
          <button className=" text-2xl"onClick={()=>handleEvent("Cocktail")}>Cocktail</button>
        </div>
      <div className={click === "Buffet" ? "border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40 bg-[#D4A762]" : "bg-[#FFFCF8] border-2 border-[#D4A762] rounded-3xl p-2 flex justify-center items-center w-40" }>
          <button className=" text-2xl"onClick={()=>handleEvent("Buffet")}>Buffet</button>
        </div>

    
      </div>

      <div data-aos="flip-left" className='grid grid-cols-1 lg:grid-cols-4 place-items-center gap-6 p-5 mx-auto mt-10 container'>
          {
            filteredEvents.map(event=>{
            return    <Allevent event={event}/>
            })
          }
      </div>

    </div>
  )
}

export default Event