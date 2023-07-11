import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
// import { useProductsProvider } from '../hooks/useProductsProvider'
import { useEffect, useState } from 'react'
import { products } from '../services/products'
import { StoreItem } from '../components/StoreItem'
import { useShoppingCartProvider } from '../hooks/useShoppingCartProvider'
import { ShoppingCart } from '../components/ShoppingCart'
interface ProductsProviderProps {
  dataProducts: [Product | undefined]
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
  const [dataProducts, setDataProducts] = useState<ProductsProviderProps[]>([])

  const { cartItems, isOpen, closeCart } = useShoppingCartProvider()

  const getData = async (): Promise<void> => {
    const product: ProductsProviderProps[] | undefined = await products()
    if (product != null) {
      setDataProducts(product)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <main className='max-w-6xl m-auto px-3'>
    <Navbar/>
      <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          dataProducts?.map(product => {
            return (<ProductCard key={product.id} {...product} />)
          })
        }
      </section>

        {
          isOpen && (<ShoppingCart cartItems={cartItems} dataProducts={dataProducts} closeCart={closeCart}/>)
        }
        {/* {
          isOpen && (<>
            {
            cartItems?.map(product => {
              return <StoreItem key={product.id} {...product} dataProducts={dataProducts} closeCart={closeCart} />
            })
          }
            </>)
        } */}

    </main>
  )
}
