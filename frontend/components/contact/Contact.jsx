import React from 'react'

function Contact() {
  return (
    <div id='contact' className='flex w-full min-h-screen justify-center items-center p-8 md:p-0'>
      <div 
        className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#698269] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-black over flow-hidden'
      >
        <div className='flex flex-col justify-between gap-4 md:justify-start md:gap-8'>
          <div className='flex flex-col md:gap-6'>
            <h1 className='font-bold text-4xl tracking-wide'>
              Contact Us
            </h1>
            <p className='pt-2 text-cyan-100 text-sm'> 
              Formulario de contacto para consultas. No dudes en ponerte en contacto
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='inline-flex space-x-2 items-center'>
              <ion-icon name='call' 
              className='text-teal-400 text-xl'>
              </ion-icon>
              <span>+(351) 927-218-384</span>
            </div>
          </div>
          <div className='inline-flex space-x-2 items-center'>
              <ion-icon name='mail' 
              className='text-teal-400 text-xl'>
              </ion-icon>
              <span>glowding@gmail.com</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <ion-icon name='location' 
              className='text-teal-400 text-xl'>
              </ion-icon>
              <span>Parede, Lisboa, Portugal</span>
            </div>
          <div className='flex space-x-4 text-lg'>
              <a href='#'>
                <ion-icon name='logo-facebook'></ion-icon></a>
                <a href='#'>
                <ion-icon name='logo-instagram'></ion-icon></a>
                <a href='#'>
                <ion-icon name='logo-tiktok'></ion-icon></a>
        </div>
        </div>
          <div className='relative'>
            <div className='absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div> {/*bola de fondo superior */}
            <div className='absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28'></div> {/*bola de fondo inferior izq */} 
            <div className='relative a-10 bg-black rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
              <form action='' className='flex flex-col space-y-4'>
                <div>
                  <label for='' class='text-sm text-teal-400'>Full Name</label>
                </div>
                <div>
                  <input type='text' placeholder='First and last name' class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></input>
                </div>
                <div>
                  <label for='' class='text-sm text-teal-400'>Mail</label>
                </div>
                <div>
                  <input type='emailw' placeholder='Email Address' class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></input>
                </div>
                <div>
                  <label for='' class='text-sm text-teal-400'>Message</label>
                </div>
                <div>
                  <textarea placeholder='Description' row='4' class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                </div>
                <button className='inline-block self-end bg-[#698269] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
              </form>
            </div>
        </div>
      </div>
    <script type='module' src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>
    <script nomodule src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>
    </div>
  )
}

export default Contact