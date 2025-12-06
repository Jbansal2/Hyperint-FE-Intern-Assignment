import React from 'react'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/Product'
import Review from '../components/Review'
import YouMayAlsoLike from '../components/YouMayAlsoLike'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <Review />
      <YouMayAlsoLike />
      <Footer/>
    </div>
  )
}

export default Product
