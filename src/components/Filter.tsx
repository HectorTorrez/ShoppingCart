
interface Data {
  setSelectedCategory: (category: string) => void

}

export const Filter = ({ setSelectedCategory }: Data): JSX.Element => {
  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category)
  }
  return (
    <section className='m-4 border border-black w-fit rounded-md p-4 outline-none'>
             <select name="select-categories" id="" onChange={(e) => { handleCategoryChange(e.target.value) }}>
                   <option value=''>Select</option>

                   <option value="men's clothing">men&apos;s clothing</option>
                   <option value="jewelery">jewelery</option>
                   <option value="electronics">electronics</option>
                   <option value="women's clothing">women&apos;s clothing</option>

            </select>
    </section>
  )
}
