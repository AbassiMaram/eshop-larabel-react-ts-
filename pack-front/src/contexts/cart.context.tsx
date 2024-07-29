// src/contexts/cart.context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  // other properties
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartItemCount: number;
  setCartItemCount: React.Dispatch<React.SetStateAction<number>>;
  isCartOpen: boolean; // Add this if needed
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>; // Add this if needed
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartItemCount, setCartItemCount, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
