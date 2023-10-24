import { useState } from "react"
import {FaSearch,FaBars} from "react-icons/fa"
import { Link } from "react-router-dom"
function Navbar(){
    const [Sidenav,setSideNav]=useState(false)
    const[btn,setBtn]=useState(null)
    const[home,sethome]=useState(true)
function handlebtn(e){
    sethome(false)
    setBtn(e.target.textContent)
    setSideNav(false)
}

function handledrop(){
    setSideNav (!Sidenav)
}

    return(
        <div className="bg-[#FFFCF8] p-7 flex justify-between lg:justify-evenly items-center border-b-2 ">
        <h1 className="text-[#D4A762] font-['Playball',cursive] text-5xl"> Cater<span className="text-black">Serv</span></h1>
        <div className="lg:flex items-center hidden ">
            <ul className="flex gap-7 ">
                
                <li> <Link className= {home?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} onClick={handlebtn} to="/">Home</Link></li>
                <li> <Link className={btn==="About"?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} to="/about"  onClick={handlebtn}>About</Link></li>
                <li> <Link className={btn==="Services"?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} to="/services"  onClick={handlebtn}>Services</Link></li>
                <li> <Link className={btn==="Event"?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} to="/event"  onClick={handlebtn}>Event</Link></li>
                <li> <Link className={btn==="Menu"?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} to="/menu"   onClick={handlebtn}>Menu</Link></li>
                <li> <Link className={btn==="Team"?"text-xl  text-[#D4A762] font-semibold cursor-pointer":"text-xl  text-gray-500 font-semibold cursor-pointer"} to="/team"  onClick={handlebtn}>Team</Link></li>
            </ul>
        </div>
        <div className="gap-5 lg:flex hidden">
            <div className="w-12 h-12 bg-[#D4A762] rounded-full flex items-center justify-center text-xl group hover:bg-black hover:text-white cursor- transition-all duration-1000 ">
               <FaSearch className="group-hover:rotate-[360deg] transition-all duration-1000" />
            </div>
            <div className="w-36 h-12 bg-[#D4A762] text-black flex items-center justify-center rounded-3xl text-xl hover:bg-black hover:text-[#D4A762] hover:scale-[1.1]">
                <button><Link to="/table">Book Now</Link></button>
            </div>
        </div>
        <div className="lg:hidden relative text-xl text-[#D4A762] border-x-4 border-y-4 py-2 px-2 rounded ">
        <FaBars onClick={handledrop}/>
        </div>
        <div className={Sidenav ? "z-[99] w-[100%] h-full  bg-[#FFFCF8] absolute top-[97px] left-0 transition-all duration-1000  lg:hidden":"w-[100%] h-full  bg-[#FFFCF8] absolute -top-[100%] left-0 transition-all duration-1000 lg:hidden"} >
    <ul className="flex flex-col gap-6 ms-5 p-5 text-center ">
        <li>
        <Link className={btn==="Home"?"text-lg text-[#D4A762] font-semibold":"text-lg text-gray-500 font-semibold"}  to="/" onClick={handlebtn}>Home</Link>
        </li>
        <li>
               <Link className={btn==="About"?"text-lg text-[#D4A762] font-semibold":"text-lg text-gray-500 font-semibold"} onClick={handlebtn}  to="/about">About</Link>
        </li>
        <li>
            <Link className={btn==="Services"?"text-lg text-[#D4A762] font-semibold":"text-lg text-gray-500 font-semibold"}  onClick={handlebtn} to="/services">Services</Link>
        </li>
        <li>
           <Link className={btn==="Event"?"text-lg text-[#D4A762] font-semibold":"text-lg text-gray-500 font-semibold"}  to="/event" onClick={handlebtn}>Event</Link>
        </li>
        <li>
            <Link className={btn==="Team"?"text-lg text-[#D4A762] font-semibold":"text-lg text-gray-500 font-semibold"} to="/team" onClick={handlebtn}>Team</Link>
        </li>
    </ul>
</div>
    </div>
    )
}
export default Navbar