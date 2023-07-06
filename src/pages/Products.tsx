import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
import { useProductsProvider } from '../hooks/useProductsProvider'

export const Products: React.FC = () => {
  const { dataProducts }: dataProductsProps = useProductsProvider()

  return (
    <main className='max-w-6xl m-auto px-3'>
    <Navbar/>
      <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          dataProducts.map(product => {
            return (<ProductCard key={product.id} {...product} />)
          })
        }
      </section>
    </main>
  )
}
