import React from 'react';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
