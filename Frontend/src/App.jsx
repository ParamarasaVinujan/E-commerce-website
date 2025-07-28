import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import AboutPage from './components/pages/AboutPage'
import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'
import ProductDetailPage from './components/pages/ProductDetailPage';
import UserRegisterPage from './components/pages/UserRegisterPage';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import WishlistPage from './components/pages/WishlistPage';  // Added import

import './App.css'
import CheckoutPage from './components/pages/CheckoutPage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <WishlistProvider>
        <Header />
        <div className="pt-20 px-4"> {/* Adjust pt-20 based on header height */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
        </div>
       
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
