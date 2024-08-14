import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Import CartProvider
import routes from './routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap RouterProvider with CartProvider */}
      <RouterProvider router={routes} />
    </CartProvider>
  </React.StrictMode>
);
