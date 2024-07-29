// src/components/product-card/product-card.component.tsx
import React from 'react';
import Button from '../button/button.component';
import SingleProduct from '../single-product/single-product';
import { useCartContext } from '../../contexts/cart.context'; // Use the custom hook
import { Product } from '../../types/product.types';

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const { setCartItems, setCartItemCount, cartItems, cartItemCount } = useCartContext(); // Use the custom hook

  const addToCart = (product: Product) => {
    // Update cartItems state
    setCartItems(prevItems => [...prevItems, product]); // prevItems should be of the correct type

    // Update cartItemCount state
    setCartItemCount(cartItemCount + 1); // cartItemCount is a number, so add directly
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {/* Render product details here */}
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
