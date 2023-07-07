
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Products } from './pages/Products'
import { ProductsProvider } from './context/ProductsProvider'
import { ShoppingCartProvider } from './context/ShoppingCartProvider'

export const App: React.FC = () => {
  return (
      <ProductsProvider>
        <ShoppingCartProvider>
         <Routes>
          <Route path='/' element={<Products/>} />
          </Routes>
        </ShoppingCartProvider>
      </ProductsProvider>
  )
}
