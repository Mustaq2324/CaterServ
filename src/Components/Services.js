import React from "react";
import { FaCheese,FaPizzaSlice,FaHotdog,FaHamburger,FaWineGlassAlt,FaWalking,FaWheelchair,FaUtensils} from "react-icons/fa";
import f from "aos"
function Services() {
  f.init({duration:1000})

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div data-aos="fade-up" className="border-2 p-2 border-[#D4A762] rounded-3xl flex justify-center items-center w-40 bg-'[#FFFCF8]">
          <h5  className="font-semibold text-xl">OUR SERVICES</h5>
        </div>
      </div>
      <h1 data-aos="fade-down" className="font-['Playball',cursive] text-4xl lg:text-6xl mt-5 text-center">
        What We Offer
      </h1>
      <div>
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
        
            <div data-aos="fade-down"  className="  mx-auto w-[300px] h-[350px] gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaCheese className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Wedding Services</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
            <div data-aos="fade-down" data-aos-delay="200" className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaPizzaSlice className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Corporate Catering</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
            <div data-aos="fade-down" data-aos-delay="300" className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaHotdog className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Cocktail Reception</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
            <div data-aos="fade-down" data-aos-delay="400" className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaHamburger className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Bento Catering</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
          
          
          
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-16">
        
            <div  data-aos="fade-down"  className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaWineGlassAlt className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Pub Party</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
            <div  data-aos="fade-down" data-aos-delay="200"  className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaWalking className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Home Delivery</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
          
          </div>
           
          <div  data-aos="fade-down" data-aos-delay="300"   className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaWheelchair className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Sit-down Catering</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
</div>
            <div  data-aos="fade-down" data-aos-delay="400"   className="  mx-auto w-[300px] h-[350px] group  gap-4 text-4xl shadow-xl ">
              <div className="w-[300px] h-[0px] group-hover:bg-[#D4A762] group-hover:h-full transition-all duration-[1500ms] p-5 flex flex-col gap-5 rounded-xl items-center">
             <div> <FaUtensils className="text-[#D4A762] text-8xl group-hover:text-black transition-all duration-[1500ms]" /></div>
              <h1 className="text-3xl">Buffet Catering</h1>
              <p className="text-xl text-gray-600 gro text-center group-hover:text-white transition-all duration-[1500ms]">Contrary to popular belief, ipsum is not simply random.</p>
              <div>
              <button className="bg-[#D4A762] rounded-xl px-5 py-3 text-xl group-hover:bg-white transition-all duration-[1500ms] ">Read more</button>
              </div>
              </div>
              </div>
          
          </div>
          
          </div>
          
        </div>
     
   
  );
}

export default Services;
