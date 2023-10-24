import React, { useState } from "react";
import Button from "./Button";
import data from "./data";
import Food from "./Food";
import fooddata from "./fooddata";
import f from "aos"
function Menu() {
  f.init({duration:1000})

  const [btn,setBtn]=useState(data)
  const [food,setFoodData]=useState(fooddata)
  const [filItem , setFilItem]  = useState([]) 

  return (
    <div className="bg-[#FFFCF8]" >
      <div  className="pt-10 flex flex-col items-center mt-24  justify-center gap-7 lg:gap-8 ">
        <div data-aos="fade-up" className="border-2 border-[#D4A762] rounded-3xl p-2  flex justify-center items-center  w-40 bg-[#FFFCF8]">
          <h5 className="font-semibold text-xl">OUR MENU</h5>
        </div>
      </div>
      <h1 data-aos="fade-down" className="font-['Playball',cursive] text-4xl lg:text-5xl mt-5 text-center">Most Popular Food in the World</h1>
      <div>
        <div>
           <Button  btn={btn} filItem={filItem} food={food} setFilItem={setFilItem}/>
        </div>
        <div>
          <Food data-aos="fade-up" food={filItem} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
