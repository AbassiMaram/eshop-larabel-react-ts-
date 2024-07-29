// src/components/cart-item/cart-item.component.tsx
import React from 'react';

interface CartItemType {
  id: number;
  title: string;
  quantity: number;
  imageUrl: string;
  price: number;
}

interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { title, quantity, imageUrl, price } = cartItem;

  return (
    <div>
      <h2>{title}</h2>
      <p>Quantity: {quantity}</p>
      <img src={imageUrl} alt={title} />
      <p>Price: ${price}</p>
    </div>
  );
};

export default CartItem;
