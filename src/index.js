import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global and custom styles
import './index.css';
import './styles/App.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/productCard.css';
import './styles/cart.css';
import './styles/checkout.css';
import './styles/payment.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
