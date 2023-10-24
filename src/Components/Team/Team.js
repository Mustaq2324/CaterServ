import React, { useState } from 'react'
import Data from './data'
import Teamdata from './Teamdata'
import f from "aos"

function Team() {
  f.init({duration:1000})

  const [team,setData]=useState(Data)
  return (
    <div>
        <div className=" flex justify-center md:mt-10">
            <div data-aos="fade-up" className="border-2 mt-10  border-[#D4A762] rounded-3xl flex justify-center items-center w-32 bg-[#FFFCF8]">
              <h5 className="font-semibold text-lg">OUR TEAM</h5>
            </div>
          </div>
          <h1 data-aos="fade-down" className="font-['Playball',cursive] text-4xl lg:text-5xl mt-5 text-center">
          We have experienced chef Team
          </h1>
    <Teamdata data={team}/>
    </div>
  )
}

export default Team