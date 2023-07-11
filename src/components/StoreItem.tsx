import { useShoppingCartProvider } from '../hooks/useShoppingCartProvider'

interface StoreItemProps {
  id: number
  quantity: number
  dataProducts: [dataProduct]
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

export const StoreItem = ({ quantity, dataProducts, id }: StoreItemProps) => {
  const { removeFromCart } = useShoppingCartProvider()

  const multi = `x${quantity}`
  const item = dataProducts.find(product => product.id === id)
  if (item == null) return null
  return (

    <section className="flex justify-between gap-2 ">
    <section className='w-32 h-32'>
      <img className="w-32 h-32 " src={item.image} alt={item.image} />
    </section>
    <section className="h-fit">
        <p>{item.title}</p>
        <div className="flex justify-between">
        <p>${item.price}
        <span className='ml-2'>{quantity > 1 ? multi : ''}</span>
        </p>
        <p>${item.price * quantity}</p>
        </div>
    </section>
    <p className='border border-red-300 h-fit px-2 rounded-md hover:bg-red-300 hover:text-white cursor-pointer' onClick={() => removeFromCart(item.id)}>&times;</p>
    </section>

  )
}
