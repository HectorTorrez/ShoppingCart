import { useShoppingCartProvider } from '../context/ShoppingCartProvider'

interface Props {
  quantity: number
  id: number
}

export const ButtonsContainer: React.FC<Props> = ({ quantity, id }: Props) => {
  const { increseCartQuantity, decreaseCartQuantity } = useShoppingCartProvider()
  return (
    <>
     {
                quantity === 0
                  ? (
                    <button onClick={() => increseCartQuantity(id)} className='bg-blue-400 p-4 rounded-lg text-white'>+ Add To Cart</button>
                    )
                  : (
                    <section className='flex justify-center gap-5 items-center' >
                      <button onClick={() => decreaseCartQuantity(id)} className='bg-blue-400 p-4 rounded-lg text-white'>-</button>
                    {quantity} in Cart
                    <button onClick={() => increseCartQuantity(id)} className='bg-blue-400 p-4 rounded-lg text-white'>+</button>

                    </section>
                    )
            }
    </>
  )
}
