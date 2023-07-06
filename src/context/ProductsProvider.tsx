
import { type SetStateAction, createContext, useEffect, useState } from 'react'
import { products } from '../services/Products'

interface ProductsProviderProps {
  dataProducts: [Product | never]
}

interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string

}

export const ProductsContext = createContext()

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [dataProducts, setDataProducts] = useState<ProductsProviderProps[]>([])
  useEffect(() => {
    const getData = async (): Promise<SetStateAction<ProductsProviderProps>> => {
      const product = await products()
      setDataProducts(product)
    }

    return async () => { await getData() }
  }, [])

  return (
    <ProductsContext.Provider value={{ dataProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
