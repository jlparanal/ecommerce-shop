import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductProvider from './contexts/ProductContext'; // Import the ProductProvider
import SidebarProvider from './contexts/SidebarContext'; // Import the SidebarProvider
import CartProvider from './contexts/CartContext'; // Import the CartProvider

const App = () => {
  return (
    <ProductProvider>
      <SidebarProvider>
        <CartProvider>
          <div className='overflow-hidden'>
            <Router>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetails />} />
              </Routes>
              <Sidebar />
              <Footer />
            </Router>
          </div>
        </CartProvider>
      </SidebarProvider>
    </ProductProvider>
  
  );
};

export default App;
