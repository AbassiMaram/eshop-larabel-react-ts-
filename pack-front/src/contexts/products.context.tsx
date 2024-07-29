// src/contexts/products.context.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Product } from '../types/product.types';

interface ProductsContextType {
  products: Product[]; // Ensure this matches the imported Product type
  // Other properties or methods
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const products: Product[] = []; // Replace with actual logic to fetch products

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};

export default ProductsContext;
