import Login from '@/components/authentication/login/Login'
import Navigationbar from '@/components/navbar/Navigationbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Glowding Page</title>
      </Head>
      <main className='h-full'>
        <div className='h-full w-full'>
          {/*Aca va ir la nueva importacion a probar */}
        <Navigationbar/>
        </div>
      </main>
    </>
  )
}
