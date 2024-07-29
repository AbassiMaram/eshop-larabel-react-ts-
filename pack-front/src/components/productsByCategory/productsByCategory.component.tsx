import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./product-by-category.styles.scss";
import SingleProduct from "../single-product/single-product";

// Définir l'interface pour un produit
interface Product {
  id: number;
  product_title: string;
  product_price: number;
  product_image: string;
}

// Définir l'interface pour les paramètres d'URL
interface Params extends Record<string, string | undefined> {
  category?: string; // Optional property
}

const ProductByCategory: React.FC = () => {
  const { category } = useParams<Params>(); // Obtenir la catégorie depuis les paramètres de l'URL
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) {
        setError("Category is undefined");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/products?category=${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products || []); // Ensure 'products' is an array
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-by-category-container">
      <h2>Products in {category || "Category"}</h2>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductByCategory;
