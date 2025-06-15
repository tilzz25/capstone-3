import React from 'react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function Products() {
  const { addToCart } = useCart();

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p>{product.description}</p>
          <p className="font-bold mt-1">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;