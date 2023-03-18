import CartProvider from '@/contexts/CartContext'
import ProductProvider from '@/contexts/ProductContext'
import SidebarProvider from '@/contexts/SidebarContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='h-full'>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider> 
            <Component {...pageProps} />
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </div>
  )
}
