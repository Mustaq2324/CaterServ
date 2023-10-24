import React from "react";
import f from "aos"

function Blogdata({ data }) {
  f.init({duration:1000})

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap  justify-evenly px-4 mx-auto gap-20 mt-10 mb-10">
      {data.map((e) => {
        return (
          <div data-aos="flip-right" className="relative">
            <div className="overflow-hidden">
              <img src={e.img} className="h-[350px] rounded-xl hover:scale-[1.2] duration-1000 transition-all" />
            </div>
            <div className="absolute z-20 -bottom-10 left-0 lg:right-0  flex justify-center items-center   group">
              <div className="bg-[#d4a762] flex flex-col px-5 pt-3 pb-3 rounded-s-xl text-lg">
                <span>16</span>
                <span>sep</span>
              </div>
              <p className=" w-[210px] lg:w-[250px] rounded-e-xl bg-[#FFFCF8] text-lg pt-3 pb-3 ps-4 group-hover:text-[#d4a762]">
                How to get more test in your food room
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogdata;
