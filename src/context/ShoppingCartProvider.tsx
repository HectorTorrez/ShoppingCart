import { type ReactNode, createContext, useEffect } from 'react'
import { useState } from 'react'
interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  quantity: number
}

interface ShoppingCartContextP {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ShoppingCartContext = createContext({} as ShoppingCartContextP)

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('items') || '[]')
  )

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems))
  }, [cartItems])

  const openCart = () => { setIsOpen(true) }
  const closeCart = () => { setIsOpen(false) }

  const getItemQuantity = (id: number): any => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const increseCartQuantity = (id: number): any => {
    setCartItems(curremItems => {
      if (curremItems.find(item => item.id === id) == null) {
        return [...curremItems, { id, quantity: 1 }]
      } else {
        return curremItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const decreaseCartQuantity = (id: number): any => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number): any => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increseCartQuantity, decreaseCartQuantity, removeFromCart, openCart, closeCart, cartQuantity, cartItems, isOpen }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
