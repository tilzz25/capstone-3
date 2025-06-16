import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './cart';
import '../styles/navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">SmartShop</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({totalItems})</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
