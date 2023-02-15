import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='h-full'>
      <Component {...pageProps} />
    </div>
  )
}
