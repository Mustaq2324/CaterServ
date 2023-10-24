import { FaUsers,FaUsersGear,FaCheck,FaCirclePlay } from "react-icons/fa6";
import fact from "../img/fact.jpg";
import Countup from "react-countup"
import Scrolltrigger from "react-scroll-trigger"
import { useState } from "react";
import f from "aos"
function Count() {
  f.init({duration:1000})
  const [counteron,setCounterOn]=useState(false)
  return (
    <div className=" mt-5  ">
      <div className="container px-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
         <div className="flex items-center justify-center">
         <div className="flex justify-center items-center gap-3 flex-col md:flex-row ">
          <div data-aos="fade-in" className="bg-[#D4A762] flex  flex-col items-center px-10 py-12 gap-4 rounded-xl">
            <FaUsers className="text-6xl text-white" />
            <h1 className="font-['Playball',cursive] text-5xl font-bold">
              <Scrolltrigger onEnter={()=> setCounterOn(true) }onExit={()=> setCounterOn(false)}>
             {counteron && <Countup start={0} end={695} duration={2} delay={0}></Countup>}
            
              </Scrolltrigger>
            </h1>
            <p className="text-2xl font-bold text-center">HAPPY CUSTOMERS</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="700" className="bg-[#D4A762] flex  flex-col items-center px-16 py-12  gap-4 rounded-xl">
            <FaUsersGear className="text-6xl text-white" />
            <h1 className="font-['Playball',cursive] text-5xl font-bold">
            <Scrolltrigger onEnter={()=> setCounterOn(true) }onExit={()=> setCounterOn(false)}>
             {counteron && <Countup start={0} end={107} duration={2} delay={0}></Countup>}
            
              </Scrolltrigger>
            </h1>
            <p className="text-2xl font-bold text-center">EXPERT CHEFS</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="800" className="bg-[#D4A762] flex  flex-col items-center px-10 py-12 gap-4 rounded-xl">
            <FaCheck className="text-6xl text-white" />
            <h1 className="font-['Playball',cursive] text-5xl font-bold">
            <Scrolltrigger onEnter={()=> setCounterOn(true) }onExit={()=> setCounterOn(false)}>
             {counteron && <Countup start={0} end={253} duration={2} delay={0}></Countup>}
            
              </Scrolltrigger>
            </h1>
            <p className="text-2xl font-bold text-center">EVENTS COMPLETE</p>
          </div>
          </div>
         </div>



        <div className="container mx-auto flex justify-center items-center p-10 relative">
            <img data-aos="flip-right"  src={fact} className="rounded-xl"></img>
            <div className="absolute z-20 top-50% video">
                <button className="text-5xl md:text-8xl"><FaCirclePlay className="text-white"/></button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Count;
