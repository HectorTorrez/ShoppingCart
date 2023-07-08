
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Products } from './pages/Products'

export const App: React.FC = () => {
  return (

         <Routes>
          <Route path='/' element={<Products/>} />
          </Routes>

  )
}
