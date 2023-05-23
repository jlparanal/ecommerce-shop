import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </Router>
  </React.StrictMode>
);
