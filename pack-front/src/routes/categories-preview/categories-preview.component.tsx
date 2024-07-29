// src/routes/categories-preview/categories-preview.component.tsx
import React from 'react';
import { useProductsContext } from '../../contexts/products.context'; // Import context hook
import './categories-preview.styles.scss'; // Ensure this file exists

const CategoriesComponent: React.FC = () => {
  const { products } = useProductsContext(); // Use the context hook

  return (
    <div className="category-preview-container">
      {/* Render your categories */}
    </div>
  );
};

export default CategoriesComponent;
