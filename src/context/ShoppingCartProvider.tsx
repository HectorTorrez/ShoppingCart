import { createContext, useState } from 'react'

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

interface CartItem {
  id: number
  quantity: number
}

interface ShoppingCartContextProps {
  getItemQuantity: (id: number) => number
  increseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined)
export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increseCartQuantity = (id: number) => {
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
  const decreaseCartQuantity = (id: number) => {
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

  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
