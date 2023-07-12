
interface Props {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string

}

interface Data {
  dataProducts: Props[]
}

export const Filter = ({ setSelectedCategory }: Data) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }
  return (
    <section className='m-4 border border-black w-fit rounded-md p-4 outline-none'>
             <select name="select-categories" id="" onChange={(e) => { handleCategoryChange(e.target.value) }}>
                   <option value=''>Select</option>

                   <option value="men's clothing">men's clothing</option>
                   <option value="jewelery">jewelery</option>
                   <option value="electronics">electronics</option>
                   <option value="women's clothing">women's clothing</option>

            </select>
    </section>
  )
}
