import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SpecialDishes from './components/SpecialDishes';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
}

export default App;