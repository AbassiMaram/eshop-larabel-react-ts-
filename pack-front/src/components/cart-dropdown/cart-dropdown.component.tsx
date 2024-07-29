// src/components/cart-dropdown/cart-dropdown.component.tsx
import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartItemType } from '../../types/cart-item.types';


interface CartDropdownProps {
  cartItems: CartItemType[];
  goToCheckoutHandler: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, goToCheckoutHandler }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;
