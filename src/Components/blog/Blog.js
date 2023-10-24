import React, { useState } from 'react'
import data from './data'
import Blogdata from './Blogdata'
import f from "aos"
function Blog() {
  f.init({duration:1000})

    const[dat,useDat]=useState(data)
  return (
  <div>
        <div className=" flex  justify-center md:mt-10">
            <div data-aos="fade-up" className="border-2 mt-10  border-[#D4A762] rounded-3xl flex justify-center items-center w-32 bg-[#FFFCF8]">
              <h5 className="font-semibold text-lg">OUR BLOG</h5>
            </div>
          </div>
          <h1 data-aos="fade-down" className="font-['Playball',cursive] text-4xl lg:text-5xl mt-5 text-center">
          Be First Who Read News
          </h1>
          <Blogdata data={dat}/>
    </div>
  )
}

export default Blog