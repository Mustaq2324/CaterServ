import heroimg from "../img/hero.png";
import f from "aos"
function Hero() {
  f.init({duration:1000})
  return (
    <div className="">
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 md:grid-rows-1 md:grid-cols-2 bg-[#FFFCF8]">
        <div className="flex item-center">
          <div className="flex flex-col gap-10 justify-center md:p-10 p-6 items-center lg:items-start">
            <div data-aos="fade-up" className="border-2 border-[#D4A762] text-xl   rounded-xl flex justify-center w-72 lg:w-80">
              <h5>WELCOME TO CATERSERV</h5>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="700" className="font-['Playball',cursive] text-4xl lg:text-7xl md:text-4xl text-center lg:text-start ">
              Book <span className="text-[#D4A762]">Cater</span>Serv For Your
              Dream Event
            </h1>
            <div  className="flex gap-6 ">
              <button data-aos="fade-up" data-aos-delay="800" className="w-32 h-14 bg-[#D4A762] text-black flex items-center justify-center rounded-3xl text-xl hover:bg-black hover:text-[#D4A762] hover:scale-[1.1]">
                Book Now
              </button>
              <button data-aos="fade-up" data-aos-delay="900" className="w-32 h-14 bg-[#D4A762] text-black flex items-center justify-center rounded-3xl text-xl hover:bg-black hover:text-[#D4A762] hover:scale-[1.1]">
                Known More
              </button>
            </div>
          </div>
        </div>
        <div>
          <img data-aos="fade-up" data-aos-delay="1000" src={heroimg} className="w-90 p-10"/>
        </div>
      </div>
    </div>
  );
}
export default Hero;
