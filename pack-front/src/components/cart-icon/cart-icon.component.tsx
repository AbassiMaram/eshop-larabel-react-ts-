// src/components/cart-icon/cart-icon.component.tsx
import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../assets/shopping-bag.svg'; // Import SVG as React component

interface CartIconProps {
  cartOpenHandler: () => void;
  cartItemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ cartOpenHandler, cartItemCount }) => {
  return (
    <div className="cart-icon-container" onClick={cartOpenHandler}>
      <ShoppingBagIcon className="shopping-icon" /> {/* Use as React component */}
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
