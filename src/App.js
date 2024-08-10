import React from 'react';
import Navbar from './components/Navbar';
import CarouselSection from './components/CarouselSection';
import ProductGrid from './components/ProductGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-white py-4 flex justify-center items-center space-x-16">
        <div className="flex items-center space-x-2">
          <i className="fas fa-box text-2xl"></i>
          <div>
            <div className="font-bold">Wide Assortment</div>
            <div className="text-gray-600">Over 10,000 items</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-tags text-2xl"></i>
          <div>
            <div className="font-bold">Save Time, Stress & Money</div>
            <div className="text-gray-600">Order online today</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-truck text-2xl"></i>
          <div>
            <div className="font-bold">Delivery Across Lagos</div>
            <div className="text-gray-600">Home and office delivery</div>
          </div>
        </div>
      </div>
      <CarouselSection />
      <ProductGrid />
      {/* Other components */}
    </div>
  );
}

export default App;
