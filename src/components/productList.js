import React from 'react';
import ProductCard from './productCard';
import '../styles/productList.css';

const products = [
  { id: 1, name: 'Cricket Bat', price: 120 },
  { id: 2, name: 'Cricket Ball', price: 25 },
  { id: 3, name: 'Batting Gloves', price: 45 },
  { id: 4, name: 'Helmet', price: 150 },
  { id: 5, name: 'Pads', price: 80 },
  { id: 6, name: 'Thigh Guard', price: 35 },
  { id: 7, name: 'Box', price: 20 },
  { id: 8, name: 'Shoes', price: 110 },
  { id: 9, name: 'Wicket Keeping Gloves', price: 70 },
  { id: 10, name: 'Cricket Bag', price: 90 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
