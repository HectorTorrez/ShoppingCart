import { Navbar } from '../components/Navbar'
import { useEffect, useState, useMemo } from 'react'
import { products } from '../services/products'
import { ShoppingCart } from '../components/ShoppingCart'
import { Filter } from '../components/Filter'
import { useShoppingCartProvider } from '../context/ShoppingCartProvider'
import { ProductCard } from '../components/ProductCard'
interface ProductsProviderProps extends Product {
  dataProducts: Product[]

}

interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}

export const Products: React.FC = () => {
  const [dataProducts, setDataProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState('')

  const { cartItems, isOpen, closeCart } = useShoppingCartProvider()

  const getData = async (): Promise<void> => {
    const product: ProductsProviderProps[] = await products()
    if (product != null) {
      setDataProducts(product)
    }
  }
  useEffect(() => {
    void getData()
    setIsLoading(true)
  }, [])

  const getFilteredList = (): ProductsProviderProps[] => {
    if (selectedCategory === '') {
      return dataProducts
    }
    return dataProducts.filter(item => item.category === selectedCategory)
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, dataProducts])

  const uniqueCategories = dataProducts.reduce((unique, category) => {
    const categoryExists = unique.find(cat => cat.category === category.category)
    if (!categoryExists) {
      return [...unique, category]
    }
    return unique
  }, [])

  return (
    <main className='max-w-6xl m-auto px-3'>
    <Navbar/>

        <Filter uniqueCategories={uniqueCategories} setSelectedCategory={setSelectedCategory} />
      {
        isLoading
          ? (
          <>
           <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

{
  filteredList?.map(product => {
    return (<ProductCard key={product.id} {...product} />)
  })
}

</section>

{
  isOpen && (<ShoppingCart cartItems={cartItems} dataProducts={dataProducts} closeCart={closeCart}/>)
}
          </>
            )
          : (
          <>IS LOADING</>
            )
      }
    </main>
  )
}
