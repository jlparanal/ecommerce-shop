import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); 
    };
    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return <ProductContext.Provider value={{products: filteredProducts, handleSearch}} >{children}</ProductContext.Provider>;
};

export default ProductProvider;
