import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navigationbar from '@/components/navbar/Navbar'
import SideBar from '@/components/sidebar/Sidebar'
import Login from '@/components/authentication/login/login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Glowding Page</title>
      </Head>
      <main className='h-full'>
        <div className='h-full w-full'>
          <Navigationbar/>
        </div>
      </main>
    </>
  )
}
