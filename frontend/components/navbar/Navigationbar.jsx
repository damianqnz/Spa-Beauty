import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import Contact from "../contact/Contact";



const Navigationbar = () => {
  const [menu, setMenu] = useState(false)

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setMenu(!menu)
  }

  const handleCloseMenu = (e) => {
    e.preventDefault();
    setMenu(false)
  }

  return (
    // div padre
    <div className="w-full"> {/* Hamburger Menu Icon */}
      <div className="flex flex-row items-center cursor-pointer">
        <div className="basis-1/3">
        </div>
        <div className="basis-1/3 flex flex-row justify-center">
          <img className='w-[70px] h-[70px]' src='/logoKimka.png'/>
        </div>
        <div className='basis-1/3 flex flex-row justify-end pr-6'>
          <svg onClick={handleOpenMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      {/* Main Menu */}
      {
        menu ? (
          <div className="bg-black/60 h-[100vh] text-black flex flex-col items-center text-[40px] tracking-[1px] overflow-hidden origin-left duration-500" id="hammm">
              <ul>
                <li><a className="hover:textShadow duration-500 hover:translate-y-[-5px]" href="#">Home</a></li>
                <li><a className="hover:textShadow duration-500 hover:translate-y-[-5px]" href="#">Shop</a></li>
                <li><a className="hover:textShadow duration-500 hover:translate-y-[-5px]" href="#">Services</a></li>
                <li><a className="hover:textShadow duration-500 hover:translate-y-[-5px]" href="#">Turns</a></li>
                <li><a className="hover:textShadow duration-500 hover:translate-y-[-5px]" href='/Contact.jsx'>Contact</a></li>
              </ul>
          </div>
        ) : ('')
      }
      
      {/* Heading and Some text */}
    </div>
    
  );
};

export default Navigationbar;
