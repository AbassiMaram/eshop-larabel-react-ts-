// src/components/checkout/checkout.component.tsx
import React from 'react';
import { CheckoutItemProps } from '../../types';

interface CheckoutProps {
  cartItem: CheckoutItemProps['cartItem'];
}

const Checkout: React.FC<CheckoutProps> = ({ cartItem }) => {
  // Your component logic here

  return (
    <div>
      {/* Render your checkout details */}
      <h1>Checkout</h1>
      <div>{cartItem.product_title}</div>
      {/* other details */}
    </div>
  );
};

export default Checkout;
