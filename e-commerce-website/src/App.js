

import React from 'react';  
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Toast from './components/Toast'; 
import { useState } from 'react';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <HeroSection />
      <ProductGrid onAddToCart={handleAddToCart} />
      <CTASection />
      <Footer />
      <Toast show={showToast} />
    </>
  );
}
export default App;
