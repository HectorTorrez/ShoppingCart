
import { formatCurrency } from '../utilities/formatCurrency'
import { StoreItem } from './StoreItem'

interface dataProducts {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}
interface CartItem {
  id: number
  quantity: number
}

interface ShoppingCartProps {
  cartItems: CartItem[]
  closeCart: () => void
  dataProducts: dataProducts[]
  isOpen: boolean
}

export const ShoppingCart = ({ cartItems, closeCart, dataProducts, isOpen }: ShoppingCartProps): JSX.Element => {
  return (
    <section className={`flex p-5 gap-10 flex-col fixed top-0 right-0 h-full w-full lg:w-2/5 bg-white overflow-auto transition-opacity duration-300 ${isOpen ? '' : 'opacity-0'}`}>
    <header className="flex justify-between items-center">
      <h2 className='font-bold text-xl'>Store</h2>
      <button onClick={closeCart} className="text-2xl font-bold">&times;</button>
    </header>

     {
            cartItems?.map(product => {
              return <StoreItem key={product.id} {...product} dataProducts={dataProducts} />
            })
    }

    <section className='flex justify-between font-bold text-3xl items-center'>
      <p className='font-bold text-5xl'>Total</p>
      {formatCurrency(
        cartItems.reduce((total, cartItem) => {
          const item = dataProducts.find(i => i.id === cartItem.id)
          return total + (item?.price ?? 0) * cartItem.quantity
        }, 0)
      )}
    </section>
    </section>
  )
}
