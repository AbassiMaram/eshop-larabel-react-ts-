// src/components/checkout-item/checkout-item.component.tsx
import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import { CheckoutItemProps } from '../../types';

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const { setCartItems } = useCartContext();

  // Example function to remove an item from the cart
  const removeFromCart = () => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== cartItem.id));
  };

  return (
    <div className="checkout-item">
      <span>{cartItem.product_title}</span>
      <span>{cartItem.product_price}</span>
      <button onClick={removeFromCart}>Remove</button>
    </div>
  );
};

export default CheckoutItem;
