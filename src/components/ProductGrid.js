import React from 'react';

const products = [
  { id: 1, title: "Corn On The Cob - Peeled (Raw) ×10", price: "₦1,200.00", image: "/images/products/green.jpg" },
  { id: 2, title: "Ube (African Pear) ×10", price: "₦1,500.00", image: "/images/products/green.jpg" },
  { id: 3, title: "Tatase Pepper - Big Basket", price: "₦2,100.00", image: "/images/products/green.jpg" },
  { id: 4, title: "Efo Tete - Cut Up", price: "₦450.00", image: "/images/products/green.jpg" },
  { id: 5, title: "Beans Oloyin ~4 L", price: "₦13,700.00", image: "/images/products/green.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4 mt-20"> {/* Added mt-20 for margin-top */}
      {Array.from({ length: 7 }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4"/>
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-lg text-green-700 font-bold mb-2">{product.price}</p>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
