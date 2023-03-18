import Navigationbar from 'components/navbar/Navigationbar'
import Register from 'components/authentication/Register'
// import { Sidebar } from 'flowbite-react'
import Head from 'next/head'
import HomePage from '@/components/shop/HomePage'
import Link from 'next/link'
import Contact from '@/components/contact/Contact'
import Header from '@/components/shop/Header'
import Footer from '@/components/shop/Footer'
import Sidebar from '@/components/shop/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Glowding</title>
      </Head>
      <main className='h-full'>
        <div> 
          <Navigationbar/>
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </>
  )
}


