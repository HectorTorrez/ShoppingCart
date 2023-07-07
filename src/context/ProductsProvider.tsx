
import { createContext, useEffect, useState } from 'react'
import { products } from '../services/products'

interface ProductsProviderProps {
  dataProducts: [Product | undefined]
}

interface ProductsProviderChildren {
  children: React.ReactNode
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

export const ProductsContext = createContext<ProductsProviderProps | undefined>(undefined)

export const ProductsProvider: React.FC<ProductsProviderChildren> = ({ children }: ProductsProviderChildren) => {
  const [dataProducts, setDataProducts] = useState<ProductsProviderProps[]>([])

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const product: ProductsProviderProps[] | undefined = await products()
      if (product != null) {
        setDataProducts(product)
      }
    }

    return async () => { await getData() }
  }, [])

  return (
    <ProductsContext.Provider value={{ dataProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
