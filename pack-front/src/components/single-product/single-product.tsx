// src/components/single-product/single-product.tsx
import React from 'react';
import { useCartContext } from '../../contexts/cart.context'; // Importez le hook

interface Product {
  product_title: string;
  product_price: number;
  product_image: string;
}

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const { setCartItemCount, setCartItems } = useCartContext(); // Utilisez le hook pour accéder au contexte
  const { product_title, product_price, product_image } = product;

  const addToCart = () => {
    // Votre logique pour ajouter au panier
  };

  return (
    <div>
      <h2>{product_title}</h2>
      <p>{product_price}</p>
      <img src={product_image} alt={product_title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
