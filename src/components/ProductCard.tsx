
import { ButtonsContainer } from './ButtonsContainer'
import { useShoppingCartProvider } from '../context/ShoppingCartProvider'

interface Props {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}

export const ProductCard: React.FC<Props> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title
}: Props) => {
  const { getItemQuantity } = useShoppingCartProvider()

  const quantity = getItemQuantity(id)
  return (
    <section className="max-w-xs flex flex-col items-center mx-auto border border-gray-200  rounded-xl">
        <section className="mb-10  self-center p-5" >
            <h2 className="font-bold  h-32 text-lg text-center">{title}</h2>
             <p className="font-medium text-gray-500 text-end">{category}</p>
             <p className="font-bold text-end "> ${price}</p>

            <img className="h-60 bg-cover m-auto" src={image} alt="" />
        </section>

        <section className="flex flex-col  h-full border-t border-gray-200 ">

            <section className="w-3/4 text-center flex flex-col justify-between m-auto mt-3  h-full gap-10">

            <p className="font-normal">{description}</p>
            <>

        </>
            <div className="flex flex-col  items-center justify-center mb-10">
            <ButtonsContainer key={id} id={id} quantity={quantity}/>
            <div className='flex justify-center gap-3 mt-4'>
            <p className=' flex items-center gap-1 text-sm'> {rating.rate}</p>
             <p className=' flex items-center gap-1 text-sm'> {rating.count}</p>
            </div>

            </div>
            </section>

        </section>
    </section>
  )
}
