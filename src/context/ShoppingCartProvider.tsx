import { useContext, useState } from 'react'
import { type ReactNode, createContext, useEffect } from 'react'

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
  cartItems: CartItem[]
  isOpen: boolean
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const ShoppingCartContext = createContext<ShoppingCartContextP>({} as ShoppingCartContextP)

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('items') ?? '[]')
  )

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems))
  }, [cartItems])

  const openCart = (): void => { setIsOpen(true) }
  const closeCart = (): void => { setIsOpen(false) }

  const getItemQuantity = (id: number): number | boolean => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return cartItems.find(item => item.id === id)?.quantity ?? 0
  }

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const increseCartQuantity = (id: number): void => {
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
  const decreaseCartQuantity = (id: number): void => {
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

  const removeFromCart = (id: number): void => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{
      openCart,
      closeCart,
      getItemQuantity,
      increseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartQuantity,
      cartItems,
      isOpen
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartProvider = (): any => {
  return useContext(ShoppingCartContext)
}
