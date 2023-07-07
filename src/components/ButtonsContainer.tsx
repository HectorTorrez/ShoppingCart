import { useShoppingCartProvider } from '../hooks/useShoppingCartProvider'
import { CardButton } from './CardButton'
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
                    <CardButton click={() => increseCartQuantity(id)} text='+ Add To Cart'/>
                    )
                  : (
                    <section className='flex justify-center gap-5 items-center' >
                    <CardButton click={() => decreaseCartQuantity(id)} text='-'/>
                    {quantity} in Cart
                    <CardButton click={() => increseCartQuantity(id)} text='+'/>

                    </section>
                    )
            }
    </>
  )
}
