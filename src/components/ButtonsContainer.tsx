import { CardButton } from './CardButton'
interface Props {
  quantity: number
}

export const ButtonsContainer: React.FC<Props> = ({ quantity }: Props) => {
  return (
    <>
     {
                quantity === 0
                  ? (
                    <CardButton text='+ Add To Cart'/>
                    )
                  : (
                    <section className='flex justify-center gap-5 items-center' >
                    <CardButton text='-'/>
                    {quantity} in Cart
                    <CardButton text='+'/>

                    </section>
                    )
            }
    </>
  )
}
