import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'

type UseProductsProvider = () => 

export const useProductsProvider = () => {
  if (!ProductsContext) throw new Error('There is not products provider')
  return useContext(ProductsContext)
}
