import React from 'react'
import {FaLinkedinIn,FaFacebookF,FaTwitter,FaInstagram,FaCheck,FaPhoneAlt,FaClock} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {GrMail} from "react-icons/gr"
import menu1 from "../../img/menu-01.jpg"
import menu2 from "../../img/menu-02.jpg"
import menu3 from "../../img/menu-03.jpg"
import menu4 from "../../img/menu-04.jpg"
import menu5 from "../../img/menu-05.jpg"
import menu6 from "../../img/menu-06.jpg"
import f from 'aos'
function Footer() { 
    f.init({duration:1000})
  return (
    <div className='mt-20 bg-[#FFFCF8] pt-20 mx-auto px-4'>
        <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap lg:flex-nowrap md:justify-evenly md:items-start'>
            <div data-aos="zoom-out-down" className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start '>
            <h1 className="text-[#D4A762] font-['Playball',cursive] text-4xl "> Cater<span className="text-black">Serv</span></h1>
            <p className='w-[250px] text-gray-500 text-center md:text-start'>There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
            <div className=' flex gap-2 '>
            
            <div className='bg-[#d4a762]  flex items-center justify-center h-[35px] w-[35px] rounded-full cursor-pointer'> <FaFacebookF className=' hover:text-[#d4a762] text-black'></FaFacebookF>
            </div>
            <div className='bg-[#d4a762]  flex items-center justify-center h-[35px] w-[35px] rounded-full cursor-pointer'> <FaLinkedinIn className='text-lg hover:text-[#d4a762] text-black'></FaLinkedinIn>
            </div>
            <div className='bg-[#d4a762]  flex items-center justify-center h-[35px] w-[35px] rounded-full cursor-pointer'> <FaTwitter className='text-lg hover:text-[#d4a762] text-black'></FaTwitter>
            </div>
            <div className='bg-[#d4a762]   flex items-center justify-center h-[35px] w-[35px] rounded-full cursor-pointer'> <FaInstagram className='text-lg hover:text-[#d4a762] text-black'></FaInstagram>
            </div>
                
            </div>
            </div>
            <div data-aos="zoom-out-down" className='flex flex-col justify-center items-center gap-3'>
                <h5 className='text-2xl font-semibold'>Special Facilities</h5>
                <ul className='flex flex-col gap-3 cursor-pointer'>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaCheck className='text-[#d4a762] '/>Cheese Burger</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaCheck className='text-[#d4a762]'/>Sandwich</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaCheck className='text-[#d4a762]'/>Paneer Burger</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaCheck className='text-[#d4a762]'/>Special Sweet</li>
                </ul>
            </div>
            <div data-aos="zoom-out-down" className='flex flex-col justify-center items-center md:justify-start md:items-start   gap-3'>
            <h5 className='text-2xl font-semibold'>Contact Us</h5>
                <ul className='flex flex-col justify-center items-center md:justify-start md:items-start  gap-3 cursor-pointer'>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaLocationDot className='text-[#d4a762]'/> 123 Street, New York, USA</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaPhoneAlt className='text-[#d4a762]'/> (+012) 3456 7890 123</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><GrMail className='text-[#d4a762]'/> info@example.com</li>
                    <li className='text-gray-500 hover:ml-2 hover:mt-2 hover:text-[#D4A762] flex items-center gap-2'><FaClock className='text-[#d4a762]'/> 26/7 Hours Service</li>
                </ul>
            </div>
            <div data-aos="zoom-out-down" className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start '>
            <h5 className='text-2xl font-semibold'>Social Gallery</h5>
            <div className='grid grid-cols-3 gap-3'>
            <div className='border-2 border-[#d4a762] p-2 rounded-full flex items-center'>
                <img src={menu1} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            <div className='border-2 border-[#d4a762] p-2 rounded-full'>
                <img src={menu2} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            <div className='border-2 border-[#d4a762] p-2 rounded-full'>
                <img src={menu3} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            <div className='border-2 border-[#d4a762] p-2 rounded-full'>
                <img src={menu4} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            <div className='border-2 border-[#d4a762] p-2 rounded-full'>
                <img src={menu5} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            <div className='border-2 border-[#d4a762] p-2 rounded-full'>
                <img src={menu6} className='rounded-full h-[50px] w-[50px] hover:scale-[1.2]'/>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer