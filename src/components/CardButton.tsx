
interface CardButtonProps {
  text: string
  click: () => void
}

export const CardButton: React.FC<CardButtonProps> = ({ text, click }: CardButtonProps) => {
  return (
    <section>
        <button onClick={click} className='bg-blue-400 p-4 rounded-lg text-white'>{text}</button>
    </section>
  )
}
