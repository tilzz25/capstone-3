import React from 'react';
import ProductCard fro 6
import '../styles/productList.css';

import bag from '../assets/bag.jpeg';
import ball from '../assets/ball.jpeg';
import gloves from '../assets/gloves.jpeg';
import bat from '../assets/bat.jpg';
import helmet from '../assets/helmet.jpeg';
import pads from '../assets/pads.jpeg';
import shoes from '../assets/shoes.jpeg';
import box from '../assets/box.jpeg';

const products = [
  { id: 1, name: 'Cricket Bat', price: 120, image: bat },
  { id: 2, name: 'Cricket Ball', price: 25, image: ball },
  { id: 3, name: 'Batting Gloves', price: 45, image: gloves },
  { id: 4, name: 'Helmet', price: 150, image: helmet },
  { id: 5, name: 'Pads', price: 80, image: pads },
  { id: 6, name: 'Thigh Guard', price: 35, image: box },  // You might want to import actual image for thigh guard
  { id: 7, name: 'Box', price: 20, image: box },
  { id: 8, name: 'Shoes', price: 110, image: shoes },
  { id: 9, name: 'Wicket Keeping Gloves', price: 70, image: gloves }, // reuse gloves image or add new
  { id: 10, name: 'Cricket Bag', price: 90, image: bag },
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
