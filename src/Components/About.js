import about from "../img/about.jpg";
import { FaShare,FaArrowRight} from "react-icons/fa";
import {AiOutlineArrowUp} from "react-icons/ai"
import f from "aos"
import { useEffect, useState } from "react";
function About() {
  f.init({duration:1000})
  const[top,setTop]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        setTop(true)
      }
      else{
        setTop(false)
      }
    })
  })
const scrollup=()=>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
}
  return (
    <div className="container mt-5 ">
     {top ? <div onClick={scrollup} className="bg-[#d4a762] md:p-3 md:text-xl rounded-full flex items-center justify-center fixed z-[99] bottom-10 right-10 cursor-pointer  p-2">
      <AiOutlineArrowUp className="text-black text-lg md:text-xl"/>
      </div> :<div></div>}
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="flex  items-center justify-center md:p-20 ">
          <img data-aos="zoom-in" src={about} className="rounded-xl  "/>
        </div>
        <div  className="ps-7 flex flex-col justify-center gap-7 lg:gap-8 mt-6 lg:mt-0">
          <div data-aos="zoom-in-up"  className="border-2 border-[#D4A762] rounded-xl flex justify-center w-40 bg-[#FFFCF8]">
            <h5  className="font-semibold text-xl">ABOUT US</h5>
          </div>
          <div className="flex flex-col gap-5">
            <h1 data-aos="zoom-in-down" data-aos-delay='700' className="font-['Playball',cursive] text-3xl lg:text-5xl">
              Trusted By 200 + satisfied clients
            </h1>
            <p data-aos="zoom-in-up" data-aos-delay='800' className="text-gray-500 text-lg">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor iesdein reprehendeerit in
              voluptate velit esse cillum dolore.
            </p>
          </div>
         <div className="flex  items-start gap-2  md:gap-4 flex-col md:flex-row">
         <div data-aos="zoom-up" data-aos-delay='900' className="flex gap-4 flex-col  text-xl">
            <div className="flex items-center  gap-2">
              <FaShare className="text-[#D4A762]" />
              <p className="">Fresh and Fast food Delivery</p>
            </div>
            <div className="flex items-center text-xl  gap-2">
              <FaShare className="text-[#D4A762]" />
              <p  className="">24/7 Customer Support</p>
            </div>
          </div>
          <div data-aos="zoom-up" data-aos-delay='1000' className="flex flex-col text-xl gap-4 mt-2 md:mt-0">
            <div className="flex items-center  gap-2">
              <FaShare className="text-[#D4A762]" />
              <p  className="">Easy Customization Options</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <FaShare className="text-[#D4A762]" />
              <p  >Delicious Deals for Delicious Meals</p>
            </div>
          </div>
         </div>
          <button data-aos="flip-up" data-aos-delay='1000' className="w-52 h-14 bg-[#D4A762] text-black flex items-center justify-center rounded-3xl text-xl hover:bg-black hover:text-[#D4A762] hover:scale-[1.1] gap-2">
            About us <FaArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
