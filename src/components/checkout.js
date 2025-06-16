import React from 'react';
import { useCart } from './cart';
import '../styles/checkout.css';

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty} — ${item.price * item.qty}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="checkout-total">Total: ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
