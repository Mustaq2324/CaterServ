import React from "react";
import bgimg from "../../img/background-site.jpg";
import f from "aos"
function Table() {
  f.init({duration:1000})

  return (
    <div className="mt-10">
      <div data-aos="flip-right"
        className="container  px-4 mx-auto w-full h-full rounded-3xl"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="bg-[#FFFCF8] container mx-auto w-[90%]  h-full flex flex-col items-center justify-center border-[#D4A762] border-2 border-l-0 border-r-0 ">
          <div className=" flex justify-center md:mt-10">
            <div className="border-2 mt-10  border-[#D4A762] rounded-3xl flex justify-center items-center w-36 bg-[#FFFCF8]">
              <h5 className="font-semibold text-lg">BOOK US</h5>
            </div>
          </div>
          <h1 className="font-['Playball',cursive] text-4xl  mt-5 text-center">
            Where you want Our Services
          </h1>

          <div className="grid grid-cols-1 gap-8 px-4 mt-10 text-xl md:grid-cols-2 lg:grid-cols-3 ">
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >Select Country</option>
              <option>Usa</option>
              <option >Uk</option>
              <option>India</option>
            </select>
           </div>
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >Select City</option>
              <option>Usa</option>
              <option >Uk</option>
              <option>India</option>
            </select>
           </div>
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >Select Place</option>
              <option>Usa</option>
              <option >Uk</option>
              <option>India</option>
            </select>
           </div>
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >Event Type</option>
              <option>Big Event</option>
              <option >Medium Event</option>
              <option>Smaill Event</option>
            </select>
           </div>
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >No of Person</option>
              <option>100-200</option>
              <option >200-400</option>
              <option>400-600</option>
              <option>800-900</option>
            </select>
           </div>
           <div>
           <select className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" >
              <option >Type of Food</option>
              <option>Vegterian</option>
              <option >Non-Vegitrian</option>
            </select>
           </div>
           <div>
              <input type="number" className="rounded-lg h-[40px] border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full  p-2" placeholder="Your Contact No"/>
           </div>
           <div>
              <input type="date" className="rounded-lg h-[40px] p-5 border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" />
           </div>
           <div>
              <input type="email" className="rounded-lg h-[40px] p-5 border-[#d4a762] border-2 font-[oswald] text-gray-500 shadow-2xl w-full" placeholder="Enter you Email" />
           </div>
          </div>
          <div className="flex items-center justify-center mt-10 mb-10">
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Sumbit Now</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
