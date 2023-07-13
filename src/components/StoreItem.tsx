import { useShoppingCartProvider } from '../context/ShoppingCartProvider'
import { formatCurrency } from '../utilities/FormatCurrency'

interface StoreItemProps {
  id: number
  quantity: number
  dataProducts: dataProduct[]
}

interface dataProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}

export const StoreItem = ({ quantity, dataProducts, id }: StoreItemProps): JSX.Element | null => {
  const { removeFromCart } = useShoppingCartProvider()

  const multi = `x${quantity}`
  const item = dataProducts.find(product => product.id === id)
  if (item == null) return null
  return (

    <section className="flex justify-between gap-2 ">
    <section className='flex'>
      <img className="w-32 h-32 " src={item.image} alt={item.image} />
      <section className="h-fit">
        <p className='font-bold '>{item.title}</p>
        <div className="flex justify-between">
        <p>${item.price}
        <span className='ml-2'>{quantity > 1 ? multi : ''}</span>
        </p>
        <p>{formatCurrency(item.price * quantity)}</p>
        </div>
    </section>
    </section>

    <p className='border border-red-300 h-fit px-2 rounded-md hover:bg-red-300 hover:text-white cursor-pointer' onClick={() => removeFromCart(item.id)}>&times;</p>
    </section>

  )
}
