import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'

export const useProductsProvider = (): any => {
  // if (!ProductsContext) throw new Error('There is not products provider')
  return useContext(ProductsContext)
}
