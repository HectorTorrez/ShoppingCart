interface CardButtonProps {
  text: string
}

export const CardButton: React.FC = ({ text }: CardButtonProps) => {
  return (
    <section>
        <button className='bg-blue-400 p-4 rounded-lg text-white'>{text}</button>
    </section>
  )
}
