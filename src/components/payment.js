import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '', payment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.address && form.payment) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Thank you for your order!</h2>
        <p>A confirmation has been sent to {form.email}.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="border p-2 rounded" required />
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" required />
        <select name="payment" value={form.payment} onChange={handleChange} className="border p-2 rounded" required>
          <option value="">Select Payment Method</option>
          <option value="card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;