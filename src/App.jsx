import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='products' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
