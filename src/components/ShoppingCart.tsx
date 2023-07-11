import { StoreItem } from './StoreItem'

export const ShoppingCart = ({ cartItems, closeCart, dataProducts }) => {
  return (
    <section className="flex p-5 gap-10 flex-col fixed top-0 right-0 h-screen lg:w-2/5 bg-white overflow-auto ">
    <header className="flex justify-between items-center">
      <h2>Store</h2>
      <button onClick={closeCart} className="text-2xl font-bold">&times;</button>
    </header>

     {
            cartItems?.map(product => {
              return <StoreItem key={product.id} {...product} dataProducts={dataProducts} />
            })
    }
    </section>
  )
}
