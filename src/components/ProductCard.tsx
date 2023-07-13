
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
    <section className="max-w-xs flex flex-col items-center mx-auto border border-gray-200  rounded-xl shadow-lg">
        <section className="mb-10  self-center p-5" >
            <h2 className="font-bold  h-32 text-lg text-center">{title}</h2>
             <p className="font-medium text-gray-500 text-end">{category}</p>
             <p className="font-bold text-end "> ${price}</p>

            <img className="h-60 bg-cover m-auto hover:scale-150 duration-200 rounded-3xl" src={image} alt="" />
        </section>

        <section className="flex flex-col  h-full border-t border-gray-200 ">

            <section className="w-3/4 text-center flex flex-col justify-between m-auto mt-3  h-full gap-10">

            <p className="font-normal">{description}</p>
            <>

        </>
            <div className="flex flex-col  items-center justify-center mb-10">
            <ButtonsContainer key={id} id={id} quantity={quantity}/>
            <div className='flex justify-center gap-3 mt-4'>
            <p className=' flex items-center gap-1 text-sm text-blue-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

            {rating.rate}</p>
             <p className=' flex items-center gap-1 text-sm text-red-400'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

             {rating.count}</p>
            </div>

            </div>
            </section>

        </section>
    </section>
  )
}
