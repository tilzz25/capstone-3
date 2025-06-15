import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="nav-main">
      <h1 className="text-xl font-bold">SmartShop</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
