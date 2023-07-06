
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Products } from './pages/Products'
import { ProductsProvider } from './context/ProductsProvider'

export const App: React.FC = () => {
  return (
      <ProductsProvider>
        <Routes>
          <Route path='/' element={<Products/>} />
        </Routes>
      </ProductsProvider>
  )
}
