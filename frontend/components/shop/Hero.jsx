import React from 'react'
// import images
//import fondo from '@/public/fondo.png'
// import Link
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        {/*text*/}
        <div className='flex flex-col'>
        {/* pre title */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Style
          </div>
          {/* tittle */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>New Concept in Lisboa <br />
            <span>Cosmetics</span>
          </h1>
          <Link href={'/'} className='self-start uppercase font-semibold border-b-2 border-Primary'>
            Discover More
          </Link>
        </div>
        {/*image*/}
        <div className='hidden lg:block'>
          <Image src="/fondo.png" fill sizes="(max-width: 500px) 100vw, (max-width: 768px) 50vw, 33vw"/>
        </div>
      </div>
    </section>
  )
}

export default Hero