// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ProductProvider from './contexts/ProductContext';
// import SidebarProvider from './contexts/SidebarContext';
// import CartProvider from './contexts/CartContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SidebarProvider>
//     <CartProvider>
//       <ProductProvider>
//         <React.StrictMode>
//           <App />
//         </React.StrictMode>
//       </ProductProvider>
//     </CartProvider>
//   </SidebarProvider>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { CartProvider } from './contexts/CartContext';

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
);
