import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  //product state
  const [products, setProducts] = useState([])
  //fetch products
  useEffect(() => {
      const fetchProducts = async ()=> {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(response)
      }
      fetchProducts()
  }, [])
  return ( 
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider