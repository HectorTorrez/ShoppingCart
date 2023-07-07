import { ShoppingCartContext } from '../context/ShoppingCartProvider'
import { useContext } from 'react'

export const useShoppingCartProvider = (): any => {
  return useContext(ShoppingCartContext)
}
