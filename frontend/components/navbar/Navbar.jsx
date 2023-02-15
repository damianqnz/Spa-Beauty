import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

const Navigationbar = () => {
  const [menu, setMenu] = useState(false)

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setMenu(true)
  }

  const handleCloseMenu = (e) => {
    e.preventDefault();
    setMenu(false)
  }

  return (
    // div padre
    <div className="w-full">
      <div className="w-full flex flex-row opacity-100">
        <div className="basis-1/2 flex flex-row justify-start items-center gap-2">
          <img className="basis-[20%] w-[70px] h-[50px]" src='/logoKimka.png'/>
          <p className="basis-[80%]">
            Kimka
          </p>
        </div>
        <div className="basis-1/2 flex flex-row justify-end items-center">
          <div className="px-4">
              <svg onClick={(e) => handleOpenMenu(e)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </div>
        </div>
      </div>
      <div>
        {
          // condicon ? VERDADERO : FALSO
          menu === true ? (
            <div className="h-screen w-full bg-black/50 absolute flex flex-row pt-[10rem] justify-center">
              <div className="flex flex-col gap-6">
                <p className="font-roboto text-3xl">Home</p>
                <p className="font-roboto">Contact</p>
                <p className="font-roboto">About</p>
                <p className="font-roboto">Shop</p>
                <p className="font-roboto">Service</p>
              </div>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

export default Navigationbar;
